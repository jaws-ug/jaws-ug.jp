#!/bin/bash

git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git fetch
git checkout -b release origin/release
git add --all
git commit -m "Automatic Build by Travis CI $TRAVIS_COMMIT"
git push git@github.com:jaws-ug/jaws-ug.jp.git release
