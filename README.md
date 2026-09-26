# slides

Slidevで社内LT資料を管理するためのリポジトリです。

## ディレクトリ構成

```text
decks/
  grill-me/
    slides.md
    style.css
package.json
.github/workflows/export-pdf.yml
```

- `decks/<deck-name>/slides.md`: 各スライド本体
- `decks/<deck-name>/style.css`: デッキ単位の見た目
- `dist/<deck-name>.pdf`: PDF出力先

## 起動

```bash
npm install
npm run dev:grill-me
```

任意のデッキを直接開く場合:

```bash
npm run dev -- decks/grill-me/slides.md
```

## PDF出力

```bash
npm run export:grill-me
npm run export:all
```

GitHub Actionsでも、`decks/**` の変更時に全デッキをPDF化します。

## 新しいスライドを追加する場合

```text
decks/<new-deck>/slides.md
decks/<new-deck>/style.css
```

を追加します。PDF名は `dist/<new-deck>.pdf` になります。

## 参照

- mattpocock/skills: `skills/productivity/grill-me/SKILL.md`
- mattpocock/skills: `docs/productivity/grill-me.md`
