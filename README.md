# jaws-ug.jp

[![Build Status](https://travis-ci.org/jaws-ug/jaws-ug.jp.svg?branch=master)](https://travis-ci.org/jaws-ug/jaws-ug.jp)

このリポジトリは jaws-ug.jp のサイトデータとなります。  
サイトの生成には [Jekyll](http://jekyllrb.com/) を利用しています。

サイト上のコンテンツを修正（更新）については [Wiki](https://github.com/jaws-ug/jaws-ug.jp/wiki) をご覧ください。

## ローカル環境の作り方

リポジトリをクローン（あるいはダウンロード）してローカル環境を構築する場合は以下の手順ておこなってください。

### 1. Jekyll のインストール
```
$ gem install jekyll bundler
```

### 2. ローカル環境用 Gem ファイルのインストール
`git clone` で作成されたディレクトリで実行
```
$ cd jaws-ug.jp
$ bundle install --path vendor/bundle
```

### 3. ローカル環境用 npm ファイルのインストール
`git clone` で作成されたディレクトリで実行
```
$ cd jaws-ug.jp
$ npm install
```

## ローカルサーバーの起動
```
$ gulp
```
`http://127.0.0.1:4000/` でブラウザで閲覧可能です。
