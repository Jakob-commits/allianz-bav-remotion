# Allianz bAV Erklärvideo — Remotion

7 animierte Szenen (9:16 WhatsApp-Format) für Allianz Betriebsrente — gebaut mit [Remotion](https://www.remotion.dev/).

## Schnellstart

```bash
git clone https://github.com/Jakob-commits/allianz-bav-remotion.git
cd allianz-bav-remotion
npm install
npm start
```

Remotion Studio öffnet sich auf `http://localhost:3000`. Dort kannst du die 7 Szenen einzeln ansehen und Anpassungen direkt im Browser preview-en.

## Setup mit Claude Code (empfohlen)

1. Repo klonen (siehe oben).
2. In den Ordner `cd allianz-bav-remotion`.
3. `claude` starten.
4. Claude Code sagen: **"Installiere die Dependencies und starte Remotion Studio."**

Claude Code übernimmt dann `npm install` und `npm start`. Für Anpassungen einfach beschreiben, was du ändern willst (z. B. *"Mach den Text in Szene 1 größer"* oder *"Andere Farbe für den Hintergrund"*) — Claude bearbeitet die passende `Scene*.tsx` direkt.

## Voraussetzungen

- **Node.js 18+** (LTS empfohlen)
- macOS, Linux oder Windows
- Für Video-Rendering: FFmpeg (wird von Remotion automatisch nachinstalliert)

## Video rendern

Einzelne Szene als MP4:

```bash
npx remotion render src/index.ts Hook out/scene1-hook.mp4
npx remotion render src/index.ts BaeckereiPrinzip out/scene2.mp4
npx remotion render src/index.ts HebelEffekt out/scene3.mp4
npx remotion render src/index.ts SteuerSchaukel out/scene4.mp4
npx remotion render src/index.ts Paketauswahl out/scene5.mp4
npx remotion render src/index.ts VerbranntesGeld out/scene6.mp4
npx remotion render src/index.ts Abschluss out/scene7.mp4
```

## Die 7 Szenen

| Composition-ID    | Szene                       | Dauer   |
|-------------------|-----------------------------|---------|
| `Hook`            | Hook — Verlustangst         | 8 Sek.  |
| `BaeckereiPrinzip`| Bäckerei-Metapher           | 10 Sek. |
| `HebelEffekt`     | Hebel der Betriebsrente     | 12 Sek. |
| `SteuerSchaukel`  | Steuer-Vorteil-Waage        | 10 Sek. |
| `Paketauswahl`    | 3 Pakete mit Nudging        | 10 Sek. |
| `VerbranntesGeld` | FOMO — 28.000 € Verlust     | 10 Sek. |
| `Abschluss`       | CTA WhatsApp                | 8 Sek.  |

Gesamt: ca. **68 Sekunden**, Format **1080×1920** (9:16), **30 fps**.

## Allianz Corporate Design (Farben)

Alle Farbwerte zentral in [`src/styles/allianz-tokens.ts`](src/styles/allianz-tokens.ts):

- Allianz Blau: `#0072C0`
- Highlight Blau: `#199DD7`
- Grün (Erfolg): `#64A70B`
- Rot (Warnung): `#E1343E`
- Hintergrund: `#F5F6F6`
- Text: `#414141`

## Projektstruktur

```
src/
├── index.ts              # Remotion Entry Point
├── Root.tsx              # Composition-Registrierung
├── index.css             # Globale Styles + Font-Import
├── styles/
│   └── allianz-tokens.ts # CD-Farben & Fonts
├── components/
│   ├── AllianzBadge.tsx  # Wiederverwendbares Allianz-Badge
│   └── Card.tsx          # Wiederverwendbare Karten-Komponente
└── scenes/
    ├── Scene1-Hook.tsx
    ├── Scene2-Baeckerei.tsx
    ├── Scene3-Hebel.tsx
    ├── Scene4-Steuer.tsx
    ├── Scene5-Pakete.tsx
    ├── Scene6-FOMO.tsx
    └── Scene7-CTA.tsx
```

Details zu Server-Deployment und Anpassungstipps stehen in [`ANLEITUNG.md`](ANLEITUNG.md).
