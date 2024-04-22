import cv2
import numpy as np
def outline():
  # Load the image from drive storage
  image_path = "D:\\Softwares\\Codes\\Hackathons\\CONVEX\\casa-AI\\client\\public\\plan.png"
  image = cv2.imread(image_path)

  # Step 2: Preprocess the image
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  blurred = cv2.GaussianBlur(gray, (5, 5), 0)
  edges = cv2.Canny(blurred, 50, 150)

  # Binarize the image
  _, binary = cv2.threshold(gray, 50, 255, cv2.THRESH_BINARY)

  # Apply morphological closing to remove small spots and text
  kernel = np.ones((4,4),np.uint8)
  closing = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)
  canny=cv2.Canny(closing, 50, 150)

  # Thresholding
  ret, thresh = cv2.threshold(canny, 15, 255, cv2.THRESH_BINARY)

  # Finding contours
  contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)

  print(type(contours))
  # Open SVG file for writing
  with open('D:\\Softwares\\Codes\\Hackathons\\CONVEX\\casa-AI\\client\\public\\plan.svg', 'w+') as f:
      # Write SVG header
      f.write('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{}" height="{}">'.format(canny.shape[1], canny.shape[0]))

      # Write contours as paths
      for contour in contours:
          f.write('<path d="M')
          for i in range(len(contour)):
              x, y = contour[i][0]
              f.write('{} {} '.format(x, y))
          f.write('" fill="none" stroke="black" stroke-width="2"/>')  # Specify stroke color and width

  # Close the SVG file
  f.write('</svg>')
  return