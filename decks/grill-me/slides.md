---
theme: default
title: 公開されているAgent Skillsを使ってみる
info: |
  社内LT向け Agent Skills / grill-me 紹介スライド。
  Source: https://github.com/mattpocock/skills
fonts:
  sans: Noto Sans JP, BIZ UDPGothic, Meiryo, ui-sans-serif, system-ui, sans-serif
transition: fade
mdc: true
---

<div class="cover">
  <div class="eyebrow">社内LT / Agent Skills</div>
  <h1>公開されている<br>Agent Skillsを使ってみる</h1>
  <p class="lead">grill-me の紹介</p>
  <p class="sub">参照: mattpocock/skills</p>
</div>

---

<div class="section-label">今日の話</div>

# Agent Skillsは、自作だけではない

<div class="statement">便利な使い方を毎回プロンプトで説明する代わりに、<br>Skillとして切り出して使う。</div>

<div class="two mt-10">
  <div>
    <h2>よくある進め方</h2>
    <ul>
      <li>自分用の指示を作る</li>
      <li>案件用に少しずつ足す</li>
      <li>気づくと長くなる</li>
    </ul>
  </div>
  <div>
    <h2>今回見るもの</h2>
    <ul>
      <li>公開されているSkillsを使う</li>
      <li>まずはそのまま試す</li>
      <li>必要なら後で調整する</li>
    </ul>
  </div>
</div>

---

<div class="section-label">公開Skills</div>

# mattpocock/skills

<div class="big-quote">Agentにやらせたい作業を、<br>小さなSkillとして整理しているリポジトリ。</div>

<div class="list-large mt-8">
  <p><strong>ライセンス:</strong> MIT。社内で試しやすい。</p>
  <p><strong>見方:</strong> プロンプト例というより、Agentの作業手順集として見る。</p>
  <p><strong>今回:</strong> その中から <code>/grill-me</code> を扱う。</p>
</div>

---

<div class="section-label">今回扱うもの</div>

# grill-me と grill-with-docs

<div class="two mt-10">
  <div>
    <h2><code>/grill-me</code></h2>
    <ul>
      <li>リポジトリ不要</li>
      <li>ファイルを書かない</li>
      <li>粗い案を質問で詰める</li>
    </ul>
  </div>
  <div>
    <h2><code>grill-with-docs</code></h2>
    <ul>
      <li>コードベース前提</li>
      <li>既存資料や設計と合わせる</li>
      <li>より開発寄りの使い方</li>
    </ul>
  </div>
</div>

<p class="note mt-9">LTでは、まず使いやすい <code>/grill-me</code> に絞る。</p>

---

<div class="section-label">grill-me</div>

# いきなり作らせないためのSkill

<div class="big-quote">粗い依頼を受けて、まず質問する。<br>設計案や仕様書を作るのは、その後。</div>

<div class="two mt-9">
  <div>
    <h2>向いている場面</h2>
    <ul>
      <li>やりたいことはある</li>
      <li>まだ要件が荒い</li>
      <li>設計・資料化の前に整理したい</li>
    </ul>
  </div>
  <div>
    <h2>使い方</h2>
    <ul>
      <li>新しい会話で <code>/grill-me</code></li>
      <li>最初は雑に説明する</li>
      <li>質問に答えて範囲を決める</li>
    </ul>
  </div>
</div>

---

<div class="section-label">使いどころ</div>

# 設計Agentに渡す前の整理に使う

<div class="flow mt-10">
  <div>粗い相談<br><span>やりたいことだけある</span></div>
  <div class="arrow">→</div>
  <div><code>/grill-me</code><br><span>未決事項を質問で出す</span></div>
  <div class="arrow">→</div>
  <div>設計依頼<br><span>決まった前提を渡す</span></div>
</div>

<div class="insight mt-10">
  いきなり方式設計Agentに渡すより、<br>先に「決めるべきこと」を洗い出せる。
</div>

---

<div class="section-label">会話例 1</div>

# まずは荒い依頼を投げる

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

<div class="section-label">会話例 2</div>

# 回答すると、次の質問が変わる

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

<div class="section-label">会話例 3</div>

# 決まったことだけを次に渡す

<div class="chat user mt-5">
  <div class="speaker">User</div>
  <p>Premium前提でよいです。送信Firewall経由とDRは今回は範囲外。受信の閉域化、Entra ID認証、App Insights監視までを対象にします。</p>
</div>

<div class="chat assistant mt-5">
  <div class="speaker">整理結果</div>
  <ul>
    <li>社内システム向けの同期API</li>
    <li>Azure Functions Premium</li>
    <li>Entra IDで認証</li>
    <li>受信はPrivate Endpointで閉域化</li>
    <li>App Insightsで標準監視</li>
    <li>DRと送信Firewall経由は今回の範囲外</li>
  </ul>
</div>

---

<div class="section-label">便利なところ</div>

# 使ってみてよいところ

<div class="list-large mt-8">
  <p><strong>前提漏れが見える:</strong> いきなり成果物を作る前に、未決事項が出てくる。</p>
  <p><strong>範囲外と言いやすい:</strong> 「今回は不要」「後で決める」と返せる。</p>
  <p><strong>相談前の整理に使える:</strong> 上司や有識者に聞く前に、論点を減らせる。</p>
</div>

---

<div class="section-label">Demo</div>

# ここからデモに移ります

<div class="statement">実際に <code>/grill-me</code> を使って、<br>粗い依頼から質問がどう出るかを見ます。</div>

<div class="two mt-10">
  <div>
    <h2>見るところ</h2>
    <ul>
      <li>最初の質問の出方</li>
      <li>回答後に質問が変わるか</li>
      <li>範囲外をどう扱えるか</li>
    </ul>
  </div>
  <div>
    <h2>見なくてよいところ</h2>
    <ul>
      <li>きれいな成果物作成</li>
      <li>コード生成</li>
      <li>長い計画書の生成</li>
    </ul>
  </div>
</div>

---

<div class="section-label">まとめ</div>

# 公開されている型から始める

<div class="list-large mt-8">
  <p><strong>1.</strong> Agent Skillsは、自作だけでなく公開Skillsも使える。</p>
  <p><strong>2.</strong> <code>/grill-me</code> は、粗い案を質問で詰めるSkill。</p>
  <p><strong>3.</strong> 設計や資料作成の前に、未決事項を減らせる。</p>
</div>

<div class="closing mt-6">
  <p>まずは公開Skillsをそのまま使ってみる。</p>
</div>
