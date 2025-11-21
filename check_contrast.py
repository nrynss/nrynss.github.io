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

hex_emerald_700 = (0x04, 0x78, 0x57)
hex_dark = (0x11, 0x18, 0x27)

print(f"Contrast #047857 on Dark: {contrast(hex_emerald_700, hex_dark):.2f}")
