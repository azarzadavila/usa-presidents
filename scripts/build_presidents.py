import json
import os
import requests
import re


image_folder = os.path.join("src", "assets", "images", "presidents")
if not os.path.exists(image_folder):
    os.makedirs(image_folder)


def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, "wb") as f:
            f.write(response.content)
    else:
        print(f"Error downloading image for {filename}")


output = []
import_lines = set()

with open("scripts/presidents_data.txt", "r") as file:
    president = {}
    step = 0
    url_temp = None

    for line in file:
        line = line.strip()
        if step == 0:
            president["number"] = int(line)
        elif step == 1:
            url_temp = "https:" + line
        elif step == 2:
            president["name"] = line
            filename = line.lower().replace(" ", "_").replace(".", "")
            import_lines.add(filename)
            president["image"] = filename + "_img"
            download_image(url_temp, os.path.join(image_folder, filename + ".jpg"))
        elif step == 3:
            dates = line.split("-")
            president["start"] = f"{dates[0]}-{dates[1]}-{dates[2]}"
            president["end"] = (
                None if len(dates) == 4 else f"{dates[3]}-{dates[4]}-{dates[5]}"
            )
        elif step == 4:
            president["party"] = line
            output.append(president)
            president = {}
        step = (step + 1) % 5


tmp_json = json.dumps(output, indent=4)
tmp_json = re.sub(r'("\d\d\d\d-\d\d-\d\d")', r"new Date(\1)", tmp_json)
tmp_json = re.sub(r'image": "(\w*)"', r'image": \1', tmp_json)

with open(os.path.join("src", "presidents.js"), "w") as file:
    for line in import_lines:
        file.write(
            "import " + line + "_img from 'assets/images/presidents/" + line + ".jpg'\n"
        )
    file.write("\nconst PRESIDENTS = ")
    file.write(tmp_json)
    file.write(";\nexport default PRESIDENTS;")
