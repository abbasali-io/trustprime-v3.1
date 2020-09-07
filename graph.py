import json
import time
import datetime
import csv
import pandas as pd
import matplotlib.pyplot as plt

# print("es")
data = pd.read_csv("coordinates.csv",header=None) #ISO-8859-1
# print("es")
# print(data.head(5))
dates=[]
counts=[]
current=0
counter=0
# print("Data:",data)
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


print("No. of Objects1111:",counts[1:])
print("Date111:",dates[1:])

plt.bar(dates[1:],counts[1:],color ='maroon',  
        width = 0.8)

plt.xlabel("Date")
plt.ylabel("No. of Objects Detected")

plt.show()