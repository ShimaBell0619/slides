---
theme: default
title: AIに答えさせる前に、質問させる
info: |
  社内LT用のGrill Me紹介スライド試作。
  Source: https://github.com/mattpocock/skills
fonts:
  sans: Inter, Noto Sans JP, ui-sans-serif, system-ui
transition: fade-out
mdc: true
layout: cover
class: text-left
---

<style>
:root {
  --slidev-theme-primary: #2563eb;
  --slidev-code-font-size: 0.82rem;
}
.slidev-layout {
  color: #111827;
  background: #f8fafc;
  font-size: 1.55rem;
  line-height: 1.45;
}
h1 {
  font-size: 3.4rem !important;
  line-height: 1.08 !important;
  letter-spacing: -0.04em;
}
h2 {
  font-size: 2.35rem !important;
  letter-spacing: -0.03em;
}
strong { color: #1d4ed8; }
.small { font-size: 1.05rem; color: #64748b; }
.note { color: #475569; font-size: 1.2rem; }
.kicker { color: #2563eb; font-weight: 700; letter-spacing: .08em; font-size: 0.9rem; text-transform: uppercase; }
.box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 1.2rem 1.35rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, .06);
}
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9rem; }
.chat {
  background: white;
  border-left: 6px solid #2563eb;
  border-radius: 14px;
  padding: .9rem 1.05rem;
  margin: .6rem 0;
  font-size: 1.16rem;
}
.chat.user { border-left-color: #64748b; }
.label { font-size: .85rem; color: #64748b; font-weight: 700; margin-bottom: .25rem; }
ul { margin-top: .9rem; }
li { margin: .35rem 0; }
code { color: #0f172a; }
</style>

<div class="kicker">社内LT / AI活用</div>

# AIに答えさせる前に、質問させる

## Grill Me という使い方

<div class="small mt-10">mattpocock/skills の <code>grill-me</code> を題材にした試作版</div>

---
layout: center
---

# 今日の話

<div class="grid3 mt-10">
  <div class="box"><strong>1</strong><br>何が問題か</div>
  <div class="box"><strong>2</strong><br>Grill Meの型</div>
  <div class="box"><strong>3</strong><br>実際のQ&A例</div>
</div>

---
layout: default
---

# よくあるAI利用の失敗

<div class="grid2 mt-8">
<div class="box">
<h2>人間</h2>
「この案をいい感じに設計して」
</div>
<div class="box">
<h2>AI</h2>
前提を補完して、もっともらしい計画を出す
</div>
</div>

<div class="note mt-8">
問題は、AIの回答品質だけではなく、<strong>未決定の分岐が見えないまま進む</strong>こと。
</div>

---
layout: default
---

# Grill Meとは

<div class="box mt-8">
<code>grill-me</code> は、ゆるいアイデアを、コミット可能な考えに近づけるための<strong>しつこいインタビュー</strong>。
</div>

<div class="mt-8">
- ユーザーが明示的に <code>/grill-me</code> で起動する
- 新しい会話で始める
- ファイルを書かない、状態を残さない
- いきなり計画を作らず、まず質問する
</div>

<div class="small mt-8">Source: mattpocock/skills — <code>skills/productivity/grill-me/SKILL.md</code>, <code>docs/productivity/grill-me.md</code></div>

---
layout: center
---

# 方式のキモ

```txt
Round 1: いま聞ける質問をまとめて聞く
   ↓
User: まとめて答える / 分からないと言う / scopeを直す
   ↓
Round 2: 前の回答で初めて聞ける質問を聞く
   ↓
Frontier が空になるまで繰り返す
```

<div class="note mt-8">
1問ずつ延々と聞くのではなく、<strong>前提が揃った質問群をラウンドで出す</strong>。
</div>

---
layout: default
---

# Q&A例：開始

<div class="chat user">
<div class="label">User</div>
社内向けに、Azure Functionsで簡単なAPIを作りたい。
</div>

<div class="chat">
<div class="label">Grill Me / Round 1</div>
まず、まだ前提が不足しています。現時点で答えられる範囲でまとめて確認します。<br><br>
1. 誰が使うAPIですか。社内利用者、他システム、外部顧客のどれですか。<br>
2. 認証は Entra ID、APIキー、なし、のどれを想定していますか。<br>
3. 同期APIですか。長時間処理やバッチ実行を含みますか。<br>
4. Private Endpoint や社内ネットワーク閉域化は必要ですか。<br>
5. 今回の成功条件は、PoC、社内本番、顧客提出用設計のどれですか。
</div>

---
layout: default
---

# Q&A例：回答

<div class="chat user">
<div class="label">User</div>
社内システムから呼ぶAPIです。認証はEntra IDにしたいです。<br>
長時間処理はなく、1リクエスト数秒程度です。<br>
閉域化は必要です。今回は社内本番を見据えた設計案にしたいです。
</div>

<div class="note mt-8">
ここで初めて、ネットワーク、認証、運用に関する次の分岐を聞けるようになる。
</div>

---
layout: default
---

# Q&A例：次のラウンド

<div class="chat">
<div class="label">Grill Me / Round 2</div>
前提が少し固まりました。次は実装方式ではなく、運用上の判断に必要な分岐を確認します。<br><br>
1. 呼び出し元は同一テナントのアプリですか。別テナントや人間の直接利用はありますか。<br>
2. Functions は Premium 前提ですか。Consumptionでも許容できますか。<br>
3. 閉域化は「受信のみPrivate Endpoint」ですか。送信もFW経由にしますか。<br>
4. 障害時は停止許容ですか。DRリージョンへの切替が必要ですか。<br>
5. 監視は App Insights の標準ログで十分ですか。業務ログの保管要件がありますか。
</div>

---
layout: default
---

# Q&A例：人間が主導権を持つ

<div class="chat user">
<div class="label">User</div>
DRは今回は不要です。送信FW経由も今は過剰です。<br>
ただし、Private Endpoint、Entra ID、App Insights は必要です。<br>
Consumptionではなく Premium に寄せたいです。
</div>

<div class="box mt-8">
Grill Me は、AIに決めさせる場ではない。<br>
<strong>人間がスコープを切り、過剰な案を止める</strong>ための会話。
</div>

---
layout: default
---

# Q&A例：終了条件

<div class="chat">
<div class="label">Grill Me / Final Check</div>
現時点の理解は次のとおりです。<br><br>
- 社内システム向けの同期API<br>
- Azure Functions Premium を前提<br>
- Entra ID による認証<br>
- 受信は Private Endpoint で閉域化<br>
- App Insights で標準監視<br>
- DR、送信FW経由、長時間処理は今回の範囲外<br><br>
この理解で設計案に進んでよいですか。
</div>

<div class="note mt-6">
ポイントは、<strong>理解確認で止まる</strong>こと。いきなり作業に入らない。
</div>

---
layout: default
---

# 使いどころ

<div class="grid2 mt-8">
<div class="box">
<h2>向いている</h2>
- まだ曖昧な設計案<br>
- LTや資料の構成<br>
- 仕様化前の機能案<br>
- キャリアや方針の整理
</div>
<div class="box">
<h2>向いていない</h2>
- もう要件が明確な作業<br>
- 見た目を触らないと決められないUI<br>
- 実測しないと判断できない性能<br>
- 長すぎる巨大テーマ
</div>
</div>

---
layout: default
---

# 使うときのコツ

<div class="box mt-8">
<ul>
<li><strong>新しい会話</strong>で始める</li>
<li>最初から完璧に説明しようとしない</li>
<li>分からないことは「分からない」と答える</li>
<li>スコープが広がったら、人間側で切る</li>
<li>質問がUI感覚や実測に寄ったら、試作品や検証に切り替える</li>
</ul>
</div>

---
layout: center
---

# まとめ

<div class="grid3 mt-10">
  <div class="box">AIの前提補完を<br><strong>放置しない</strong></div>
  <div class="box">未決定の分岐を<br><strong>質問で露出</strong></div>
  <div class="box">作業前に<br><strong>理解を確認</strong></div>
</div>

<div class="note mt-10">
Grill Me は、AIに答えを急がせないための、かなり実務的な型。
</div>
