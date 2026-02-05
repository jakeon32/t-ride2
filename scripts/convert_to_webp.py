import os
from PIL import Image

assets_dir = r"d:\Works\2026\brandshow\t-ride02\assets"
files = ["mona01_hero.png", "mona02_hero.png", "mona03_hero.png"]

for filename in files:
    try:
        if filename.endswith(".png"):
            filepath = os.path.join(assets_dir, filename)
            if os.path.exists(filepath):
                print(f"Converting {filename}...")
                img = Image.open(filepath)
                # Convert to RGB if necessary (e.g. if RGBA and saving as strict webp without alpha, though webp supports alpha)
                img = img.convert("RGBA") 
                
                webp_filename = os.path.splitext(filename)[0] + ".webp"
                webp_path = os.path.join(assets_dir, webp_filename)
                
                # Save as WebP with quality 80
                img.save(webp_path, "WEBP", quality=80)
                print(f"Saved {webp_filename}")
            else:
                print(f"File not found: {filename}")
    except Exception as e:
        print(f"Error converting {filename}: {e}")
