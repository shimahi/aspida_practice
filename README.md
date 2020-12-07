# Aspida practice


TypeScriptでWeb APIのHTTPレスポンスに型をつける[Aspida](https://github.com/aspida/aspida) を試してみた


サーバー起動
```
$ yarn server dev
```


クライアント起動
```
$ yarn client dev
```

aspidaをビルド
```
$ yarn client api:build
```

クライアントで `api/` 下にリクエストの型(インターフェース)を書いてaspidaをビルドし、型定義ファイルを生成。

クライアントで型定義ファイルとaspidaライブラリを使用することでに型が着いたデータをフェッチできる。


GraphQLサーバーを組むほど大きくない開発で使えそう。

Frourioも試してみる。
