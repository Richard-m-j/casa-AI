from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import base64
from PIL import Image
from io import BytesIO  
from outline import outline
app = Flask(__name__)
CORS(app)

@app.route('/get_image', methods=['POST'])
def get_image():
    data = request.get_json()
    print(data)
    prompt=" <lora:casaHouse4:1>casa floor plan of house, 2d,"
    prompt = prompt+data["messages"]
    url = 'http://127.0.0.1:7860/sdapi/v1/txt2img'

    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }

    data = {
        "prompt": prompt,
        "negative_prompt": "text, 3d, color, rough lines, error, cropped, worst quality, low quality, jpeg artifacts, signature, watermark, username, blurry",
        "styles": [
            "string"
        ]
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))

    if response.status_code == 200:
        print("Request successful!")
        print("Response:")
        #print(response.json())
        print(response.json()["images"][0])
        image64 = response.json()["images"][0]
        image_data = base64.b64decode(image64)
        image = Image.open(BytesIO(image_data))
        # Save the image to a file
        image.save("D:\\Softwares\\Codes\\Hackathons\\CONVEX\\casa-AI\\client\\public\\plan.png")
        print("Image saved as plan.png")
        outline()
        print("Image outlined as plan.svg")
    else:
        print("Error:", response.status_code)
        print("Response:")
        print(response.text)

    return jsonify({"image": image64})



if __name__ == '__main__':
    app.run(debug=True)
