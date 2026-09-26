---
theme: default
title: Agent Skills の使い方
info: |
  社内LT向け Agent Skills / Grill Me 紹介スライド。
  Source: https://github.com/mattpocock/skills
fonts:
  sans: Noto Sans JP, BIZ UDPGothic, Meiryo, ui-sans-serif, system-ui, sans-serif
transition: fade
mdc: true
---

<div class="cover">
  <div class="eyebrow">社内LT / Agent Skills</div>
  <h1>Agent Skills の使い方</h1>
  <p class="lead">自作する前に、<br>公開されている型を使う。</p>
  <p class="sub">題材: mattpocock/skills の <code>/grill-me</code></p>
</div>

---

<div class="section-label">入り口</div>

# Skills、自分で作り込んでませんか？

<div class="statement">便利そうだから、自社用にルールを足す。<br>でも、だんだん重くなる。</div>

<div class="two mt-10">
  <div>
    <h2>起きがちなこと</h2>
    <ul>
      <li>発火条件が曖昧になる</li>
      <li>指示が長くなり、挙動が読みにくい</li>
      <li>作った本人しか直せない</li>
    </ul>
  </div>
  <div>
    <h2>今回の話</h2>
    <ul>
      <li>まず公開Skillsを見る</li>
      <li>良い型をそのまま試す</li>
      <li>足す前に、使い方を覚える</li>
    </ul>
  </div>
</div>

---

<div class="section-label">公開されている型</div>

# MITで公開されているSkillsがある

<div class="big-quote">mattpocock/skills は、Agentにさせたい作業を<br>小さなSkillとして整理したリポジトリ。</div>

<div class="list-large mt-8">
  <p><strong>ライセンス:</strong> MIT。社内検証や改変の入口として扱いやすい。</p>
  <p><strong>見方:</strong> 「便利プロンプト集」ではなく、Agentの作業手順集として見る。</p>
  <p><strong>今回:</strong> その中から <code>/grill-me</code> を試す。</p>
</div>

---

<div class="section-label">Grill Me</div>

# /grill-me とは

<div class="big-quote">いきなり作らせず、先に質問させるSkill。</div>

<div class="two mt-10">
  <div>
    <h2>使う場面</h2>
    <ul>
      <li>やりたいことはある</li>
      <li>まだ要件が粗い</li>
      <li>設計・資料・方針に進む前</li>
    </ul>
  </div>
  <div>
    <h2>やらないこと</h2>
    <ul>
      <li>勝手に起動しない</li>
      <li>ファイルを書かない</li>
      <li>すぐ計画を出さない</li>
    </ul>
  </div>
</div>

<p class="note mt-8">雑に言うと、「設計レビューの前に、AIに壁打ち相手をさせる」使い方。</p>

---

<div class="section-label">普通の依頼との違い</div>

# 先に答えを出さない

<div class="flow mt-10">
  <div>普通の依頼<br><span>依頼する</span></div>
  <div class="arrow">→</div>
  <div>Agent<br><span>前提を補って答える</span></div>
  <div class="arrow">→</div>
  <div>成果物<br><span>それっぽいが危うい</span></div>
</div>

<div class="flow mt-12">
  <div>/grill-me<br><span>粗い案を出す</span></div>
  <div class="arrow">→</div>
  <div>Agent<br><span>決めるべきことを聞く</span></div>
  <div class="arrow">→</div>
  <div>人間<br><span>範囲を切って決める</span></div>
</div>

---

<div class="section-label">仕組み</div>

# 質問は、Roundで来る

<div class="protocol mt-8">
  <div>
    <span>1</span>
    <h2>今聞けることを聞く</h2>
    <p>前提がなくても聞ける質問だけをまとめて出す。</p>
  </div>
  <div>
    <span>2</span>
    <h2>人間が答える</h2>
    <p>分からない、範囲外、やりすぎ、を普通に返す。</p>
  </div>
  <div>
    <span>3</span>
    <h2>次の分岐に進む</h2>
    <p>回答後に初めて聞ける質問だけを次に出す。</p>
  </div>
</div>

<p class="note mt-9">公式ドキュメントでは、この質問群を <strong>frontier</strong> と説明している。要するに「今なら聞ける未決事項」。</p>

---

<div class="section-label">例</div>

# 例: Azure Functions のAPI設計

<div class="chat user mt-5">
  <div class="speaker">User</div>
  <p>社内向けに、Azure Functionsで簡単なAPIを作りたい。</p>
</div>

<div class="chat assistant mt-5">
  <div class="speaker">/grill-me - Round 1</div>
  <ol>
    <li>誰が呼び出すAPIですか。人間、社内システム、外部顧客のどれですか。</li>
    <li>認証は Entra ID、APIキー、なし、のどれを想定していますか。</li>
    <li>長時間処理やバッチ起動を含みますか。</li>
    <li>Private Endpoint や閉域化は必要ですか。</li>
  </ol>
</div>

---

<div class="section-label">例</div>

# 人間が範囲を決める

<div class="chat user mt-6">
  <div class="speaker">User</div>
  <p>社内システムから呼ぶAPIです。認証はEntra ID。長時間処理はなし。閉域化は必要です。今回は社内本番を見据えた設計案にしたいです。</p>
</div>

<div class="chat assistant mt-5">
  <div class="speaker">/grill-me - Round 2</div>
  <ol>
    <li>Functions は Premium 前提ですか。Consumptionも許容しますか。</li>
    <li>閉域化は受信だけですか。送信もFirewall経由にしますか。</li>
    <li>障害時は停止許容ですか。DR切替が必要ですか。</li>
  </ol>
</div>

---

<div class="section-label">便利なところ</div>

# 何がうれしいか

<div class="list-large mt-8">
  <p><strong>前提漏れが見える:</strong> いきなり設計案を作るより、未決事項を先に並べられる。</p>
  <p><strong>過剰設計を止めやすい:</strong> 「今回は不要」「範囲外」と返せる。</p>
  <p><strong>相談前の整理に使える:</strong> 人に聞く前に、聞くべき論点を洗い出せる。</p>
</div>

---

<div class="section-label">注意点</div>

# 何でも質問で解けるわけではない

<div class="two mt-9">
  <div>
    <h2>向いている</h2>
    <ul>
      <li>設計方針</li>
      <li>LTや資料の構成</li>
      <li>仕様化前のアイデア</li>
    </ul>
  </div>
  <div>
    <h2>向いていない</h2>
    <ul>
      <li>見ないと分からないUI</li>
      <li>測らないと分からない性能</li>
      <li>大きすぎるテーマ</li>
    </ul>
  </div>
</div>

<div class="rule mt-10">分からない時は、無理に答えない。<br>試作・検証に切り替える。</div>

---

<div class="section-label">まとめ</div>

# Agent Skills は、作る前に借りる

<div class="list-large mt-8">
  <p><strong>1.</strong> Skillsを自作する前に、公開されている型を読む。</p>
  <p><strong>2.</strong> <code>/grill-me</code> は、粗い案を質問で絞るSkill。</p>
  <p><strong>3.</strong> 答えを急がせず、人間が決めてから次に進む。</p>
</div>

<div class="closing mt-6">
  <p>まずは、よくできたSkillをそのまま使ってみる。</p>
</div>
