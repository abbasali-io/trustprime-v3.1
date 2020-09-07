import json
import time
import datetime
import csv
import pandas as pd
import matplotlib.pyplot as plt
from flask import Flask, render_template, Response,json,jsonify
# print("es")

def graphdata(file):
    dates=[]
    counts=[]
    current=0
    counter=0
    try:
        data = pd.read_csv(file,header=None) #ISO-8859-1
        
# print("Data:",data)
        if (len(data) > 1):
            for i in range(len(data)):
                x=data[0][i].split(' ')  # split time stamp on spaces
                date=(x[1]) #.split(":")) 
                date=int(date)#[2][:-2])
            # print(date)
        
                if current!=date:
                    counts.append(counter)
                    dates.append(current)

                    current=date
                    counter=0
                    # print("********************",date)
                if current==date:
                    counter+=1
            counts.append(counter)
            dates.append(current)
            # data.close()
            return jsonify(
    chartData=[{'data' :counts[1:],'label':'No. of Objects'}],
    # label=label,
    chartLabels=dates[1:]
    )
    except:
        return jsonify(
    chartData=[{'data' :counts,'label':'No. of Objects'}],
    # label=label,
    chartLabels=dates
    )
    
# print("es")
# print(data.head(5))
#     dates=[]
#     counts=[]
#     current=0
#     counter=0
# # print("Data:",data)
#     if (len(data) > 1):
#         for i in range(len(data)):
#             x=data[0][i].split(' ')  # split time stamp on spaces
#             date=(x[1]) #.split(":")) 
#             date=int(date)#[2][:-2])
#             # print(date)
        
#             if current!=date:
#                 counts.append(counter)
#                 dates.append(current)

#                 current=date
#                 counter=0
#                 # print("********************",date)
#             if current==date:
#                 counter+=1
#     counts.append(counter)
#     dates.append(current)


        # yield jsonify(
        # chartData=[{'data' :counts,'label':'No. of Objects'}],
        # # label=label, 
        # chartLabels=dates
        # )
    print("No. of Objects1111:",counts[1:])
    print("Date111:",dates[1:])
    