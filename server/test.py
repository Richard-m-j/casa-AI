import requests
import json
import base64
from PIL import Image
from io import BytesIO

url = 'http://127.0.0.1:7860/sdapi/v1/txt2img'

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
}

data = {
    "prompt": "house",
    "negative_prompt": "",
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
    print("Image saved as image.png")

else:
    print("Error:", response.status_code)
    print("Response:")