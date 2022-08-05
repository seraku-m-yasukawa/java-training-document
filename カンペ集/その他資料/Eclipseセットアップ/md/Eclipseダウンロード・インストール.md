# **Eclipseダウンロード・インストール**
## **前提**
- javaはダウンロード済

## **手順**
1. [Eclipseの公式サイト](https://www.eclipse.org/)を開く
1. 右上の`Downlord`を選択
<img src="../img/DL_01.png" width="50%"><div style="page-break-after:always"></div>

1. 表示された画面のちょっと下にある`Get Eclipse IDE 2022-06`の`Downlord x86-_64`を選択
<img src="../img/DL_02.png" width="50%"><div style="page-break-after:always"></div>

1. 下記のような画面が表示されるので`Downlord`を選択。インストーラがダウンロードされる。
<img src="../img/DL_03.png" width="50%"><div style="page-break-after:always"></div>

1. ダウンロードしたインストーラを実行すると下記の画面が表示されるので、
   `Eclipse IDE for Java Developers`を選択する
   ※アイコンにjavaって書いてあるそれっぽいやつはWeb開発向けだったりする
<img src="../img/DL_04.png">

1. `INSTALL`を選択。設定は変更しなくていい。
<img src="../img/DL_05.png">

1. `Accept Now`を選択
<img src="../img/DL_06.png">

1. インストールが終了すると、下記の画面が表示される。
   `LAUNCH`を選択することで、Eclipseが起動する。
<img src="../img/DL_07.png">


<details style="display: none;"><summary>以下styleのため折り畳み</summary>

<style>

/* githubのmdのcssを安川が好き勝手にいじったもの */

@media (prefers-color-scheme: dark) {
  body {
    color-scheme: dark;
    --color-prettylights-syntax-comment: #8b949e;
    --color-prettylights-syntax-constant: #79c0ff;
    --color-prettylights-syntax-entity: #d2a8ff;
    --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
    --color-prettylights-syntax-entity-tag: #7ee787;
    --color-prettylights-syntax-keyword: #ff7b72;
    --color-prettylights-syntax-string: #a5d6ff;
    --color-prettylights-syntax-variable: #ffa657;
    --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
    --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
    --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
    --color-prettylights-syntax-carriage-return-text: #f0f6fc;
    --color-prettylights-syntax-carriage-return-bg: #b62324;
    --color-prettylights-syntax-string-regexp: #7ee787;
    --color-prettylights-syntax-markup-list: #f2cc60;
    --color-prettylights-syntax-markup-heading: #1f6feb;
    --color-prettylights-syntax-markup-italic: #c9d1d9;
    --color-prettylights-syntax-markup-bold: #c9d1d9;
    --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
    --color-prettylights-syntax-markup-deleted-bg: #67060c;
    --color-prettylights-syntax-markup-inserted-text: #aff5b4;
    --color-prettylights-syntax-markup-inserted-bg: #033a16;
    --color-prettylights-syntax-markup-changed-text: #ffdfb6;
    --color-prettylights-syntax-markup-changed-bg: #5a1e02;
    --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
    --color-prettylights-syntax-markup-ignored-bg: #1158c7;
    --color-prettylights-syntax-meta-diff-range: #d2a8ff;
    --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
    --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
    --color-fg-default: #c9d1d9;
    --color-fg-muted: #8b949e;
    --color-fg-subtle: #484f58;
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: rgba(0,0,0,.08);
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    --color-neutral-muted: rgba(110,118,129,0.4);
    --color-accent-fg: #58a6ff;
    --color-accent-emphasis: #1f6feb;
    --color-attention-subtle: rgba(187,128,9,0.15);
    --color-danger-fg: #f85149;
  }
}

@media (prefers-color-scheme: light) {
  body {
    color-scheme: light;
    --color-prettylights-syntax-comment: #6e7781;
    --color-prettylights-syntax-constant: #0550ae;
    --color-prettylights-syntax-entity: #8250df;
    --color-prettylights-syntax-storage-modifier-import: #24292f;
    --color-prettylights-syntax-entity-tag: #116329;
    --color-prettylights-syntax-keyword: #cf222e;
    --color-prettylights-syntax-string: #0a3069;
    --color-prettylights-syntax-variable: #953800;
    --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
    --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
    --color-prettylights-syntax-invalid-illegal-bg: #82071e;
    --color-prettylights-syntax-carriage-return-text: #f6f8fa;
    --color-prettylights-syntax-carriage-return-bg: #cf222e;
    --color-prettylights-syntax-string-regexp: #116329;
    --color-prettylights-syntax-markup-list: #3b2300;
    --color-prettylights-syntax-markup-heading: #0550ae;
    --color-prettylights-syntax-markup-italic: #24292f;
    --color-prettylights-syntax-markup-bold: #24292f;
    --color-prettylights-syntax-markup-deleted-text: #82071e;
    --color-prettylights-syntax-markup-deleted-bg: #FFEBE9;
    --color-prettylights-syntax-markup-inserted-text: #116329;
    --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
    --color-prettylights-syntax-markup-changed-text: #953800;
    --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
    --color-prettylights-syntax-markup-ignored-text: #eaeef2;
    --color-prettylights-syntax-markup-ignored-bg: #0550ae;
    --color-prettylights-syntax-meta-diff-range: #8250df;
    --color-prettylights-syntax-brackethighlighter-angle: #57606a;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
    --color-prettylights-syntax-constant-other-reference-link: #0a3069;
    --color-fg-default: #24292f;
    --color-fg-muted: #57606a;
    --color-fg-subtle: #6e7781;
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: hsla(210,18%,87%,1);
    --color-neutral-muted: rgb(178 186 193 / 22%);
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-attention-subtle: #fff8c5;
    --color-danger-fg: #cf222e;
  }
}


@media print {
	
	body > div{
		/* display: block !important; */
		width: max-content !important;
		justify-content: center;
		flex-direction: column;
	}

	body{
		width: fit-content;
		/* background-color: #0550ae; */
		margin-left: 0% !important;
		margin-right: 2em !important;
		padding-left: 0% !important;
		padding-right: 0% !important;
	}

	.main{
		word-wrap:break-all;
		width: max-content !important;
		margin-left: 0% !important;
		margin-right: 0% !important;
		padding-left: 0% !important;
		padding-right: 0% !important;
	}

    .side, .sticky{
        display: none !important;
		width: 0% !important;
		/* border-left: 0 !important; */
		margin: 0 !important;
		padding: 0 !important;
    }



	.printonry{
		display: block !important;
	}


}


.printonry {
	display:none;
}

body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin-bottom: 2em !important;
  margin-right: 1em !important;
  margin-top: 0em !important;
  margin-left: 2em !important;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: system-ui, 'Segoe UI',Arial,Meiryo,sans-serif;
  /* font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"; */
  font-size: 16px;
  line-height: 1.6;
  word-wrap: break-word;
  tab-size:4;
  display: flexbox;
}

body > div{
	display: flex;
}

body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

body h1:hover .anchor .octicon-link:before,
body h2:hover .anchor .octicon-link:before,
body h3:hover .anchor .octicon-link:before,
body h4:hover .anchor .octicon-link:before,
body h5:hover .anchor .octicon-link:before,
body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

body details,
body figcaption,
body figure {
  display: block;
}

body summary {
  display: list-item;
}

body [hidden] {
  display: none !important;
}

body a {
  background-color: transparent;
  color: var(--color-accent-fg);
  text-decoration: none;
}

body a:active,
body a:hover {
  outline-width: 0;
}

body abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted;
}

body b,
body strong {
  font-weight: 600;
}

body dfn {
  font-style: italic;
}



body h1 {
  margin: .67em 0;
  font-weight: 600;
  /* padding-top: 1em ; */
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 2px solid var(--color-border-muted);
}


body mark {
  background-color: var(--color-attention-subtle);
  color: var(--color-text-primary);
}

body small {
  font-size: 90%;
}

body sub,
body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

body sub {
  bottom: -0.25em;
}

body sup {
  top: -0.5em;
}

body img {
	margin-top: .7em;
	margin-left: .7em;
  border-style: groove;
  border-width: thin;
  max-width: 100%;
  box-sizing: content-box;
  background-color: var(--color-canvas-default);
}

.note {
    display: flex !important;
    align-items: flex-start !important;
    padding: 1em !important;
    margin: .5em !important;
    white-space: pre-wrap !important;
}
.note > p {
    margin: 0%;
	margin-right: .7em;
}
.note.info {
    background: #e3f7df !important;
}
.note.warn {
    background: #fdf9e2 !important;
}
.note.alert {
    background: #feebee !important;
}

.hljs {
	padding: 1em !important;
    margin-top: 0em !important;
    margin-right: 0.2em !important;
    margin-bottom: .7em !important;
    margin-left: 0.2em !important;
    border-style: solid;
    border-width: 0.5px;
    border-color: rgba(148, 156, 163, 0.2);
	background-color: var(--color-neutral-muted);
}

.hljs-comment,
.hljs-quote {
	color: #3f7f5f;
}

body blockquote > pre > code > div{
  padding: 0.5em !important;
  margin: 0.2em !important;
}

body code,
body kbd,
body pre,
body samp {
  font-family: monospace,monospace;
  font-size: 1em;
}

body figure {
  margin: 1em 40px;
}

body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid var(--color-border-muted);
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: var(--color-border-default);
  border: 0;
}

body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

body [type=button],
body [type=reset],
body [type=submit] {
  -webkit-appearance: button;
}

body [type=button]::-moz-focus-inner,
body [type=reset]::-moz-focus-inner,
body [type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

body [type=button]:-moz-focusring,
body [type=reset]:-moz-focusring,
body [type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

body [type=checkbox],
body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

body [type=number]::-webkit-inner-spin-button,
body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

body [type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

body [type=search]::-webkit-search-cancel-button,
body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

body a:hover {
  text-decoration: underline;
}

body hr::before {
  display: table;
  content: "";
}

body hr::after {
  display: table;
  clear: both;
  content: "";
}

body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

body td,
body th {
  padding: 0;
}

body details summary {
  cursor: pointer;
}

body details:not([open])>*:not(summary) {
  display: none !important;
}

body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: var(--color-fg-default);
  vertical-align: middle;
  background-color: var(--color-canvas-subtle);
  border: solid 1px var(--color-neutral-muted);
  border-bottom-color: var(--color-neutral-muted);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
}

body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
  /* margin-top: 24px; */
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.35;
}

body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid var(--color-border-muted);
}

body h3 {
	line-height: inherit;
  font-weight: 600;
  font-size: 1.25em;
  border-bottom: 0.5px solid var(--color-border-muted);
}

body h4 {
  font-weight: 600;
  font-size: 1em;
}

body h5 {
  font-weight: 600;
  font-size: .875em;
}

body h6 {
  font-weight: 600;
  font-size: .85em;
  color: var(--color-fg-muted);
}

body p {
  margin-top: 0;
  margin-bottom: 10px;
}

body blockquote {
  margin: 0;
  margin-left: 1em;
  padding: .1em;
  padding-left: .5em;
  color: var(--color-fg-muted);
  border-left: .4em solid rgba(0, 122, 204, 0.5);
  background-color: var(--color-canvas-subtle);
}

body ul,
body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

body ol ol,
body ul ol {
  list-style-type: lower-roman;
}

body ul ul ol,
body ul ol ol,
body ol ul ol,
body ol ol ol {
  list-style-type: lower-alpha;
}

body dd {
  margin-left: 0;
}

body tt,
body code {
  /* font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace; */
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,'BIZ UDゴシック',monospace;
  font-size: 12px;
}

body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,'BIZ UDゴシック',monospace;
  font-size: 12px;
  word-wrap: normal;
}

body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

body ::placeholder {
  color: var(--color-fg-subtle);
  opacity: 1;
}

body input::-webkit-outer-spin-button,
body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

body .pl-c {
  color: var(--color-prettylights-syntax-comment);
}

body .pl-c1,
body .pl-s .pl-v {
  color: var(--color-prettylights-syntax-constant);
}

body .pl-e,
body .pl-en {
  color: var(--color-prettylights-syntax-entity);
}

body .pl-smi,
body .pl-s .pl-s1 {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}

body .pl-ent {
  color: var(--color-prettylights-syntax-entity-tag);
}

body .pl-k {
  color: var(--color-prettylights-syntax-keyword);
}

body .pl-s,
body .pl-pds,
body .pl-s .pl-pse .pl-s1,
body .pl-sr,
body .pl-sr .pl-cce,
body .pl-sr .pl-sre,
body .pl-sr .pl-sra {
  color: var(--color-prettylights-syntax-string);
}

body .pl-v,
body .pl-smw {
  color: var(--color-prettylights-syntax-variable);
}

body .pl-bu {
  color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
}

body .pl-ii {
  color: var(--color-prettylights-syntax-invalid-illegal-text);
  background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
}

body .pl-c2 {
  color: var(--color-prettylights-syntax-carriage-return-text);
  background-color: var(--color-prettylights-syntax-carriage-return-bg);
}

body .pl-sr .pl-cce {
  font-weight: bold;
  color: var(--color-prettylights-syntax-string-regexp);
}

body .pl-ml {
  color: var(--color-prettylights-syntax-markup-list);
}

body .pl-mh,
body .pl-mh .pl-en,
body .pl-ms {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}

body .pl-mi {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}

body .pl-mb {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}

body .pl-md {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}

body .pl-mi1 {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}

body .pl-mc {
  color: var(--color-prettylights-syntax-markup-changed-text);
  background-color: var(--color-prettylights-syntax-markup-changed-bg);
}

body .pl-mi2 {
  color: var(--color-prettylights-syntax-markup-ignored-text);
  background-color: var(--color-prettylights-syntax-markup-ignored-bg);
}

body .pl-mdr {
  font-weight: bold;
  color: var(--color-prettylights-syntax-meta-diff-range);
}

body .pl-ba {
  color: var(--color-prettylights-syntax-brackethighlighter-angle);
}

body .pl-sg {
  color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
}

body .pl-corl {
  text-decoration: underline;
  color: var(--color-prettylights-syntax-constant-other-reference-link);
}

body [data-catalyst] {
  display: block;
}

body g-emoji {
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

body g-emoji img {
  width: 1em;
  height: 1em;
}

body::before {
  display: table;
  content: "";
}

body::after {
  display: table;
  clear: both;
  content: "";
}

body>*:first-child {
  margin-top: 0 !important;
}

body>*:last-child {
  margin-bottom: 0 !important;
}

body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

body .absent {
  color: var(--color-danger-fg);
}

body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

body .anchor:focus {
  outline: none;
}

body p,
body blockquote,
body ul,
body ol,
body dl,
body table,
body pre,
body details {
  margin-top: 0;
  margin-bottom: 12px;
}

body blockquote>:first-child {
  margin-top: 0;
}

body blockquote>:last-child {
  margin-bottom: 0;
}

body sup>a::before {
  content: "[";
}

body sup>a::after {
  content: "]";
}

body h1 .octicon-link,
body h2 .octicon-link,
body h3 .octicon-link,
body h4 .octicon-link,
body h5 .octicon-link,
body h6 .octicon-link {
  color: var(--color-fg-default);
  vertical-align: middle;
  visibility: hidden;
}

body h1:hover .anchor,
body h2:hover .anchor,
body h3:hover .anchor,
body h4:hover .anchor,
body h5:hover .anchor,
body h6:hover .anchor {
  text-decoration: none;
}

body h1:hover .anchor .octicon-link,
body h2:hover .anchor .octicon-link,
body h3:hover .anchor .octicon-link,
body h4:hover .anchor .octicon-link,
body h5:hover .anchor .octicon-link,
body h6:hover .anchor .octicon-link {
  visibility: visible;
}

body h1 tt,
body h1 code,
body h2 tt,
body h2 code,
body h3 tt,
body h3 code,
body h4 tt,
body h4 code,
body h5 tt,
body h5 code,
body h6 tt,
body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

body ul.no-list,
body ol.no-list {
  padding: 0;
  list-style-type: none;
}

body ol[type="1"] {
  list-style-type: decimal;
}

body ol[type=a] {
  list-style-type: lower-alpha;
}

body ol[type=i] {
  list-style-type: lower-roman;
}

body div>ol:not([type]) {
  list-style-type: decimal;
}

body ul ul,
body ul ol,
body ol ol,
body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

body li>p {
  margin-top: 16px;
}

body li+li {
  margin-top: .25em;
}

body dl {
  padding: 0;
}

body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

body table th {
  font-weight: 600;
}

body table th,
body table td {
  padding: 6px 13px;
  border: 1px solid var(--color-border-default);
}

body table tr {
  background-color: var(--color-canvas-default);
  border-top: 1px solid var(--color-border-muted);
}

body table tr:nth-child(2n) {
  background-color: var(--color-canvas-subtle);
}

body table img {
  background-color: transparent;
}

body img[align=right] {
  padding-left: 20px;
}

body img[align=left] {
  padding-right: 20px;
}

body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

body span.frame {
  display: block;
  overflow: hidden;
}

body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid var(--color-border-default);
}

body span.frame span img {
  display: block;
  float: left;
}

body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: var(--color-fg-default);
}

body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

body span.align-right span img {
  margin: 0;
  text-align: right;
}

body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

body span.float-left span {
  margin: 13px 0 0;
}

body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

body code,
body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  background-color: var(--color-neutral-muted);
  border-radius: 6px;
}

body code br,
body tt br {
  display: none;
}

body del code {
  text-decoration: inherit;
}

body pre code {
  font-size: 100%;
}

body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}



body .highlight {
  margin-bottom: 16px;
}

body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

body .highlight pre,
body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  /* background-color: var(--color-neutral-muted); */
  background-color: white;
  border-radius: 6px;
}

body pre code,
body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

body .csv-data td,
body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

body .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: var(--color-canvas-default);
  border: 0;
}

body .csv-data tr {
  border-top: 0;
}

body .csv-data th {
  font-weight: 600;
  background: var(--color-canvas-subtle);
  border-top: 0;
}

body .footnotes {
  font-size: 12px;
  color: var(--color-fg-muted);
  border-top: 1px solid var(--color-border-default);
}

body .footnotes ol {
  padding-left: 16px;
}

body .footnotes li {
  position: relative;
}

body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid var(--color-accent-emphasis);
  border-radius: 6px;
}

body .footnotes li:target {
  color: var(--color-fg-default);
}

body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

body .task-list-item {
  list-style-type: none;
}

body .task-list-item label {
  font-weight: 400;
}

body .task-list-item.enabled label {
  cursor: pointer;
}

body .task-list-item+.task-list-item {
  margin-top: 3px;
}

body .task-list-item .handle {
  display: none;
}

body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.6em;
  vertical-align: middle;
}

body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}


details > ul > li{
	margin-top: .5em;
}


.side{
	/* margin-top: 4em; */
	width: 15%;
	margin-left: 1em;
	margin-right: 0px;
	height:80vh;
	/* min-width: fit-content; */
	padding-right: 1em;
    position: sticky;
	display: flex;
	top: 2em;
	flex-direction: column;
	border-left: 1px solid var(--color-border-muted);
}

.sticky {	
	overflow-y: scroll;
	width: 100%;
	/* overflow-x: scroll; */
	/* max-height: 80%; */
	padding: 0.25em;
	padding-left: 0.4em;
	font-size: 80%;	
	/* border-style: solid; */
	/* border-width: 1px; */
}

.side > .summary{
	margin-top: 0.5em;
	font-style: oblique;
	border-bottom: rgba(148, 156, 163, 0.2);
	border-bottom-style: solid;
	border-width: thin;	
	font-size: large;
    margin-left: 0.3em;
}

.sticky > ul > li{
	margin-top: .5em;
}

details > div{
	padding: 0.4em;
	font-size: 95%;
}

details > div,summary{
	border-bottom: rgba(148, 156, 163, 0.2);
	border-bottom-style: solid;
	border-width: thin;	
}

details > ul,summary{
	padding-right: 0.6em;
}

.main{
	/* min-width: 70%; */
	width: 85%;
	/* max-width: 120%; */
}





/* body h1 {
	margin: .67em 0;
	font-weight: 600;
	padding-top: 1em ;
	padding-bottom: .3em;
	font-size: 2em;
	border-bottom: 2px solid var(--color-border-muted);
  } */






</style>

</details>