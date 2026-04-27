# Allianz bAV Erklärvideo - Remotion Setup

## Dateien auf den Server kopieren

### Schritt 1: Alte Dateien sichern
```bash
cp -r /root/my-video/src /root/my-video/src-backup
```

### Schritt 2: Ordner erstellen
```bash
mkdir -p /root/my-video/src/scenes
mkdir -p /root/my-video/src/components
mkdir -p /root/my-video/src/styles
```

### Schritt 3: Dateien hochladen
Alle Dateien aus dem `src/` Ordner auf den Server kopieren:
- Per SFTP (FileZilla, WinSCP)
- Oder per Hostinger File Manager
- Ziel: `/root/my-video/src/`

Die Struktur muss so aussehen:
```
/root/my-video/src/
├── Root.tsx
├── index.css
├── scenes/
│   ├── Scene1-Hook.tsx
│   ├── Scene2-Baeckerei.tsx
│   ├── Scene3-Hebel.tsx
│   ├── Scene4-Steuer.tsx
│   ├── Scene5-Pakete.tsx
│   ├── Scene6-FOMO.tsx
│   └── Scene7-CTA.tsx
├── components/
│   ├── AllianzBadge.tsx
│   └── Card.tsx
└── styles/
    └── allianz-tokens.ts
```

### Schritt 4: Root.tsx als Einstiegspunkt setzen
In `/root/my-video/src/index.ts` muss stehen:
```typescript
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";
registerRoot(RemotionRoot);
```

### Schritt 5: Remotion Studio starten
```bash
cd /root/my-video
npx remotion studio --port 3000 --host 0.0.0.0
```

### Schritt 6: Preview anschauen
Browser öffnen: `http://72.61.20.185:3000`
Links in der Sidebar die Szenen auswählen (Hook, BaeckereiPrinzip, etc.)

### Schritt 7: Video rendern
Einzelne Szene:
```bash
npx remotion render src/index.ts Hook out/scene1-hook.mp4
npx remotion render src/index.ts BaeckereiPrinzip out/scene2.mp4
# ... etc.
```

---

## Anpassungen mit Claude

Um Szenen anzupassen, einfach Claude (claude.ai) den Code zeigen und sagen was geändert werden soll:

**Beispiele:**
- "Mach den Text in Szene 1 größer" → Claude passt fontSize an
- "Die Animation soll langsamer laufen" → Claude ändert Frame-Ranges
- "Andere Farbe für den Hintergrund" → Claude ändert den Farbwert
- "Füge ein Logo hinzu" → Claude ergänzt ein Image-Element

**Tipp:** Immer die komplette Datei (z.B. Scene1-Hook.tsx) an Claude schicken und beschreiben was anders sein soll.

---

## Die 7 Szenen

| ID | Szene | Dauer |
|----|-------|-------|
| Hook | Der Hook - Verlustangst | 8 Sek. |
| BaeckereiPrinzip | Bäckerei-Metapher | 10 Sek. |
| HebelEffekt | Hebel der Betriebsrente | 12 Sek. |
| SteuerSchaukel | Steuer-Vorteil Waage | 10 Sek. |
| Paketauswahl | 3 Pakete mit Nudging | 10 Sek. |
| VerbranntesGeld | FOMO 28.000€ Verlust | 10 Sek. |
| Abschluss | CTA WhatsApp | 8 Sek. |

**Gesamt: ca. 68 Sekunden**

## Farben (Allianz CD)
- Allianz Blau: #0072C0
- Highlight Blau: #199DD7
- Grün (Erfolg): #64A70B
- Rot (Warnung): #E1343E
- Hintergrund: #F5F6F6
- Text: #414141
