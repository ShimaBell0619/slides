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
  <div class="eyebrow">社内LT</div>
  <h1>公開されている<br>Agent Skillsを使ってみる</h1>
  <p class="lead">grill-meの紹介</p>
</div>

---

<div class="section-label">02</div>

# Skills、自分で作り込んでいませんか？

<div class="two mt-10">
  <div>
    <h2>モデルが変わったら、指示も見直す</h2>
    <p>以前のモデル向けに足した手順が、<br>更新後も必要とは限らない。</p>
  </div>
  <div>
    <h2>作ったあとも、動作確認と修正が続く</h2>
    <p>指示を足すたびに、別のタスクでも使えるか確かめる。</p>
  </div>
</div>

<div class="rule mt-10">自作する前に、公開Skillsも探してみる。</div>

---

<div class="section-label">03</div>

# 公開されているSkillsも使える

<div class="statement">GitHubなどで公開されているSkillを<br>Claude Codeなどに追加して使える。</div>

<div class="list-large mt-8">
  <p>手順を一から書かずに、公開されているものを試せる。</p>
  <p>追加前に内容を確認し、手元のタスクで試す。</p>
  <p>公開例：Matt Pocock / mattpocock/skills（MITライセンス）</p>
</div>

---

<div class="section-label">04</div>

# grill-me

<div class="big-quote">質問に答えながら、曖昧な点や<br>抜けている条件を確認する。</div>

<div class="two mt-10">
  <div>
    <h2>文書にも残したいときは grill-with-docs</h2>
    <p>質問に加えて、用語や設計判断も文書に残す。</p>
  </div>
  <div>
    <h2>出典</h2>
    <p>Matt Pocock / mattpocock/skills（MITライセンス）</p>
  </div>
</div>

---

<div class="section-label">05</div>

# grill-me の追加と呼び出し

<div class="statement">例：Claude Code（コマンドはBash / zsh）</div>

<div class="chat user mt-6">
  <div class="speaker">1 作業フォルダーで追加する</div>
  <pre><code>npx skills@latest add mattpocock/skills \
  --skill grill-me grilling --agent claude-code</code></pre>
</div>

<div class="chat assistant mt-5">
  <div class="speaker">2 Claude Codeのチャットで呼び出す</div>
  <pre><code>/grill-me
Azure Functionsで社内向けAPIを作りたいです。
方式設計Agentに渡す前に、認証と公開範囲を詰めたいです。</code></pre>
</div>

<p class="note mt-5">Node.js / npm が必要です。grilling は grill-me が内部で使うSkillです。</p>

---

<div class="section-label">06</div>

# grill-me の会話例

<div class="statement">質問に推奨案も付くので、回答を考えやすい。</div>

<div class="two mt-7">
  <div class="chat assistant">
    <div class="speaker">AI</div>
    <p>誰がAPIを呼び出しますか？<br>推奨案：まずは社内システム専用に絞る。</p>
    <p>インターネットからのアクセスは必要ですか？<br>推奨案：社内ネットワークからの利用に限定する。</p>
  </div>
  <div class="chat user">
    <div class="speaker">自分</div>
    <p>社内バッチから呼びます。<br>社外からのアクセスは不要です。</p>
  </div>
</div>

<p class="note mt-7">説明用の会話例。実際の質問・推奨案・順序は変わります。</p>

---

<div class="section-label">07</div>

# 回答に合わせて、質問が続く

<div class="statement">「社内バッチから呼ぶ」と分かったので、次を確認。</div>

<div class="two mt-7">
  <div class="chat assistant">
    <div class="speaker">AI</div>
    <p>バッチはどこで動いていますか？<br>推奨案：既存の実行環境をそのまま使う。</p>
    <p>APIの認証方式に指定はありますか？<br>推奨案：既存のID基盤に合わせる。</p>
  </div>
  <div class="chat user">
    <div class="speaker">自分</div>
    <p>バッチはオンプレです。Azureへの閉域接続はあります。<br>認証はEntra IDのアプリ認証に統一します。</p>
  </div>
</div>

<p class="note mt-7">説明用の会話例（前ページの続き）。</p>

---

<div class="section-label">08</div>

# 質問で詰めた要件を、方式設計Agentへ

<div class="two mt-9">
  <div>
    <h2>回答をまとめて渡す</h2>
    <p>呼び出し元や接続・認証の条件を添えて、方式案の作成を依頼する。</p>
  </div>
  <div>
    <h2>未確認は未確認として残す</h2>
    <p>分からない条件は、未確認と明記する。</p>
  </div>
</div>

<div class="rule mt-10">この例では未確認：APIの処理内容、呼び出し量、可用性など。</div>

---

<div class="section-label">09</div>

# デモをやってみます

<div class="big-quote">今日の晩ご飯を grill-me で考える</div>

---

<div class="section-label">10</div>

# 質問が広がりすぎたとき

<div class="list-large mt-8">
  <p><strong>「今回は認証と公開範囲だけ決めたいです」</strong><br>何を決めたいか、範囲を指定する。</p>
  <p><strong>「性能はまだ分かりません。検証項目にしてください」</strong><br>分からないことまで、その場で決めなくてよい。</p>
</div>

<p class="note mt-8">推奨案も確認は必要。製品仕様の調査や性能の実測は、別に行います。</p>

---

<div class="section-label">11</div>

# 参考資料

<div class="list-large mt-8">
  <p><strong>公開Skillsの一覧と追加方法</strong><br>github.com/mattpocock/skills</p>
  <p><strong>質問に答えて、案や要件を詰める</strong><br>grill-me / SKILL.md</p>
  <p><strong>用語や設計判断も文書に残す</strong><br>grill-with-docs / SKILL.md</p>
</div>

<p class="note mt-8">公開元：Matt Pocock / mattpocock/skills（MIT）。公開内容は更新されることがあります。</p>
