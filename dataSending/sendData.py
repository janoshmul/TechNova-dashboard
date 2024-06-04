import socketio
import time


sio = socketio.Client()
data = 1000
NeedToSendData = True


@sio.event
def connect():
    print('connection established')
    

@sio.send
def pythonData():
    sio.emit('pythondata',{'value':1000})
    print('data send')

@sio.event
def disconnect():
    print('disconnected from server')

sio.connect('http://localhost:3000')
sio.wait()