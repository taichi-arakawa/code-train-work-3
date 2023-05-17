# HTML の基礎

## 1. HTML とは何か？

HTML（HyperText Markup Language）は、ウェブページの構造とコンテンツを記述するためのマークアップ言語です。HTML はテキストベースの形式で、タグを使用して要素を定義します。

## 2. HTML 文書の基本構造

HTML 文書は、次の要素で構成されます。

- HTML タグ: HTML 文書の開始と終了を示すタグです。`<html>`タグで開始し、`</html>`タグで終了します。
- ドキュメントタイプ宣言: HTML 文書のバージョンと種類を指定します。一般的な宣言は`<!DOCTYPE html>`です。
- `<head>`要素: 文書のメタデータや外部リソースのリンクを含むセクションです。
- `<body>`要素: ユーザーに表示されるコンテンツを含むセクションです。

## 3. テキストの表示とフォーマット

HTML を使用してテキストを表示し、フォーマットするために次の要素を使用します。

- 見出し要素 `<h1>`〜`<h6>`: タイトルやセクションの見出しを定義します。
- 段落要素 `<p>`: テキストを段落としてまとめます。
- テキストの強調表示 `<em>` と `<strong>`: テキストを強調したり、重要視したりします。
- テキストの改行 `<br>`: 改行を挿入します。
- コメントの挿入 `<!-- -->`: コード内にコメントを追加します。

## 4. リンクと画像

リンクや画像を挿入するために、以下の要素を使用します。

- ハイパーリンク `<a>`: 別のウェブページや同一ページ内の位置にリンクを作成します。
- 画像の表示 `<img>`: 画像を表示します。
- イメージの代替テキスト `alt` 属性: 画像が表示されない場合やスクリーンリーダーで読み上げられる場合に代替テキストを提供します。
- リンク先の新規タブで開く `target` 属性: リンクを新しいブラウザタブで開くように指定します。

## 5. リストと表

リストと表を作成するために、以下の要素を使用します。

- 順序なしリスト `<ul>`: 順序のないリストを作成します。リスト項目は`<li>`要素で囲みます。
- 順序付きリスト `<ol>`: 順序のあるリストを作成します。リスト項目は`<li>`要素で囲みます。
- 表 `<table>`: 表形式でデータを表示します。表は`<tr>`（行）、`<th>`（見出しセル）、`<td>`（データセル）要素で構成されます。