#!/usr/bin/env bash
# Build 5-second muted looping hero MP4s from existing Solas stills.
# Desktop 1920x1080, mobile 1080x1920. Slow Ken Burns, no bounce.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/video"
mkdir -p "$OUT"

# Existing stills — original Solas photography / stone field only.
PORTRAIT="$ROOT/public/solas/portrait.jpg"
ART="$ROOT/public/solas/art.jpg"
GATHER="$ROOT/public/solas/gather.jpg"
# Folio uses the high-res gallery plaster/stone still (stone.svg is a field only).
FOLIO_STILL="$ROOT/public/images/gallery/hero.jpg"

make_hero() {
  local name="$1"
  local input="$2"
  local w="$3"
  local h="$4"
  local suffix="$5"

  # Work larger than the output so a 1.00→1.08 zoom has pixels to travel.
  local sw=$((w * 12 / 10))
  local sh=$((h * 12 / 10))

  ffmpeg -y -loop 1 -i "$input" \
    -vf "scale=${sw}:${sh}:force_original_aspect_ratio=increase:flags=lanczos,crop=${sw}:${sh},zoompan=z='min(1.08,1+0.00067*on)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=${w}x${h}:fps=24" \
    -t 5 -an -c:v libx264 -preset medium -crf 23 -pix_fmt yuv420p -movflags +faststart \
    "$OUT/${name}-${suffix}.mp4"
}

make_poster() {
  local name="$1"
  local input="$2"
  ffmpeg -y -i "$input" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase:flags=lanczos,crop=1920:1080" \
    -frames:v 1 -q:v 3 \
    "$OUT/${name}-poster.jpg"
}

for name_input in "portrait:$PORTRAIT" "art:$ART" "gather:$GATHER" "folio:$FOLIO_STILL"; do
  name="${name_input%%:*}"
  input="${name_input#*:}"
  echo "→ $name"
  make_hero "$name" "$input" 1920 1080 desktop
  make_hero "$name" "$input" 1080 1920 mobile
  make_poster "$name" "$input"
done

ls -lh "$OUT"
