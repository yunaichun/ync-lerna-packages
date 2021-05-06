#! /bin/bash

set -x

DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)"
DIST_DIR="$DIR/dist_prd"

if [[ $NODE_ENV =~ ^[Pp].*[Rr].*[Dd] ]]; then
  echo 1
else
  echo 2
fi
