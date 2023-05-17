// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function quiz(req, res) {
  res.status(200).json(response);
}

const content2 = `
<h2>HTMLとは何か？</h2>
    <p>
      HTML（HyperText Markup
      Language）は、ウェブページの構造とコンテンツを記述するためのマークアップ言語です。HTMLはテキストベースの形式で、タグを使用して要素を定義します。
    </p>

    <h2>CSSとは何か？</h2>
    <p>
      CSS（Cascading Style
      Sheets）は、HTML文書の見た目やスタイルを制御するためのスタイルシート言語です。CSSを使用することで、フォント、色、レイアウト、背景などの要素のスタイルを指定することができます。
    </p>

    <h2>HTML文書の基本構造</h2>
    <p>HTML文書は、次の要素で構成されます。</p>
    <ul>
      <li>
        HTMLタグ:
        HTML文書の開始と終了を示すタグです。<code>&lt;html&gt;</code>タグで開始し、<code>&lt;/html&gt;</code>タグで終了します。
      </li>
      <li>
        ドキュメントタイプ宣言:
        HTML文書のバージョンと種類を指定します。一般的な宣言は<code
          >&lt;!DOCTYPE html&gt;</code
        >です。
      </li>
      <li>
        <code>&lt;head&gt;</code>要素:
        文書のメタデータや外部リソースのリンクを含むセクションです。
      </li>
      <li>
        <code>&lt;body&gt;</code>要素:
        ユーザーに表示されるコンテンツを含むセクションです。
      </li>
    </ul>

    <h2>CSSの基本構文</h2>
    <p>CSSのスタイルは、セレクタとプロパティ-値のペアで定義されます。</p>
    <p>例：</p>
    <code>セレクタ { プロパティ: 値; }</code>
    <p>セレクタ</p>
    <p>
      セレクタは、スタイルを適用する要素を指定します。以下は一般的なセレクタの例です。
    </p>
    <ul>
      <li>
        要素セレクタ:
        HTML要素を指定します。例えば、<code>p</code>はすべての段落要素にスタイルを適用します。
      </li>
      <li>
        IDセレクタ:
        <code>#</code
        >を使ってHTML要素のIDを指定します。例えば、<code>#header</code>はIDが「header」の要素にスタイルを適用します。
      </li>
      <li>
        クラスセレクタ:
        <code>.</code
        >を使ってHTML要素のクラスを指定します。例えば、<code>.box</code>はクラスが「box」の要素にスタイルを適用します。
      </li>
      <li>
        属性セレクタ:
        HTML要素の属性を指定します。例えば、<code>[type="text"]</code>はtype属性が「text」の要素にスタイルを適用します。
      </li>
    </ul>

    <h2>CSSのスタイルプロパティ</h2>
    <p>
      CSSでは、様々なプロパティを使用して要素のスタイルを指定します。以下は一部の一般的なプロパティの例です。
    </p>
    <ul>
      <li><code>color</code>: テキストの色を指定します。</li>
      <li><code>font-size</code>: テキストのサイズを指定します。</li>
      <li><code>background-color</code>: 要素の背景色を指定します。</li>
      <li><code>margin</code>: 要素の外側の余白を指定します。</li>
      <li><code>padding</code>: 要素の内側の余白を指定します。</li>
      <li><code>border</code>: 要素の境界線を指定します。</li>
    </ul>

    <h2>CSSのスタイルの適用順序</h2>
    <p>
      CSSのスタイルは、複数のルールが適用される場合があります。以下の順序でスタイルが適用されます。
    </p>
    <ol>
      <li>ブラウザのデフォルトスタイル</li>
      <li>外部スタイルシート（外部のCSSファイル）</li>
      <li>内部スタイルシート（<code>&lt;style&gt;</code>タグ内のCSS）</li>
      <li>インラインスタイル（HTML要素の<code>style</code>属性内のCSS）</li>
    </ol>

    <h2>CSSの適用方法</h2>
    <p>CSSは、HTML文書内に以下の方法で適用することができます。</p>
    <ul>
      <li>
        外部スタイルシート:
        <code>&lt;link rel="stylesheet" href="styles.css"</code
        >というタグを&lt;head&gt;要素内に追加します。外部スタイルシートは別のCSSファイル（ここでは"styles.css"と仮定しています）にスタイルの定義を記述します。
      </li>

      <li>
        内部スタイルシート:
        <code>&lt;style&gt;</code
        >タグ内にCSSコードを記述します。これはHTML文書内の特定のセクションに対してスタイルを適用する場合に便利です。
      </li>
      <li>
        インラインスタイル:
        HTML要素の<code>style</code>属性内に直接CSSコードを記述します。これは個々の要素に対してスタイルを指定する場合に使用します。
      </li>
    </ul>
    <h2>HTMLとCSSの連携</h2>
    <p>
      HTMLとCSSは密接に連携して使用されます。HTMLで要素をマークアップし、CSSでスタイルを適用することによって、ウェブページのデザインやレイアウトを制御することができます。
    </p>
    <p>
      HTML要素には一意のIDやクラスを指定し、CSSのセレクタとして使用することで、特定の要素に対してスタイルを適用することができます。また、HTML要素の階層構造を利用して、より具体的なスタイルの指定やスタイルの継承を制御することも可能です。
    </p>
    <h2>まとめ</h2>
    <p>
      HTMLとCSSはウェブページの作成において重要な役割を果たしています。HTMLはコンテンツの構造を定義し、CSSは見た目やスタイルを制御します。HTMLとCSSを組み合わせて使うことで、魅力的で使いやすいウェブページを作成することができます。
    </p>
    `;

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

const response = [
  {
    id: "1",
    title: "HTML Basics",
    summary: "HTMLの基礎の基礎について勉強していきます。",
    content: content,
    countOfQuiz: 10,
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
  },
  {
    id: 2,
    title: "HTMLとCSS",
    summary:
      "HTMLとCSSはウェブページの構造とスタイルを制御するための重要な言語であり、HTMLは要素のマークアップを行い、CSSはスタイルの指定を行います。",
    content: content2,
    countOfQuiz: 1,
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
    ],
  },
];