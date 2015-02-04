#!/usr/bin/env bash

# place in directory in question, and run as such:
# `./dirpage.sh > links.html
# 
# links.html will then have the links in question
# 
# You can change the echo statement below to add any necessary classes, etc

CURRENT_DIR=$(pwd)
BASE_URL=http://xaviervalarino.github.io
TITLE="Xavier's projects"

echo "<html>"
echo "<head><title>$TITLE</title></head>"

echo "<body>"

for path in $( ls $CURRENT_DIR); do
    if [[ -d $path ]]; then
        echo "    <a href=\"$BASE_URL/$path\">$path</a>"
    fi
done

echo "</body>"
echo "</html>"