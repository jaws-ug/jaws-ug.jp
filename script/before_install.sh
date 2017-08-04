#!/bin/bash

openssl aes-256-cbc -K $encrypted_0513ff2d06ce_key -iv $encrypted_0513ff2d06ce_iv -in jaws_ug_jp.enc -out jaws_ug_jp -d
cp jaws_ug_jp ~/.ssh/jaws_ug_jp
chmod 600 ~/.ssh/jaws_ug_jp
echo -e "Host github.com\n\tStrictHostKeyChecking no\nHost github github.com\n\tHostName github.com\n\tIdentityFile ~/.ssh/jaws_ug_jp\n\tUser git\n" >> ~/.ssh/config
git config --global user.email "jawsug+wp@gmail.com"
git config --global user.name "JAWS-UG"
