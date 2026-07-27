#!/bin/bash

mkdir -p content/archive

jq -r '.[] | [.id, .title] | @tsv' data/manifest.json | while IFS=$'\t' read id title
do

mkdir -p "content/archive/$id"

cat > "content/archive/$id/index.md" <<EOF
---
title: "$title"
video_id: "$id"
---

# $title
EOF

done
