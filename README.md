# jaws-ug.jp

[![Build Status](https://travis-ci.org/jaws-ug/jaws-ug.jp.svg?branch=master)](https://travis-ci.org/jaws-ug/jaws-ug.jp)

このリポジトリは jaws-ug.jp のサイトデータとなります。  
サイトの生成には [Jekyll](http://jekyllrb.com/) を利用しています。

サイト上のコンテンツを修正（更新）については [Wiki](https://github.com/jaws-ug/jaws-ug.jp/wiki) をご覧ください。

## ローカル環境の作り方

リポジトリをクローン（あるいはダウンロード）してローカル環境を構築する場合は以下の手順で行ってください。

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

## ローカルサーバーの起動
```
$ bundle exec jekyll serve
```
`http://127.0.0.1:4000/` でブラウザで閲覧可能です。  
コンテンツ、テンプレート、 `_sass` ディレクトンリ内の Sass ファイルに追加、変更があった場合はコンパイルが同時に行われます。

## HTML-Proofer による html マークアップのテスト
```
$ bundle exec htmlproofer './_site' --disable-external
```
`--disable-external` で外部リンクのチェックは除いてます。

## Dev Container での開発
`./.devcontainer/Dockerfile` で Ruby バージョンを変更できます。

```Dockerfile
ARG RUBY_VERSION=3.0.4
```

VS Code の **Dev Containers: Reopen in Container** を実行すると、上記 Dockerfile を使って環境が作成されます。

コンテナ内でローカルサーバーを起動:
```
$ bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

ブラウザから `http://127.0.0.1:4000/` で確認できます。

## エディタ非依存での Docker 開発
任意のエディタ + Docker だけで開発できます。

起動:
```
$ docker compose up --build
```

停止:
```
$ docker compose down
```

Ruby バージョンを切り替えて起動:
```
$ RUBY_VERSION=3.2.9 docker compose up --build
```
