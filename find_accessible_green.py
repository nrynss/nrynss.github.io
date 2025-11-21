import math

def luminance(r, g, b):
    a = [r, g, b]
    new_a = []
    for v in a:
        v /= 255
        if v <= 0.03928:
            new_a.append(v / 12.92)
        else:
            new_a.append(((v + 0.055) / 1.055) ** 2.4)
    return 0.2126 * new_a[0] + 0.7152 * new_a[1] + 0.0722 * new_a[2]

def contrast(rgb1, rgb2):
    lum1 = luminance(*rgb1)
    lum2 = luminance(*rgb2)
    bright = max(lum1, lum2)
    dark = min(lum1, lum2)
    return (bright + 0.05) / (dark + 0.05)

hex_white = (0xFF, 0xFF, 0xFF)
candidates = [
    (0x05, 0x96, 0x69), # Emerald 600
    (0x04, 0x78, 0x57), # Emerald 700
    (0x06, 0x5F, 0x46), # Emerald 800
    (0x10, 0xB9, 0x81), # Emerald 500
    (0x16, 0xA3, 0x4A), # Green 600
    (0x15, 0x80, 0x3D), # Green 700
]

for c in candidates:
    print(f"Contrast {c} on White: {contrast(c, hex_white):.2f}")
