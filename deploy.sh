#!/usr/bin/env sh
set -e
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lavininhamelo/vue-vehiculum-de.git master:gh-pages-branch
cd 