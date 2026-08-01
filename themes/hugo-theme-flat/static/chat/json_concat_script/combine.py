#!/usr/bin/env python3

import json
import sys


def merge_chat_logs(file1, file2, output, extra_offset=0):
    # Load files
    with open(file1, "r", encoding="utf-8") as f:
        log1 = json.load(f)

    with open(file2, "r", encoding="utf-8") as f:
        log2 = json.load(f)

    comments1 = log1.get("comments", [])
    comments2 = log2.get("comments", [])

    if not comments1:
        raise ValueError("First chat log has no comments")

    # Find end time of first log
    last_time = max(
        comment.get("content_offset_seconds", 0)
        for comment in comments1
    )

    # Amount to shift second log forward
    offset = last_time + extra_offset + 122

    print(f"Last timestamp in first log: {last_time:.3f}s")
    print(f"Applying offset to second log: {offset:.3f}s")

    # Shift second log timestamps
    for comment in comments2:
        if "content_offset_seconds" in comment:
            comment["content_offset_seconds"] += offset

    # Append comments
    log1["comments"].extend(comments2)

    # Save merged file
    with open(output, "w", encoding="utf-8") as f:
        json.dump(log1, f, indent=2, ensure_ascii=False)

    print(f"Merged chat log saved to: {output}")


if __name__ == "__main__":
    if len(sys.argv) < 4:
        print(
            "Usage: python merge_chat.py first.json second.json output.json [extra_seconds]"
        )
        sys.exit(1)

    first = sys.argv[1]
    second = sys.argv[2]
    output = sys.argv[3]

    extra = float(sys.argv[4]) if len(sys.argv) > 4 else 0

    merge_chat_logs(first, second, output, extra)
