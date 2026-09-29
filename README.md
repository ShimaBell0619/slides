# slides

社内LT資料をデッキごとに管理します。

## 公開されているAgent Skillsを使ってみる

副題：grill-meの紹介

- [PDF](decks/grill-me/artifacts/agent-skills-lt.pdf)
- [編集用PowerPoint](decks/grill-me/artifacts/agent-skills-lt.pptx)
- [生成コード](decks/grill-me/build.mjs)
- [Slidev原稿](decks/grill-me/slides.md)

Workで確認した11枚のスライドの生成コード・画像・出力ファイルを格納しています。
内容と配置の編集元は `build.mjs` です。`slides.md` は同じ文字・座標・表・画像から生成するため、直接編集しません。

```text
decks/grill-me/
  build.mjs           # Workで使用したPowerPointの生成コード
  export-slidev.mjs    # 同じ内容をSlidev原稿へ出力
  slides.md           # 生成済みSlidev原稿
  style.css           # Slidevの表示設定
  public/             # スライド内の画像
  artifacts/          # 確認済みPDF・編集用PowerPoint
```

## Slidevで表示する

```bash
npm install
npm run dev:grill-me
```

Noto Sans JPをインストールした環境を推奨します。未導入時はフォールバックフォントで表示されます。

## 配布ファイルを再生成する（Codex Work）

`build.mjs` は `@oai/artifact-tool` と検証ツールを備えたCodex Work環境で実行します。Node.jsだけの環境では実行できません。
Noto Sans JPとDejaVu Sans Mono、LibreOfficeも必要です。

```bash
npm run build:grill-me
```

Workの `CODEX_PRIMARY_RUNTIME_*` 環境変数を使用します。生成時の検証結果とプレビューは `.build/` に出力します。全ページの表示を確認したうえで、原稿・コード・画像・`artifacts/` をまとめてコミットしてください。

## Slidev版のPDFを出力する

```bash
npm run export:grill-me
npm run export:all
```

出力先は `dist/` です。GitHub ActionsでもPDFを出力して実行結果に添付します。`artifacts/` の確認済みファイルは上書きしません。
PowerPointは編集可能な文字と表を保持するため、Workの生成コードから出力します。

## 別のデッキを追加する

`decks/<deck-name>/slides.md` と、必要に応じて `style.css` を追加します。

## 参照元

- [公開Skills](https://github.com/mattpocock/skills)
- [grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md)
- [grill-with-docs](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)

リポジトリ画面の画像は2026年9月26日に取得したものです。
