# 1日目
## 質問されたこと
```text 
Q：アルゴリズムの考え方とは？始めと終わりがある、順番にそって考えるのか、途中から見るのかどっちがいいの？
A：自分のやりやすいように
```
```text
Q：ファイルコピーのやり方
A：展開したものをコピーしてほしい
```
```text 
Q：タイピング速度は？
A：そこまで求めてない
```
```text
Q：Eclipseのパッケージエクスプローラーが見えない
A：ウィンドウのどっかからリセット、window > パースペクティブ > リセット
```

## 困りごとなど
- 休みの人がでた
- 周りでやりたい人が現れたら途中参加させる
- 配列など、習ってないのを使う問題が多い
    - ある程度問題をピックアップしておく？
    - こっちで問題を用意する？
        - Webから持ってきてJUnitで
- 途中からでも参加できるようにしておきたい。
- 変数名とか、最初は日本語で書いてもらうのもありかも……？






# 2日目
## 質問されたこと
```text 
Q：何もかもがまったくわからない
A：ひも解いて解説した
```


## 困りごとなど
- 失敗を恐れすぎている
- 終わって暇な人はどうしよう？
	- Codewarsとか？
- 無駄に配列を使った変数を作ろうとする人もいて面白かった
- javaのコードの先頭の`import`が抜けてる人がいた
- 配列のindexのややこしさ……
	- 実際に箱を用意するとか？
	- 参加者に並んでもらって、番号を振り分けたり？




# 3日目
## 質問されたこと
とくになし。
## 困りごとなど
- ファイルを共有したい
	- 何かしらの理由で出来なかった作業（エクリプス日本語化など）は、資料化されているものはそれを渡すので自分でやってもらいたい
	- 別にわかってる人に教えてもらってね、でもいいけど、ファイル共有できるほうが何かと便利
- java研修で使ったPCは次以降も同じものを使ってほしい
	- 環境設定しなおしが発生して時間の無駄





# 4日目
## 質問されたこと
```text 
Q：abstractとinterfaceの違いは？（やっていることがほとんど同じでは？）
A：イメージとしては、abstractを継承するときは、1つのカテゴリを表している。
例えば、クライアントしかできないこと、クライアントなら全員出来ることならabstract。
一方、interfaceは、クラス問わずにできること。
例えば、乗り物があるとする。「動く」ってやってしまえばできるが、
「動く」って動作を乗り物以外、人間も動物も動くよねって時など、
全部に実装したいときに「動く」をinterfaceにする。
```
```text 
Q：インターフェイスは複数できる？
A：できます、カンマ区切りで記述してください
```


## 困りごとなど
- 説明を聞いてその場で疑問に思ったことしか質問してこない
	- 例えば、機能の説明みたいなところしか質問されない
	- 考え方とかはあまり質問してくれない
		- たぶんそこまで追いついていない
- わからなくてもヘルプをだしてこない、そのまま大丈夫って言っちゃう
	- わからなくて怒られるってプログラマだと（あんまり）ない気がするけど、他の業種だとそうでもないのだろうか……
		- 「わからなくて当たり前、ミスって当たり前、なのでそこで助けを求めてほしい」という前提を理解してもらわないと
			- ここまでくるとjavaのカリキュラムとか関係なくない？
			- どこまで個人に合わせて足並みをそろえるのか
			- あるいはどこまでサポートするのか
				- わかってる受講者に教えてもらえれば一番楽かつ理解が深まると思う




# 5日目
## 質問されたこと
```text 
Q：catchするのはExceptionで大丈夫？わかってる範囲で詳細まで決めてcatchするほうがいい？
A：正直に言うと、開発者個人の感覚と、チームの方針による。
例えば、DBのことやってるときにはDBのエラーしか発生しないし、どっちでもいい。裁量による。
ただExceptionだと、何かがあったらcatch出来て安心。しかし、DB以外で何かが発生したときに、追うのが大変ってのがある。
```
```text 
Q：スタックトレースってのはエラーが起きた場所を教えてくれる？
A：それプラス、そこにたどりつくまでにどういった処理が行われたかを教えてくれる。
```



## 困りごとなど
- たぶん何人かはよくわかってない