"""Generate labeled architectural placeholder JPEGs (no people)."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

out = Path(__file__).resolve().parents[1] / "public" / "images"
out.mkdir(parents=True, exist_ok=True)

heroes = {
    "hero-home.jpg": ((62, 72, 68), (180, 168, 150), "HERO HOME — replace with finished kitchen or bath"),
    "hero-kitchen.jpg": ((78, 70, 58), (210, 198, 178), "HERO KITCHEN — replace with finished kitchen photo"),
    "hero-bath.jpg": ((58, 68, 78), (190, 200, 210), "HERO BATH — replace with finished bathroom photo"),
}

extras = [
    ("kitchen-before-1.jpg", (90, 85, 78), "KITCHEN BEFORE 1"),
    ("kitchen-after-1.jpg", (140, 130, 110), "KITCHEN AFTER 1"),
    ("kitchen-before-2.jpg", (85, 80, 75), "KITCHEN BEFORE 2"),
    ("kitchen-after-2.jpg", (155, 145, 125), "KITCHEN AFTER 2"),
    ("kitchen-before-3.jpg", (80, 78, 72), "KITCHEN BEFORE 3"),
    ("kitchen-after-3.jpg", (148, 138, 118), "KITCHEN AFTER 3"),
    ("bath-before-1.jpg", (70, 78, 88), "BATH BEFORE 1"),
    ("bath-after-1.jpg", (160, 170, 180), "BATH AFTER 1"),
    ("bath-before-2.jpg", (68, 76, 84), "BATH BEFORE 2"),
    ("bath-after-2.jpg", (150, 158, 168), "BATH AFTER 2"),
    ("bath-before-3.jpg", (72, 80, 86), "BATH BEFORE 3"),
    ("bath-after-3.jpg", (145, 155, 165), "BATH AFTER 3"),
    ("portfolio-kitchen-1.jpg", (130, 120, 100), "PORTFOLIO KITCHEN 1"),
    ("portfolio-kitchen-2.jpg", (135, 125, 105), "PORTFOLIO KITCHEN 2"),
    ("portfolio-kitchen-3.jpg", (125, 115, 98), "PORTFOLIO KITCHEN 3"),
    ("portfolio-kitchen-4.jpg", (140, 128, 108), "PORTFOLIO KITCHEN 4"),
    ("portfolio-bath-1.jpg", (120, 130, 140), "PORTFOLIO BATH 1"),
    ("portfolio-bath-2.jpg", (115, 125, 135), "PORTFOLIO BATH 2"),
    ("portfolio-bath-3.jpg", (110, 120, 130), "PORTFOLIO BATH 3"),
    ("portfolio-bath-4.jpg", (118, 128, 138), "PORTFOLIO BATH 4"),
]

try:
    font_sm = ImageFont.truetype("arial.ttf", 22)
except OSError:
    font_sm = ImageFont.load_default()


def make(path: Path, size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int], label: str, quality: int = 78) -> None:
    w, h = size
    img = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(img)
    for i in range(8):
        y0 = int(h * (0.15 + i * 0.1))
        shade = tuple(max(0, min(255, c + (i % 2) * 8 - 4)) for c in bottom)
        draw.rectangle([0, y0, w, y0 + int(h * 0.08)], fill=shade)
    panel = (max(0, top[0] - 20), max(0, top[1] - 20), max(0, top[2] - 20))
    draw.rectangle([int(w * 0.08), int(h * 0.35), int(w * 0.92), int(h * 0.65)], fill=panel)
    bbox = draw.textbbox((0, 0), label, font=font_sm)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (w - tw) // 2
    y = (h - th) // 2
    draw.rectangle([x - 16, y - 12, x + tw + 16, y + th + 12], fill=(26, 23, 20))
    draw.text((x, y), label, fill=(246, 241, 234), font=font_sm)
    img.save(path, "JPEG", quality=quality, optimize=True)


for name, (top, bottom, label) in heroes.items():
    make(out / name, (1600, 1067), top, bottom, label, quality=72)

for name, color, label in extras:
    bottom = tuple(min(255, c + 40) for c in color)
    make(out / name, (1200, 900), color, bottom, label, quality=70)

for p in sorted(out.glob("*.jpg")):
    print(f"{p.name}: {p.stat().st_size // 1024}kb")
