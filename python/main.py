import threading
import subprocess
import argparse
from yolov8_region_counter_angle1 import tableFull1
from yolov8_region_counter_angle2 import tableFull2
from yolov8_region_counter_angle3 import tableFull3
from yolov8_region_counter_angle4 import tableFull4
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

print("s")
#app = Flask(__name__)
#cors = CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type"]}})
def sub(str):
    #subprocess.run(["python/", str])
    exec(open(str).read())

print("s")
#@app.route("/post-members", methods=["POST", "OPTIONS"])
#@cross_origin(origin='*', headers=['Content-Type', 'Authorization'], methods=['POST'])
def post_members():
    
    print("s")
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
    
    l1 = tableFull1
    l2 = tableFull2
    l3 = tableFull3
    l4 = tableFull4

    output = [0,0,0,0,0,0,0,0,0]
    for i in range(9):
        if l1[i] > 0 or l2[i] > 0 or l3[i] > 0 or l4[i] > 0:
            output[i] = 1
        elif l1[i] > 0 or l2[i] > 0 or l3[i] > 0 or l4[i] > 0:
            output[i] = 1
        elif l1[i] > 0 or l2[i] > 0 or l3[i] > 0 or l4[i] > 0:
            output[i] = 1
        elif l1[i] > 0 or l2[i] > 0 or l3[i] > 0 or l4[i] > 0:
            output[i] = 1
        else: 
            output[i] = 0
            
        #return output
    print(output)

#if __name__ == "__main__":
#   app.run(port=8000, debug=True)
post_members()