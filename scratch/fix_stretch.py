import os

files_to_fix = [
    "src/components/about/Governance.tsx",
    "src/components/about/WhoWeAre.tsx",
    "src/components/campus-life/CampusCarousel.tsx",
    "src/components/campus-life/CampusHostel.tsx",
    "src/components/campus-life/CampusStudentLife.tsx",
    "src/components/landing/CampusTour.tsx",
    "src/components/landing/Philosophy.tsx",
    "src/components/landing/WhyGoa.tsx",
    "src/components/placements/AlumniStories.tsx",
    "src/components/placements/Internships.tsx",
    "src/components/placements/PlacementsNumbers.tsx",
    "src/components/programme-template/DynamicCareerOutcomes.tsx",
    "src/components/programme-template/DynamicWhyPUGoa.tsx",
    "src/components/programmes/CareerOutcomes.tsx",
    "src/components/programmes/HotelManagementDestinations.tsx",
    "src/components/programmes/NursingDestinations.tsx",
    "src/components/programmes/WhyPUGoa.tsx",
]

base_dir = "/Users/apple/Downloads/NextGoa-main"

for rel_path in files_to_fix:
    path = os.path.join(base_dir, rel_path)
    if not os.path.exists(path):
        print(f"File not found: {path}")
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = content.replace("object-fill", "object-cover md:object-fill")
    
    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated: {rel_path}")
    else:
        print(f"No change needed: {rel_path}")
