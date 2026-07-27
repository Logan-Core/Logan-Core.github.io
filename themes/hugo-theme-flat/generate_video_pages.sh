#!/bin/bash

mkdir -p content/archive

jq -r '.[].id' data/manifest.json | while read id
do

mkdir -p "content/archive/$id"

cat > "content/archive/$id/index.md" <<EOF
---
title: "$id"
video_id: "$id"
---
EOF

done
