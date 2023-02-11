# 職務経歴書

## 基本情報

|||
|---|-----|
|Name|二川隆浩（Takahiro Futagawa）|
|Blog|[futabooo blog](http://futabooo.hatenablog.com/)|
|Twitter|[@futabooo](https://twitter.com/futabooo)|
|Qiita|[futabooo](http://qiita.com/futabooo)|
|SlideShare|[takahiro futagawa](http://www.slideshare.net/TakahiroFutagawa)|
|Speakerdeck|[futabooo](https://speakerdeck.com/futaboooo)|

## 職務経歴

- 株式会社10X
    - Software Engineer
        - 2020/07 - 現在
- 株式会社エウレカ
    - Software Engineer
        - Pairsエンゲージ事業部 2019/05 - 2020/06
            - `Android`
            - 優先順位が高いものから順に並んだプロダクトバックログとカンバンでのDoing管理での開発
        - Pairs事業部 2016/04 - 2019/05
            - `Android`, `Team Building`, `Monetize`
            - Scrumチームでのスプリントベースの開発
                - Android開発とスクラムマスターを兼任
            - PairsのAndroid,ServerSide,WebFrontの開発
        - Couples事業部 2014/7 - 2016/04
            - `Android`
            - Android版の開発
            - マーケティングチームと連携した施策の開発
- 株式会社ボルテージ
    - Software Engineer
        - 2012/04 - 2014/06
        - `Android`, `iOS`, `Team Lead`
        - ノベルゲームのAndrod版の新規開発
        - ノベルゲームのAndroid版、iOS版の保守運用

## プロジェクト
### 小売チェーンのECを垂直立ち上げ [Stailer](https://stailer.jp/)
- カテゴリ：SaSS
- 期間：2020/07 - 現在
- 担当工程：企画、要件定義、設計、コーディング、テスト、保守/運用
- 技術：Flutter、Dart、Nuxt、GCP、GitHubActions
```
Flutterアプリの機能追加・保守運用、またServerSideはDartとGCPでの機能追加・保守運用を行っています。
```

### 結婚コンシェルジュサービス [Pairsエンゲージ](https://engage.pairs.lv/)
- カテゴリ：スマホアプリ
- 期間：2019/05 - 2020/06
- 担当工程：企画、要件定義、設計、コーディング、テスト、保守/運用、データ分析
- 技術：Android、Kotlin、Fastlane、Bitrise
```
技術選定から1人で行いました。Android Jetpackの安定版が複数リリースされていたり、公式のドキュメントや他社の事例も増えてきていることからAndroid Jetpackをメインとして使う構成にしました。このアプリでは自分とお相手の状態によって複雑な複数の状態変化があるため、Fluxによる単一方向データフローを用いた設計にし処理を追いやすいように実装しました。

先にiOS版アプリが開発されているところに途中からAndroid版開発メンバーとして入りました。
リリース日が決まっており約3ヶ月で0からリリースまで持っていく必要がありましたが、Android開発メンバーとしてアサインされたのは自分ひとりだけだったので現実的に間に合いそうにありませんでした。
そこで知り合いのAndroidエンジニアに声をかけたところ副業で1人、業務委託で1人3ヶ月の短期間のみ手伝ってくれる人を見つけることができ、なんとかリリース日の3日前にQAのまで完了してリリースできる状態まで持っていくことができました。

このプロジェクトではJiraをタスク管理に使っていましたが、手伝ってくれる二人には社内のセキュリティの都合上Jiraの閲覧権限を付与することができずGithubProjectsを使いました。社内の企画・要件定義のミーティングを経てタスク化されたJiraチケットの内容をGithubIssueにコピーすることで3人での開発の管理を行っていました。Issueには優先順位をつけ、手が空いたら上から順番に自分でIssueを取っていけばいい状態にすることで私自身が極力プロジェクトマネジメント的なことをせずにコードを書く時間を確保するように心がけていました。
```

### オンラインデーティングサービス　[Pairs](https://www.pairs.lv/)
- カテゴリ：スマホアプリ、Webアプリ
- 期間：2016/04 - 2019/04
- 担当工程：企画、要件定義、設計、コーディング、テスト、保守/運用、データ分析
- 技術：Android、iOS、Kotlin、Java、Swift、Objective-C、TypeScript、AngularJS、
```
Androidを中心にiOSやWebフロントエンド、サーバーサイド開発まで多岐に渡って開発を行っていました。
2016年頃のプロジェクト参加直後はそれまでやっていたAndroid開発を離れてgolangとTypeScriptを中心に用いてアプリ内で割引や特典オプションを付与する期間限定のキャンペーン開発を行っていました。サブスクリプションに登録している有料会員数をKGIとして、課金ページを開く人数、LPを開く人数、メールやPush通知のキャンペーン告知からアプリを開く人数などのファネルを意識した数値分析もチームで行い開発や改善を行っていました。
```

### カップル専用SNSアプリ [Couples](https://couples.lv/)
- カテゴリ：スマホアプリ
- 期間：2014/07 - 2016/03
- 担当工程：企画、要件定義、設計、コーディング、テスト、保守/運用、データ分析
- 技術：Android、Java、Wercker
```
カップルで使うLINEのようにメッセージやアルバムが作れるアプリのAndroid版開発を行っていました。
一番記憶に残っているのはメッセージ機能にアプリ独自の絵文字を実装したことで、この内容DroidKaigi2017でも発表しています
```

## サイドプロジェクト
### 読書メーター非公式Androidアプリ [BookLife](https://play.google.com/store/apps/details?id=com.futabooo.android.booklife)


## テクニカルスキル
| スキル | レベル |
|--|--|
|Flutter|:star::star:|
|Android|:star::star::star::star::star:|
|Kotlin|:star::star::star::star:|
|Java|:star::star::star::star:|
|Go|:star:|
|Dart|:star:|
|TypeScript|:star:|
|スクラム開発|:star::star::star::star:|
|スクラムマスター|:star::star::star:|


## 登壇歴
| Date | Event | Slide |
| ---- | ----- | ----- |
|2015/07/14|【第19回】potatotips(iOS/Android開発Tips共有会)|[Push通知を届けるために](https://speakerdeck.com/futaboooo/pushtong-zhi-wojie-kerutameni)|
|2016/01/22|オープンソースライブラリ研究会 #3|[TryDateLibraryofAndroid](https://speakerdeck.com/futaboooo/trydatelibraryofandroid)|
|2016/02/05|エンジニアサポートCROSS2016(アンカンファレンス)|エウレカで行っている勉強会について(飛び込みで社内の取り組みについて発表)|
|2016/09/28|potatotips #33 (iOS/Android開発Tips共有会)|[Battery Historian V2](https://speakerdeck.com/futaboooo/battery-historian-v2)|
|2017年|||
|2017/03/09|[DroidKaigi2017](https://droidkaigi.github.io/2017)|[トークアプリで絵文字を実装した話](https://speakerdeck.com/futaboooo/tokuapuridehui-wen-zi-woshi-zhuang-sitahua)|
|2017/03/17|[Minami Aoyama Night #2](https://minami-aoyama-night.connpass.com/event/51171/)|[Pairsのデザインガイドラインを作って開発を効率化した話](https://speakerdeck.com/futaboooo/pairsfalsedezaingaidorainwozuo-tutekai-fa-woxiao-lu-hua-sitahua)|
|2017/07/12|[【初心者歓迎】Kotlin開発Tech Talks](https://connpass.com/event/59898/)|[テストから始めるKotlin導入](https://speakerdeck.com/futaboooo/tesutokarashi-merukotlindao-ru)|
|2018/08/23|[potatotips #54 (iOS/Android開発Tips共有会)](https://potatotips.connpass.com/event/95391/)|[ghq+peco+studioコマンドでプロジェクトをすぐ開く](https://speakerdeck.com/futaboooo/project-open-lightning-speed-with-ghq-plus-peco-plus-studio-commands)|
|2018年|||
|2018/01/12|[eureka x Nulab スクラム開発の現場](https://eure.connpass.com/event/74590/)|[新人スクラムマスターが開発者と兼任しながらやってきた事と成果](https://speakerdeck.com/futaboooo/what-the-newcomer-scrum-master-came-while-concurrently-serving-as-a-developer-and-the-result)|
|2018/02/01|[Connehito Marché #1〜Android市〜](https://connehito-marche.connpass.com/event/76245/)|[Androidでスクレイピングした話](https://speakerdeck.com/futaboooo/talk-of-scraping-with-android)|
|2018/06/15|[eureka Meetup #10 -PairsのAndroid開発の裏側-](https://eure.connpass.com/event/88415/)|[モブプログラミングという開発スタイル、あるいは生産性について](https://speakerdeck.com/futaboooo/on-development-style-called-mob-programming-or-productivity)|
|2018/07/20|[【デザイナー×エンジニア】 プロダクトづくりのほんとのところ](https://eure.connpass.com/event/92040/)|[Pairsの開発のすべて](https://speakerdeck.com/futaboooo/all-of-pairs-development)|
|2018/08/07|[Androidエンジニア デザイン部 #2](https://nohana.connpass.com/event/94621/)|[InvisionのAndroidアプリでみる4つのデザイン基本原則](https://speakerdeck.com/futaboooo/four-design-basic-principles-seen-in-invisions-android-application)|
|2019年|||
|2019/01/09|[Regional Scrum Gathering Tokyo 2019](https://2020.scrumgatheringtokyo.org/)|[スクラムチームをやめて、20人でカンバン運用してきた半年間の軌跡](https://speakerdeck.com/futaboooo/stop-scrum-start-kanban)|
|2019/01/30|[第31回 Tokyo Atlassian ユーザーグループ at Eureka](https://augj.connpass.com/event/116298/)|[ペアプロ・モブプロを広めるのに役立ったControl Chartの使い方](https://speakerdeck.com/futaboooo/how-to-use-control-chart-which-helped-spread-pair-or-mob-programing)|
|2019/07/17|[Matching Dev Meetup#4 - Engineering](https://matching-dev-group.connpass.com/event/133322/)|[チームの学びを活かす全社での取り組み](https://speakerdeck.com/futaboooo/company-wide-efforts-to-make-use-of-teams-learning)|
|2019/12/17|[potatotips #67 (iOS/Android開発Tips共有会)](https://potatotips.connpass.com/event/152899/)|[Android Jetpack Navigation Deep Links Tips](https://speakerdeck.com/futaboooo/android-jetpack-navigation-deep-links-tips)|