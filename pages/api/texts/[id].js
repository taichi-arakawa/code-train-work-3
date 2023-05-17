// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function quiz(req, res) {
  const postId = req.query.id;
  res.status(200).json(response);
}

const content = `
  <ol>
    <li>
        <p>HTMLとは何か？</p>
      <ul>
        <li>
          HTML（HyperText Markup Language）は、ウェブページの構造とコンテンツを記述するためのマークアップ言語です。HTMLはテキストベースの形式で、タグを使用して要素を定義します。
        </li>
      </ul>
    </li>
    <li>
      <p>HTML文書の基本構造</p>
      <p>HTML文書は、次の要素で構成されます。</p>
      <ul>
        <li>
          HTMLタグ: HTML文書の開始と終了を示すタグです。<code>&lt;html&gt;</code>タグで開始し、<code>&lt;/html&gt;</code>タグで終了します。
        </li>
        <li>
          ドキュメントタイプ宣言: HTML文書のバージョンと種類を指定します。一般的な宣言は<code>&lt;!DOCTYPE html&gt;</code>です。
        </li>
        <li>
          <code>&lt;head&gt;</code>要素: 文書のメタデータや外部リソースのリンクを含むセクションです。
        </li>
        <li>
          <code>&lt;body&gt;</code>要素: ユーザーに表示されるコンテンツを含むセクションです。
        </li>
      </ul>
    </li>
    <li>
      <p>テキストの表示とフォーマット</p>
      <p>HTMLを使用してテキストを表示し、フォーマットするために次の要素を使用します。</p>
      <ul>
        <li>
          見出し要素 <code>&lt;h1&gt;</code>〜<code>&lt;h6&gt;</code>: タイトルやセクションの見出しを定義します。
        </li>
        <li>
          段落要素 <code>&lt;p&gt;</code>: テキストを段落としてまとめます。
        </li>
        <li>
          テキストの強調表示 <code>&lt;em&gt;</code> と <code>&lt;strong&gt;</code>: テキストを強調したり、重要視したりします。
        </li>
        <li>
          テキストの改行 <code>&lt;br&gt;</code>: 改行を挿入します。
        </li>
        <li>
          コメントの挿入 <code>&lt;!-- --&gt;</code>: コード内にコメントを追加します。
        </li>
      </ul>
    </li>
    <li>
      <p>リンクと画像</p>
      <p>リンクや画像を挿入するために、以下の要素を使用します。</p>
      <ul>
        <li>
          ハイパーリンク <code>&lt;a&gt;</code>: 別のウェブページや同一ページ内の位置にリンクを作成します。
        </li>
        <li>
          画像の表示 <code>&lt;img&gt;</code>: 画像を表示します。
        </li>
        <li>
          イメージの代替テキスト <code>alt</code> 属性: 画像が表示されない場合やスクリーンリーダーで読み上げられる場合に代替テキストを提供します。
        </li>
        <li>
          リンク先の新規タブで開く <code>target</code> 属性: リンクを新しいブラウザタブで開くように指定します。
        </li>
      </ul>
    </li>
    <li>
      <p>リストと表</p>
      <p>リストと表を作成するために、以下の要素を使用します。</p>
      <ul>
        <li>
          順序なしリスト <code>&lt;ul&gt;</code>: 順序のないリストを作成します。リスト項目は<code>&lt;li&gt;</code>要素で囲みます。
        </li>
        <li>
          順序付きリスト <code>&lt;ol&gt;</code>: 順序のあるリストを作成します。リスト項目は<code>&lt;li&gt;</code>要素で囲みます。
        </li>
        <li>
          定義リスト <code>&lt;dl&gt;</code>: 定義リストを作成します。定義項目は<code>&lt;dt&gt;</code>要素で、説明は<code>&lt;dd&gt;</code>要素で囲みます。
        </li>
        <li>
          テーブルの作成 <code>&lt;table&gt;</code>: 表を作成します。テーブルは行（<code>&lt;tr&gt;</code>）とセル（<code>&lt;td&gt;</code>または<code>&lt;th&gt;</code>）で構成されます。
        </li>
      </ul>
    </li>
  </ol>`;

const response = {
  id: "1",
  title: "HTML Basics",
  content: content,
  quiz: [
    {
      id: "1",
      question: "HTMLの略称は何ですか？",
      options: [
        { seq: 1, option: "HyperText Markup Language" },
        { seq: 2, option: "HyperText Modeling Language" },
        { seq: 3, option: "Home Tool Markup Language" },
        { seq: 4, option: "HyperText Makeup Language" },
      ],
      answer: 1,
      explanation: "HTMLの略称はHyperText Markup Languageです。",
    },
    {
      id: "2",
      question: "HTMLで見出しを定義するための要素はどれですか？",
      options: [
        { seq: 1, option: "<h1>" },
        { seq: 2, option: "<p>" },
        { seq: 3, option: "<div>" },
        { seq: 4, option: "<span>" },
      ],
      answer: 1,
      explanation: "<h1>要素は最も大きな見出しを定義するために使用されます。",
    },
    {
      id: "3",
      question: "HTMLで段落を作成するための要素はどれですか？",
      options: [
        { seq: 1, option: "<p>" },
        { seq: 2, option: "<h1>" },
        { seq: 3, option: "<div>" },
        { seq: 4, option: "<span>" },
      ],
      answer: 1,
      explanation: "<p>要素は段落を作成するために使用されます。",
    },
    {
      id: "4",
      question: "HTMLでリンクを作成するための要素はどれですか？",
      options: [
        { seq: 1, option: "<a>" },
        { seq: 2, option: "<img>" },
        { seq: 3, option: "<div>" },
        { seq: 4, option: "<span>" },
      ],
      answer: 1,
      explanation: "<a>要素はリンクを作成するために使用されます。",
    },
    {
      id: "5",
      question: "HTMLで画像を表示するための要素はどれですか？",
      options: [
        { seq: 1, option: "<img>" },
        { seq: 2, option: "<a>" },
        { seq: 3, option: "<div>" },
        { seq: 4, option: "<span>" },
      ],
      answer: 1,
      explanation: "<img>要素は画像を表示するために使用されます。",
    },
    {
      id: "6",
      question: "HTMLで順序なしリストを作成するための要素はどれですか？",
      options: [
        { seq: 1, option: "<ul>" },
        { seq: 2, option: "<ol>" },
        { seq: 3, option: "<li>" },
        { seq: 4, option: "<dl>" },
      ],
      answer: 1,
      explanation: "<ul>要素は順序なしリストを作成するために使用されます。",
    },
    {
      id: "7",
      question: "HTMLで順序付きリストを作成するための要素はどれですか？",
      options: [
        { seq: 1, option: "<ol>" },
        { seq: 2, option: "<ul>" },
        { seq: 3, option: "<li>" },
        { seq: 4, option: "<dl>" },
      ],
      answer: 1,
      explanation: "<ol>要素は順序付きリストを作成するために使用されます。",
    },
    {
      id: "8",
      question: "HTMLでリストアイテムを定義するための要素はどれですか？",
      options: [
        { seq: 1, option: "<li>" },
        { seq: 2, option: "<ul>" },
        { seq: 3, option: "<ol>" },
        { seq: 4, option: "<dl>" },
      ],
      answer: 1,
      explanation: "<li>要素はリストアイテムを定義するために使用されます。",
    },
    {
      id: "9",
      question: "HTMLでテーブルを作成するための要素はどれですか？",
      options: [
        { seq: 1, option: "<table>" },
        { seq: 2, option: "<tr>" },
        { seq: 3, option: "<td>" },
        { seq: 4, option: "<th>" },
      ],
      answer: 1,
      explanation: "<table>要素はテーブルを作成するために使用されます。",
    },
    {
      id: "10",
      question: "HTMLで表の行を定義するための要素はどれですか？",
      options: [
        { seq: 1, option: "<tr>" },
        { seq: 2, option: "<table>" },
        { seq: 3, option: "<td>" },
        { seq: 4, option: "<th>" },
      ],
      answer: 1,
      explanation: "<tr>要素は表の行を定義するために使用されます。",
    },
  ],
};
