import threading
import subprocess
import argparse
import queue
from yolov8_region_counter_angle1 import tableFull1
from yolov8_region_counter_angle2 import tableFull2
from yolov8_region_counter_angle3 import tableFull3
from yolov8_region_counter_angle4 import tableFull4
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

#app = Flask(__name__)
#cors = CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type"]}})
def sub(str):
    subprocess.run(["python3",str])
    #exec(open(str).read())

#@app.route("/post-members", methods=["POST", "OPTIONS"])
#@cross_origin(origin='*', headers=['Content-Type', 'Authorization'], methods=['POST'])
def post_members():
    
    a1 = threading.Thread(target=sub, args=("yolov8_region_counter_angle1.py",))
    a2 = threading.Thread(target=sub, args=("yolov8_region_counter_angle2.py",))
    a3 = threading.Thread(target=sub, args=("yolov8_region_counter_angle3.py",))
    a4 = threading.Thread(target=sub, args=("yolov8_region_counter_angle4.py",))
    
    a1.start()
    a2.start()
    a3.start()
    a4.start()
    
    a1.join()
    a2.join()
    a3.join()
    a4.join()

    
    l1 = result1_queue.get()
    l2 = result2_queue.get()
    l3 = result3_queue.get()
    l4 = result4_queue.get()
    

    output = [0,0,0,0,0,0,0,0,0]
    for i in range(9):
        if l1[i] > 0 or l2[i] > 0 or l3[i] > 0 or l4[i] > 0:
            output[i] = 1
        else: 
            output[i] = 0
            
        #return output
    print(output)
    print(l1)
    print(l2)
    print(l3)
    print(l4)

#if __name__ == "__main__":
#   app.run(port=8000, debug=True)
post_members()
