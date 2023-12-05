# postcss-purgecss

## ゴール

下記ディレクトリ構造で ``` src/index.html ``` で使われていない CSS を　``` src/styles/main.css ``` から削除して ``` dist/styles/main.css ``` に書き出す。

## ディレクトリ構造
```
.
├── dist
│   └── styles
│       └── main.css
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
└── src
    ├── index.html
    └── styles
            └── main.css
```

## 下準備

### src/index.html
```html
<!DOCTYPE html>
<html lang="ja">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body class="test1">

  </body>

</html>

```


### src/styles/main.css
```css
.test1 {}

.test2 {}

.test3 {}

.test4 {}

```

``` src/index.html ``` で使っている CSS は ```test1``` のみです。
期待する実行結果は ``` dist/styles/main.css ``` の内容が下記のようになることです。
```css
.test1 {}

```


## 手順

### NPM をイニシャライズする
``` shell
npm init -y
```

### 必要なパッケージをインストールする
``` shell
npm install postcss postcss-cli @fullhuman/postcss-purgecss --save-dev

```

### PostCSSの設定

postcss.config.js を作成して下記のように設定

``` javascript
// postcss.config.js
module.exports = {
  plugins: [
    // 他の必要なプラグインがあればここに追加
    require('@fullhuman/postcss-purgecss')({
      // PurgeCSSの設定を追加
      content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        // 使っているファイルの拡張子を追加
      ],
      // 他のPurgeCSSのオプションを追加
    }),
  ],
};

```

### スクリプトの追加

package.json に NPMScript を追加します。
 
``` json
{
  "scripts": {
    "build:css": "postcss src/styles/main.css -o dist/styles/main.css"
  }
}

```

### ビルドの実行

``` shell
npm run build:css
```

``` dist/styles/main.css ``` には　``` test1 ``` のみ書き出されているはずです。
