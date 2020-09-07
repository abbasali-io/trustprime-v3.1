import pyrebase

firebaseConfig = {
    'apiKey': "AIzaSyB5eoV43zFasCkUXSAFQ8bXMCXGLdHS_Z0",
    'authDomain': "livestream-3b7b6.firebaseapp.com",
    'databaseURL': "https://livestream-3b7b6.firebaseio.com",
    'projectId': "livestream-3b7b6",
    'storageBucket': "livestream-3b7b6.appspot.com",
    'messagingSenderId': "900564694390",
    'appId': "1:900564694390:web:8d121f704b38204e907657",
    'measurementId': "G-SGW11MYYTK"
  }
firebase=pyrebase.initialize_app(firebaseConfig)

db=firebase.database()

#update database
x=db.child('chartdata').child('cam1').get()
cam1key=''
for i in x:
  print(i.val())
  print(i.key())
  cam1key=i.key()

x=db.child('chartdata').child('cam2').get()
cam2key=''
for i in x:
  print(i.val())
  print(i.key())
  cam2key=i.key()


def firebaseData(camera,count,label):
    # x=db.child('chartdata').child(camera).get()
   
    if camera == 'cam1':
       db.child('chartdata').child(camera).child(cam1key).update(
         {'chartData':[{'data' :[count,40,60],'label':'No. of Objects'}],'chartLabels':[label,3,2]})

    if camera == 'cam2':
       db.child('chartdata').child(camera).child(cam2key).update(
      {'chartData':[{'data' :[count,40,60],'label':'No. of Objects'}],'chartLabels':[label,30,5]})
   