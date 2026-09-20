import cv2
import numpy as np
import os

img = cv2.imread('./public/logo-2.jpg')
blurred = cv2.GaussianBlur(img, (3,3), 0)
hsv = cv2.cvtColor(blurred, cv2.COLOR_BGR2HSV)

sat = hsv[:,:,1]
val = hsv[:,:,2]

is_green = (sat > 20) & (val > 50)
is_black = (val < 150) & (sat <= 20)

print("Green pixels:", np.sum(is_green))
print("Black pixels:", np.sum(is_black))

green_mask = np.full(img.shape[:2], 255, dtype=np.uint8)
green_mask[is_green] = 0
black_mask = np.full(img.shape[:2], 255, dtype=np.uint8)
black_mask[is_black] = 0

cv2.imwrite('green.pbm', green_mask)
cv2.imwrite('black.pbm', black_mask)
