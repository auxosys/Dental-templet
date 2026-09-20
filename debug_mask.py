import cv2
import numpy as np
import os

img = cv2.imread('./public/logo-2.jpg')
print("Image shape:", img.shape)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
sat = hsv[:,:,1]
val = hsv[:,:,2]
print("Sat min/max:", np.min(sat), np.max(sat))
print("Val min/max:", np.min(val), np.max(val))

is_green = (sat > 20) & (val > 50)
is_black = (sat <= 20) & (val < 150)

print("Green pixels:", np.sum(is_green))
print("Black pixels:", np.sum(is_black))
