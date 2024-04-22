import cv2
import numpy as np
import matplotlib.pyplot as plt
def outline():
    # Load the image from drive storage
    image_path = "D:\\Softwares\\Codes\\Hackathons\\CONVEX\\casa-AI\\client\\public\\plan.png"
    image = cv2.imread(image_path)

    # Step 2: Preprocess the image
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(blurred, 50, 150)

    # Convert the image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Binarize the image
    _, binary = cv2.threshold(gray, 50, 255, cv2.THRESH_BINARY)

    # Apply morphological closing to remove small spots and text
    kernel = np.ones((4,4),np.uint8)
    closing = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)

    # Load the binary image (already processed)
    binary_image = closing

    # Compute the distance transform
    dist_transform = cv2.distanceTransform(binary_image, cv2.DIST_L2, 3)

      # Apply morphology
    kernel = np.ones((3,3), np.uint8)
    dist_transform_eroded = cv2.morphologyEx(dist_transform, cv2.MORPH_ERODE, kernel)
