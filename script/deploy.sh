#!/bin/bash

git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git config core.filemode false
git fetch
git checkout -b release origin/release
git merge origin/master
git push git@github.com:jaws-ug/jaws-ug.jp.git release
