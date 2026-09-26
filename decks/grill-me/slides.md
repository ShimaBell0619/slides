---
theme: default
title: Grill Me - AIに答えさせる前に、質問させる
info: |
  社内LT向け Grill Me 紹介スライド。
  Source: https://github.com/mattpocock/skills
fonts:
  sans: Inter, Noto Sans JP, ui-sans-serif, system-ui, sans-serif
transition: fade
mdc: true
---

<div class="cover">
  <div class="eyebrow">AI Workflow / 社内LT</div>
  <h1>Grill Me</h1>
  <p class="lead">AIに答えさせる前に、<br>質問させる。</p>
  <p class="sub">mattpocock/skills の <code>/grill-me</code> を題材にした試作版</p>
</div>

---

<div class="section-label">Problem</div>

# AIは、空白を埋めてしまう

<div class="statement">曖昧な依頼でも、AIはそれっぽい計画を返す。</div>

<div class="flow mt-10">
  <div>人間<br><span>「いい感じに設計して」</span></div>
  <div class="arrow">→</div>
  <div>AI<br><span>未確認の前提を補完</span></div>
  <div class="arrow">→</div>
  <div>計画<br><span>もっともらしいが危うい</span></div>
</div>

<p class="note mt-10">問題は「AIが間違えること」より、<strong>未決定の分岐が見えないまま進むこと</strong>。</p>

---

<div class="section-label">What</div>

# Grill Meとは

<div class="big-quote">A relentless interview to sharpen a plan or design.</div>

<div class="two mt-9">
  <div>
    <h2>やること</h2>
    <ul>
      <li>ゆるいアイデアを質問で削る</li>
      <li>未決定の分岐を表に出す</li>
      <li>最後に理解確認で止まる</li>
    </ul>
  </div>
  <div>
    <h2>やらないこと</h2>
    <ul>
      <li>勝手に起動しない</li>
      <li>ファイルを書かない</li>
      <li>いきなり計画を作らない</li>
    </ul>
  </div>
</div>

<p class="note mt-7">新しい会話で <code>/grill-me</code> を明示して始める。Plan mode で急いで計画化しない。</p>

---

<div class="section-label">Protocol</div>

# Q&Aの正確な型

<div class="protocol mt-7">
  <div>
    <span>1</span>
    <h2>Roundで聞く</h2>
    <p>今の前提だけで聞ける質問を、まとめて出す。</p>
  </div>
  <div>
    <span>2</span>
    <h2>人間が答える</h2>
    <p>分からない、範囲外、過剰、を明示してよい。</p>
  </div>
  <div>
    <span>3</span>
    <h2>Frontierを進める</h2>
    <p>前の回答で初めて聞ける質問だけを次に出す。</p>
  </div>
</div>

<p class="note mt-8"><strong>Frontier</strong> は「前提が解けたので、今なら聞ける質問群」。空になったら終了。</p>

---

<div class="section-label">Example / Round 1</div>

# 例: まだ曖昧な依頼

<div class="chat user mt-5">
  <div class="speaker">User</div>
  <p>社内向けに、Azure Functionsで簡単なAPIを作りたい。</p>
</div>

<div class="chat assistant mt-5">
  <div class="speaker">Grill Me - Round 1</div>
  <p>まず、現時点で答えられる範囲の前提を確認します。</p>
  <ol>
    <li>誰が呼び出すAPIですか。人間、社内システム、外部顧客のどれですか。</li>
    <li>認証は Entra ID、APIキー、なし、のどれを想定していますか。</li>
    <li>長時間処理やバッチ起動を含みますか。</li>
    <li>Private Endpoint や閉域化は必要ですか。</li>
  </ol>
</div>

---

<div class="section-label">Example / Answer</div>

# 回答で、分岐を閉じる

<div class="chat user mt-7">
  <div class="speaker">User</div>
  <p>社内システムから呼ぶAPIです。認証はEntra ID。長時間処理はなし。閉域化は必要です。今回は社内本番を見据えた設計案にしたいです。</p>
</div>

<div class="insight mt-10">
  ここで初めて、認証・ネットワーク・運用に関する次の質問が成立する。
</div>

---

<div class="section-label">Example / Round 2</div>

# 次のRoundは、前の回答に依存する

<div class="chat assistant mt-6">
  <div class="speaker">Grill Me - Round 2</div>
  <ol>
    <li>呼び出し元は同一テナントのアプリだけですか。</li>
    <li>Functions は Premium 前提ですか。Consumptionも許容しますか。</li>
    <li>閉域化は受信だけですか。送信もFirewall経由にしますか。</li>
    <li>障害時は停止許容ですか。DRリージョン切替が必要ですか。</li>
    <li>監視は App Insights 標準で十分ですか。業務ログ保管要件がありますか。</li>
  </ol>
</div>

<p class="note mt-8">Round 1で聞けなかった質問だけが出てくる。ここが単なるチェックリストとの違い。</p>

---

<div class="section-label">Example / Steering</div>

# 人間が主導権を持つ

<div class="chat user mt-7">
  <div class="speaker">User</div>
  <p>DRと送信Firewall経由は今回は範囲外です。Private Endpoint、Entra ID、App Insightsは必要。ConsumptionではなくPremiumに寄せたいです。</p>
</div>

<div class="rule mt-10">
  Grill Me は、AIに決めさせる型ではない。<br>
  <strong>人間がスコープを切り、過剰な案を止める</strong>ための型。
</div>

---

<div class="section-label">Example / End</div>

# 最後は、作業ではなく理解確認

<div class="chat assistant mt-5">
  <div class="speaker">Grill Me - Final Check</div>
  <p>現時点の理解は次のとおりです。</p>
  <ul>
    <li>社内システム向けの同期API</li>
    <li>Azure Functions Premiumを前提</li>
    <li>Entra IDで認証</li>
    <li>受信はPrivate Endpointで閉域化</li>
    <li>App Insightsで標準監視</li>
    <li>DR、送信Firewall経由、長時間処理は今回の範囲外</li>
  </ul>
</div>

<p class="note mt-6">この理解で設計案に進んでよいか確認してから、次の作業に渡す。</p>

---

<div class="section-label">Use Cases</div>

# 社内での使いどころ

<div class="list-large mt-8">
  <p><strong>設計前:</strong> 要件が曖昧な案を、実装可能な判断に近づける。</p>
  <p><strong>資料前:</strong> LTや説明資料の論点を、作る前に絞る。</p>
  <p><strong>相談前:</strong> 上司や有識者に聞くべき未決事項を洗い出す。</p>
</div>

<p class="note mt-10">逆に、UIの好みや性能限界のように「見ないと分からない」「測らないと分からない」ものは、質問ではなく試作・検証に切り替える。</p>

---

<div class="closing">
  <div class="section-label">Summary</div>
  <h1>AIに急いで答えさせない</h1>
  <p>質問で分岐を露出させ、<br>人間が決めてから、作業に進む。</p>
</div>
