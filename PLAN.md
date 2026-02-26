# McKinsey Theme Redesign Plan

## Brand Colors
| Token | Hex | Usage |
|---|---|---|
| Electric Blue 500 | `#2251FF` | Primary accent (buttons, links, highlights) |
| Electric Blue 900 | `#061F79` | Deep accent (flashcard backs, contrast elements) |
| Deep Blue 900 | `#051C2C` | Text, dark backgrounds, headings |
| White | `#FFFFFF` | Default background |

## Step 1: Update CSS `:root` Variables (style.css lines 6-34)

These variables propagate everywhere via `var()`, so this single change covers the majority of the UI.

| Variable | Current (Red) | New (McKinsey) |
|---|---|---|
| `--bg` | `#F5F3F0` (warm beige) | `#FFFFFF` (white) |
| `--surface` | `#FFFFFF` | `#FFFFFF` (no change) |
| `--surface-2` | `#F0EDEA` (warm gray) | `#F2F4F8` (cool blue-gray) |
| `--surface-3` | `#E5E0DB` | `#E4E8EF` |
| `--border` | `#D4CEC6` | `#CDD3DC` |
| `--border-light` | `#DDD8D2` | `#DEE2EA` |
| `--text` | `#1A1410` (warm black) | `#051C2C` (Deep Blue 900) |
| `--text-dim` | `#5C5248` | `#3D4F5F` |
| `--text-muted` | `#9A8E82` | `#8C9BAA` |
| `--accent` | `#B7472A` | `#2251FF` (Electric Blue 500) |
| `--accent-light` | `#D4532F` | `#4A73FF` |
| `--accent-pale` | `#FDEAE6` | `#E8EEFF` |
| `--accent-glow` | `rgba(183,71,42,.15)` | `rgba(34,81,255,.15)` |
| `--blue` | `#1565C0` | `#061F79` (Electric Blue 900) |
| `--blue-glow` | `rgba(21,101,192,.08)` | `rgba(6,31,121,.08)` |
| `--shadow` | `rgba(60,30,20,.08)` | `rgba(5,28,44,.08)` |
| `--shadow-lg` | `rgba(60,30,20,.12)` | `rgba(5,28,44,.12)` |

Keep `--green`, `--red`, `--orange`, `--teal` unchanged (semantic colors for correct/wrong/badges).

## Step 2: Update Hardcoded Colors in CSS (style.css)

These are colors baked directly into rules, not using `var()`:

| Element | Current | New | Lines |
|---|---|---|---|
| Background blobs | `#D4532F`, `#E8845A`, `#F0A882` | `#2251FF`, `#4A73FF`, `#8CA8FF` | 58-60 |
| Logo icon gradient | `#B7472A, #D4532F` | `#051C2C, #2251FF` | 71 |
| Learn icon gradient | `#B7472A, #E05533` | `#2251FF, #4A73FF` | 119 |
| Speed icon gradient | `#C62828, #EF5350` | `#051C2C, #2251FF` | 122 |
| Shortcut key badge bg/border | `#FDE8E4` / `#F5C4BB` | `#E8EEFF` / `#B3C4FF` | 149 |
| Status mastered badge bg | `#FDEAE6` | `#E8EEFF` | 153 |
| Reset button border | `rgba(198,40,40,.3)` | `rgba(34,81,255,.3)` | 158 |
| Mini progress fill gradient | `var(--accent), #E8845A` | `var(--accent), #4A73FF` | 165 |
| Flashcard back gradient | `#8B2F1A, #B7472A` | `#061F79, #2251FF` | 171 |
| Flashcard back border | `#8B2F1A` | `#061F79` | 171 |
| Vis border | `#F5C4BB` | `#B3C4FF` | 187 |
| Vis title bar gradient | `#B7472A, #D4532F` | `#051C2C, #2251FF` | 188 |
| Quiz progress fill | `var(--accent), #E8845A` | `var(--accent), #4A73FF` | 415 |
| Primary button gradient | `#B7472A, #D4532F` | `#2251FF, #4A73FF` | 486 |
| Keyframe `colorCycle` | reds/blues | blues spectrum | 225-228 |
| Keyframe `boldItalic` | `#C62828` | `#2251FF` | 231 |
| Keyframe `borderHighlight` | `#D4532F` + glow | `#2251FF` + glow | 235-240 |
| Keyframe `shapeToggle` | `#D4532F` | `#2251FF` | 364 |
| Keyframe `shapeToText` | `#FDEAE6`, `#D4532F` | `#E8EEFF`, `#2251FF` | 368 |

## Step 3: Update Hardcoded Colors in app.js

Bulk `replace_all` operations for visual generator inline styles:

| Current | New | Purpose |
|---|---|---|
| `#B7472A` | `#2251FF` | Primary accent in visuals |
| `#D4532F` | `#4A73FF` | Accent-light shape fills |
| `#8B2F1A` | `#051C2C` | Dark accent borders |
| `#FDEAE6` | `#E8EEFF` | Pale accent backgrounds |
| `#F5C4BB` | `#B3C4FF` | Light accent borders |
| `#FFF5F3` | `#F5F7FF` | Very pale accent bg |
| `#E8845A` | `#4A73FF` | SVG gradient stop 2 |
| `#EF9A9A` | `#B3C4FF` | Light accent borders |
| `#6B4A3A` | `#3D4F5F` | Muted text in visuals |
| `#FFCDD2` | `#C4D0FF` | Pink → pale blue border |
| `#FFF5F5` | `#F5F7FF` | Pale pink → pale blue bg |

**Keep unchanged**: `#1565C0` (blue shapes in visuals), `#C62828` (red for wrong/error states), `#E65100` (orange must-have badges), `#7B1FA2` (purple shapes), `#FFF9C4`/`#FFE082`/`#F57F17` (yellow sticky note), `#333`/`#888`/`#999` (neutral grays).

## Step 4: Update Comment Header

Change "PowerPoint-Inspired Red Theme" → "McKinsey-Inspired Blue Theme" in style.css line 3.

## Step 5: Verify & Push

- Grep for any remaining red-theme hex codes
- Commit and push

## Summary of Files Changed
- `style.css` — :root variables, ~20 hardcoded color rules, ~8 keyframe animations
- `app.js` — ~11 bulk color replacements in visual generators + SVG gradient stops
