---
theme: default
layout: none
title: 公開されているAgent Skillsを使ってみる
info: grill-meの紹介
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Noto Sans JP
  mono: DejaVu Sans Mono
  local: Noto Sans JP, DejaVu Sans Mono
transition: none
mdc: true
---

<div class="work-slide" style="background:#142638">
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#A6B7C8;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">01</div>
<div class="work-text" style="left:72px;top:63px;width:300px;height:40px;font-size:22px;color:#8AD8D4;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">社内LT</div>
<div class="work-text" style="left:72px;top:175px;width:1136px;height:97px;font-size:64px;color:#FFFFFF;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">公開されている</div>
<div class="work-text" style="left:72px;top:286px;width:1136px;height:112px;font-size:74px;color:#FFFFFF;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">Agent Skillsを使ってみる</div>
<div class="work-text" style="left:77px;top:490px;width:1110px;height:55px;font-size:30px;color:#8AD8D4;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">grill-meの紹介</div>
</div>

<!--
公開されているAgent Skillsの使い方と、設計相談を質問から始めるgrill-meを紹介します。

出典
https://github.com/mattpocock/skills
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">Skills、自分で作り込んでいませんか？</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">02</div>
<div class="work-text" style="left:67px;top:205px;width:1135px;height:55px;font-size:34px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">モデルが変わったら、指示も見直す</div>
<div class="work-text" style="left:67px;top:276px;width:1135px;height:104px;font-size:29px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.4">以前のモデル向けに足した手順が、<br>更新後も必要とは限らない。</div>
<div class="work-text" style="left:67px;top:431px;width:1135px;height:55px;font-size:34px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">作ったあとも、動作確認と修正が続く</div>
<div class="work-text" style="left:67px;top:503px;width:1135px;height:49px;font-size:29px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">指示を足すたびに、別のタスクでも使えるか確かめる。</div>
<div class="work-text" style="left:67px;top:623px;width:1135px;height:48px;font-size:30px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">自作する前に、公開Skillsも探してみる。</div>
</div>

<!--
自作したSkillには、実際のタスクでの動作確認と修正が必要です。Agent Skillsのベストプラクティスは、指示を入れなくてもモデルが実行できるなら、その指示を削ることを勧めています。モデル更新後も以前の手順が必要とは限らない、という部分はその考え方を踏まえた運用上の見立てであり、必ず陳腐化するという意味ではありません。公開Skillも中身の確認と手元での動作確認は必要です。

出典
https://agentskills.io/skill-creation/best-practices
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">公開されているSkillsも使える</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">03</div>
<div class="work-text" style="left:67px;top:216px;width:564px;height:126px;font-size:30px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.45">GitHubなどで公開されているSkillを<br>Claude Codeなどに追加して使える。</div>
<div class="work-text" style="left:67px;top:413px;width:558px;height:118px;font-size:29px;color:#17283A;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.5">手順を一から書かずに、<br>公開されているものを試せる。</div>
<img class="work-image" src="/mattpocock-skills.jpg" alt="GitHubで公開されているSkillsのリポジトリ。" style="left:668px;top:184px;width:548px;height:376px" />
<div class="work-text" style="left:67px;top:606px;width:1135px;height:40px;font-size:23px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">追加前に内容を確認し、手元のタスクで試す。</div>
<a class="work-text" href="https://github.com/mattpocock/skills" style="left:67px;top:655px;width:1100px;height:42px;font-size:18px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">公開例：Matt Pocock / mattpocock/skills（MITライセンス）</a>
</div>

<!--
公開されているSkillは、対応するツールに追加して利用できます。ここではGitHub上のmattpocock/skillsを例に紹介しています。追加前に内容を確認し、手元のタスクで動作を確かめます。公開されているため確認や保守が不要という意味ではありません。画像は2026-09-26に取得した公開ページです。

出典
https://github.com/mattpocock/skills
https://github.com/vercel-labs/skills
https://github.com/mattpocock/skills/blob/main/LICENSE
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">grill-me</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">04</div>
<div class="work-text" style="left:67px;top:205px;width:1135px;height:148px;font-size:38px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.45">質問に答えながら、曖昧な点や<br>抜けている条件を確認する。</div>
<div class="work-text" style="left:67px;top:462px;width:1135px;height:53px;font-size:32px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">文書にも残したいときは grill-with-docs</div>
<div class="work-text" style="left:67px;top:538px;width:1135px;height:50px;font-size:29px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">質問に加えて、用語や設計判断も文書に残す。</div>
<a class="work-text" href="https://github.com/mattpocock/skills" style="left:67px;top:655px;width:1100px;height:42px;font-size:18px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">出典：Matt Pocock / mattpocock/skills（MITライセンス）</a>
</div>

<!--
grill-meは計画や案について質問するSkillです。grill-with-docsは質問に加えて、用語集や設計判断の記録を作成・更新するSkillです。ここでは違いだけを紹介し、以降の会話例とデモではgrill-meを使います。公開元のMITライセンスは利用・改変・再配布を認めます。配布時には著作権表示とライセンス文を残します。

出典
https://github.com/mattpocock/skills
https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md
https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md
https://github.com/mattpocock/skills/blob/main/LICENSE
-->

---
layout: none
---

<div class="work-slide" style="background:#142638">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#FFFFFF;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">grill-me の追加と呼び出し</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#A6B7C8;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">05</div>
<div class="work-text" style="left:67px;top:134px;width:1100px;height:39px;font-size:22px;color:#8AD8D4;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">例：Claude Code（コマンドはBash / zsh）</div>
<div class="work-text" style="left:67px;top:201px;width:1100px;height:43px;font-size:27px;color:#FFFFFF;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">1   作業フォルダーで追加する</div>
<div class="work-text" style="left:96px;top:264px;width:1115px;height:91px;font-size:26px;color:#8AD8D4;font-weight:400;font-family:'DejaVu Sans Mono','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.35">npx skills@latest add mattpocock/skills \<br>  --skill grill-me grilling --agent claude-code</div>
<div class="work-text" style="left:67px;top:392px;width:1100px;height:44px;font-size:27px;color:#FFFFFF;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">2   Claude Codeのチャットで呼び出す</div>
<div class="work-text" style="left:96px;top:459px;width:1080px;height:45px;font-size:33px;color:#8AD8D4;font-weight:700;font-family:'DejaVu Sans Mono','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">/grill-me</div>
<div class="work-text" style="left:96px;top:511px;width:1090px;height:106px;font-size:28px;color:#FFFFFF;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.35">Azure Functionsで社内向けAPIを作りたいです。<br>方式設計Agentに渡す前に、認証と公開範囲を詰めたいです。</div>
<div class="work-text" style="left:67px;top:645px;width:1125px;height:28px;font-size:17px;color:#BAC9D7;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">Node.js / npm が必要です。grilling は grill-me が内部で使うSkillです。</div>
</div>

<!--
grill-meは現在、grillingを呼び出す短いSkillです。この例では両方をClaude Codeに追加します。コマンドは作業プロジェクト内にSkillファイル等を追加します。導入前にSkillの内容と社内の利用ルールを確認してください。改行に使うバックスラッシュはBash / zshの記法です。PowerShell等では2行を1行につなげて実行できます。呼び出し表記はクライアントによって異なります。今回はgrill-me/grillingの利用に絞っています。

出典
https://github.com/mattpocock/skills
https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md
https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md
https://github.com/vercel-labs/skills
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">grill-me の会話例</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">06</div>
<div class="work-text" style="left:67px;top:137px;width:1140px;height:44px;font-size:28px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">質問に推奨案も付くので、回答を考えやすい。</div>
<div class="work-text" style="left:67px;top:225px;width:80px;height:44px;font-size:24px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">AI</div>
<div class="work-text" style="left:161px;top:216px;width:1035px;height:49px;font-size:33px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">誰がAPIを呼び出しますか？</div>
<div class="work-text" style="left:161px;top:274px;width:1035px;height:43px;font-size:26px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">推奨案：まずは社内システム専用に絞る。</div>
<div class="work-text" style="left:161px;top:360px;width:1040px;height:49px;font-size:33px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">インターネットからのアクセスは必要ですか？</div>
<div class="work-text" style="left:161px;top:418px;width:1035px;height:43px;font-size:26px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">推奨案：社内ネットワークからの利用に限定する。</div>
<div class="work-text" style="left:67px;top:535px;width:85px;height:44px;font-size:24px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">自分</div>
<div class="work-text" style="left:161px;top:525px;width:1035px;height:103px;font-size:32px;color:#145AB0;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.3">社内バッチから呼びます。<br>社外からのアクセスは不要です。</div>
<div class="work-text" style="left:67px;top:663px;width:1040px;height:27px;font-size:17px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">説明用の会話例。実際の質問・推奨案・順序は変わります。</div>
</div>

<!--
説明用に作成した会話例です。実行ログではありません。grillingは、前提が決まっていて今答えられる質問をまとめ、各質問に推奨案を付ける指示です。回答に依存する質問は次の回に回します。ここでは方式設計Agentに渡す前の要件詰めに使っています。

出典
https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md
https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md
https://github.com/mattpocock/skills
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">回答に合わせて、質問が続く</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">07</div>
<div class="work-text" style="left:67px;top:137px;width:1145px;height:44px;font-size:28px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">「社内バッチから呼ぶ」と分かったので、次を確認。</div>
<div class="work-text" style="left:67px;top:225px;width:80px;height:44px;font-size:24px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">AI</div>
<div class="work-text" style="left:161px;top:216px;width:1040px;height:49px;font-size:33px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">バッチはどこで動いていますか？</div>
<div class="work-text" style="left:161px;top:274px;width:1035px;height:43px;font-size:26px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">推奨案：既存の実行環境をそのまま使う。</div>
<div class="work-text" style="left:161px;top:357px;width:1040px;height:49px;font-size:33px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">APIの認証方式に指定はありますか？</div>
<div class="work-text" style="left:161px;top:415px;width:1035px;height:43px;font-size:26px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">推奨案：既存のID基盤に合わせる。</div>
<div class="work-text" style="left:67px;top:524px;width:85px;height:44px;font-size:24px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">自分</div>
<div class="work-text" style="left:161px;top:516px;width:1045px;height:113px;font-size:28px;color:#145AB0;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.4">バッチはオンプレです。Azureへの閉域接続はあります。<br>認証はEntra IDのアプリ認証に統一します。</div>
<div class="work-text" style="left:67px;top:663px;width:1085px;height:27px;font-size:17px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">説明用の会話例（前ページの続き）。</div>
</div>

<!--
前ページから続く説明用の会話例です。接続や認証の前提は架空の設定であり、利用者の本番システムを断定したものではありません。grillingの公開指示には、共通理解に至ったとユーザーが確認するまで作業を進めない、とあります。この時点ですべてのAPI要件が決まったわけではありません。

出典
https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">質問で詰めた要件を、方式設計Agentへ</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">08</div>
<table class="work-table" style="left:65px;top:191px;width:731px;height:356px"><colgroup><col style="width:207px" /><col style="width:524px" /></colgroup><tbody><tr><th class="row-label">確認したこと</th><th class="">この例での回答</th></tr><tr><td class="row-label">呼び出し元</td><td class="">社内バッチ（オンプレ）</td></tr><tr><td class="row-label">公開範囲</td><td class="">社内のみ</td></tr><tr><td class="row-label">ネットワーク</td><td class="">既存の閉域接続を使う</td></tr><tr><td class="row-label">認証</td><td class="">Entra IDのアプリ認証</td></tr></tbody></table>
<div class="work-text" style="left:842px;top:204px;width:378px;height:82px;font-size:29px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">回答をまとめて渡す</div>
<div class="work-text" style="left:842px;top:300px;width:370px;height:141px;font-size:25px;color:#17283A;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.45">呼び出し元や接続・認証の<br>条件を添えて、方式案の<br>作成を依頼する。</div>
<div class="work-text" style="left:842px;top:470px;width:370px;height:99px;font-size:25px;color:#17283A;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.4">分からない条件は、<br>未確認と明記する。</div>
<div class="work-text" style="left:67px;top:625px;width:1130px;height:39px;font-size:22px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">この例では未確認：APIの処理内容、呼び出し量、可用性など。</div>
</div>

<!--
会話例で決めた前提だけを整理しています。grill-meが必ずこの表を出力するという仕様ではありません。表への整理を求めたい場合は、会話の最後に依頼します。方式設計Agentを動かす前に、決まった条件と未確認の点を整理して渡す使い方です。方式設計Agentという呼称は業務上の想定です。質問に答えただけで全要件がそろったという意味ではありません。

出典
https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md
-->

---
layout: none
---

<div class="work-slide" style="background:#142638">
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#A6B7C8;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">09</div>
<div class="work-text" style="left:72px;top:229px;width:1136px;height:101px;font-size:70px;color:#FFFFFF;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">デモをやってみます</div>
<div class="work-text" style="left:77px;top:389px;width:1120px;height:67px;font-size:39px;color:#8AD8D4;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">今日の晩ご飯を grill-me で考える</div>
</div>

<!--
ここで実際の操作画面に切り替えます。お題は今日の晩ご飯です。

出典

-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">質問が広がりすぎたとき</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">10</div>
<div class="work-text" style="left:67px;top:192px;width:1140px;height:58px;font-size:35px;color:#145AB0;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">「今回は認証と公開範囲だけ決めたいです」</div>
<div class="work-text" style="left:84px;top:268px;width:1100px;height:46px;font-size:27px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">何を決めたいか、範囲を指定する。</div>
<div class="work-text" style="left:67px;top:365px;width:1140px;height:106px;font-size:35px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.35">「性能はまだ分かりません。<br>　検証項目にしてください」</div>
<div class="work-text" style="left:84px;top:491px;width:1100px;height:46px;font-size:27px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">分からないことまで、その場で決めなくてよい。</div>
<div class="work-text" style="left:67px;top:620px;width:1130px;height:44px;font-size:24px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">推奨案も確認は必要。製品仕様の調査や性能の実測は、別に行います。</div>
</div>

<!--
質問の範囲をユーザーの明示指示で狭めたり、判断に必要な情報がなければ保留して調査や検証へ切り替える、という使い方の提案です。grillingの原文はすべての分岐を解決するまで質問するという強い指示のため、LTではこの調整方法も示しています。質問の回数削減や過剰設計防止を確約していません。

出典
https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md
-->

---
layout: none
---

<div class="work-slide" style="background:#F7F8FA">
<div class="work-text" style="left:64px;top:47px;width:1152px;height:77px;font-size:46px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">参考資料</div>
<div class="work-text" style="left:1180px;top:673px;width:36px;height:24px;font-size:16px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">11</div>
<div class="work-text" style="left:67px;top:179px;width:1110px;height:53px;font-size:31px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">公開Skillsの一覧と追加方法</div>
<a class="work-text" href="https://github.com/mattpocock/skills" style="left:67px;top:242px;width:1120px;height:42px;font-size:29px;color:#145AB0;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">github.com/mattpocock/skills</a>
<div class="work-text" style="left:67px;top:348px;width:1110px;height:49px;font-size:28px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">質問に答えて、案や要件を詰める</div>
<a class="work-text" href="https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md" style="left:67px;top:408px;width:1120px;height:42px;font-size:29px;color:#145AB0;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">grill-me / SKILL.md</a>
<div class="work-text" style="left:67px;top:514px;width:1110px;height:49px;font-size:28px;color:#17283A;font-weight:700;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">用語や設計判断も文書に残す</div>
<a class="work-text" href="https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md" style="left:67px;top:574px;width:1120px;height:42px;font-size:29px;color:#145AB0;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">grill-with-docs / SKILL.md</a>
<div class="work-text" style="left:67px;top:655px;width:1110px;height:28px;font-size:18px;color:#526375;font-weight:400;font-family:'Noto Sans JP','Noto Sans CJK JP','Meiryo',sans-serif;line-height:1.2">公開元：Matt Pocock / mattpocock/skills（MIT）。公開内容は更新されることがあります。</div>
</div>

<!--
今回紹介した公開Skillsの一覧、追加方法、2つのSkillの定義へのリンクです。Skillの内容や導入方法は更新されることがあります。

出典
https://github.com/mattpocock/skills
https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md
https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md
https://github.com/mattpocock/skills/blob/main/LICENSE
-->
