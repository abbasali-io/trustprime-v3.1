# -*- coding: utf-8 -*-

import json
import csv
import os
import time
import cv2 
from flask import Flask, render_template, Response,request,json,jsonify,make_response
import datetime
from graphdata import graphdata
from firebase import firebaseData
from traffic_counter import video_feed_counter
app = Flask(__name__)
sub = cv2.createBackgroundSubtractorMOG2()  # create background subtractor


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


def gen(url):
    """Video streaming generator function."""
    # cap = cv2.VideoCapture('768x576.avi')
   
    cap = cv2.VideoCapture(url)
    # if os.path.exists(file):
    #     os.remove(file)
        

    es = 1
    camera='cam1'
        # Read until video is completed
    while(cap.isOpened()):
        ret, frame = cap.read()  # import image
        if not ret: #if vid finish repeat
            frame = cv2.VideoCapture(url)
            continue
        if ret:  # if there is a frame continue with code
            image = cv2.resize(frame, (0, 0), None, 1, 1)  # resize image
            gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)  # converts image to gray
            fgmask = sub.apply(gray)  # uses the background subtraction
            kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))  # kernel to apply to the morphology
            closing = cv2.morphologyEx(fgmask, cv2.MORPH_CLOSE, kernel)
            opening = cv2.morphologyEx(closing, cv2.MORPH_OPEN, kernel)
            dilation = cv2.dilate(opening, kernel)
            retvalbin, bins = cv2.threshold(dilation, 220, 255, cv2.THRESH_BINARY)  # removes the shadows
            contours, hierarchy = cv2.findContours(dilation, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            minarea = 400
            maxarea = 50000



            # FIle to save coordinates value
            
            # else: print("The file does not exist") 

            # file1 = open("coordinates.txt","a+") 

            for i in range(len(contours)):  # cycles through all contours in current frame
                if hierarchy[0, i, 3] == -1:  # using hierarchy to only count parent contours (contours not within others)
                    area = cv2.contourArea(contours[i])  # area of contour
                    if minarea < area < maxarea:  # area threshold for contour
                        # calculating centroids of contours
                        cnt = contours[i]
                        M = cv2.moments(cnt)
                        cx = int(M['m10'] / M['m00'])
                        cy = int(M['m01'] / M['m00'])
                        # gets bounding points of contour to create rectangle
                        # x,y is top left corner and w,h is width and height
                        x, y, w, h = cv2.boundingRect(cnt)
                        # creates a rectangle around contour
                        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
                        # Prints centroid text in order to double check later on
                        cv2.putText(image, str(cx) + "," + str(cy), (cx + 10, cy + 10), cv2.FONT_HERSHEY_SIMPLEX,.3, (0, 0, 255), 1)
                        # print(x, y, x + w, y + h)
                        #get time
                        timestamp = datetime.datetime.now()
                        cv2.putText(image, timestamp.strftime("%A %d %B %Y %I:%M:%S%p"), (cx, cy - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0,0,255), 1)
                        cv2.drawMarker(image, (cx, cy), (0, 255, 255), cv2.MARKER_CROSS, markerSize=8, thickness=3,line_type=cv2.LINE_8)
                        # time.sleep(0.1)

                        # #Save coordinates value in .txt file
                        L = [x, y, x + w, y + h]                          
                        # # \n is placed to indicate EOL (End of Line) 
                        # file1.writelines(str(L)) 
                        # file1.write("\n") 

                        # #Save coordinates and ti,e stamp value in .JSON file
                        # dictionary ={ 
                        # "TimeStamp" : timestamp.strftime("%A %d %B %Y %I:%M:%S%p"), 
                        # "Coordinates" : str(L)                            
                        # } 

                        # json_object = json.dumps(dictionary, indent = 4) 
                        # with open("coordinates.json", "a+") as outfile: 
                        #     outfile.write(json_object)

                        
                        firebaseData(camera,es,[timestamp.strftime("%d")])
                        es +=1


        # file1.close() #to change file access modes 
        # write_obj.close()
        #cv2.imshow("countours", image)
        frame = cv2.imencode('.jpg', image)[1].tobytes()
        # yield frame
        # print(frame)
        yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        #time.sleep(0.1)
        key = cv2.waitKey(20)
        if key == 27:
            
            break
        # write_obj.close()
    # return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    x=Response(video_feed_counter('config\config.json','vertical','false','','videos/highway-resized-short.avi','cam1'),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    return  x
# rtsp://admin:xX533440@cctvoffice.dyndns.biz:558/user=admin_password=xX533440_channel=101_stream=0.sdp
@app.route('/video_feed_cam2')
def video_feed_cam2():
    """Video streaming route. Put this in the src attribute of an img tag."""
    x=Response(video_feed_counter('config\config.json','vertical','false','','videos/highway-resized-short.avi','cam2'),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    return  x
    
   
# @app.route('/getChartData1', methods=['GET'])
# def getChartData1():
#     file = request.args.get('files')
#     return graphdata(file)
#     # data=[85, 72, 78, 75, 77, 75]
#     # label='Crude oil prices'
#     # chartLabels=['January', 'February', 'March', 'April', 'May', 'June']
#     # # chartData=[]
#     # chartData.append(data)
#     # chartData.append(label)
#     # chartData.append(chartLabels)
#     # response = app.response_class(
#     #     response=json.dumps(chartData),
#     #     mimetype='text/plain'
#     # )
#     # return jsonify(
#     #     chartData=[{'data' :data,'label':label}],
#     #     # label=label,
#     #     chartLabels=chartLabels
#     # )
#     # return response
#     # return Response(data)
# @app.route('/getChartData', methods=['GET'])
# def getChartData():
#     file = request.args.get('files')
#     return graphdata(file)
#     # data=[85, 72, 78, 75, 77, 75]
#     # label='Crude oil prices'
#     # chartLabels=['January', 'February', 'March', 'April', 'May', 'June']
    
#     # return jsonify(
#     #     chartData=[{'data' :data,'label':label}],
#     #     # label=label,
#     #     chartLabels=chartLabels
#     # )

if __name__ == '__main__':
    app.run(debug=True)