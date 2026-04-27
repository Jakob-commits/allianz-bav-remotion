import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../styles/allianz-tokens";

export const Scene3Hebel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const card1Scale = spring({
    frame: Math.max(0, frame - 30),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const card2Scale = spring({
    frame: Math.max(0, frame - 80),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const card3Scale = spring({
    frame: Math.max(0, frame - 130),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const resultScale = spring({
    frame: Math.max(0, frame - 200),
    fps,
    damping: 10,
    stiffness: 120,
  });

  const counterValue = Math.round(
    interpolate(frame, [200, 260], [0, 115], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const bannerOpacity = interpolate(frame, [280, 310], [0, 1], {
    extrapolateRight: "clamp",
  });
  const bannerY =
    spring({
      frame: Math.max(0, frame - 280),
      fps,
      damping: 14,
      stiffness: 100,
    }) *
      30 -
    30;

  const cardStyle = (scale: number, color: string) => ({
    backgroundColor: colors.container,
    borderRadius: 16,
    padding: "24px 32px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    transform: `scale(${scale})`,
    display: "flex" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    borderLeft: `5px solid ${color}`,
    marginBottom: 16,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.hintergrund,
        padding: 60,
        fontFamily: fonts.primary,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          fontSize: 48,
          fontWeight: 700,
          color: colors.text,
          textAlign: "center",
          marginTop: 100,
          marginBottom: 60,
        }}
      >
        So funktioniert der Hebel
        <br />
        Ihrer Betriebsrente:
      </div>

      <div style={cardStyle(card1Scale, colors.allianzBlau)}>
        <div>
          <div style={{ fontSize: 24, color: colors.subtext }}>
            Ihr Einsatz (Brutto)
          </div>
        </div>
        <div
          style={{ fontSize: 40, fontWeight: 700, color: colors.allianzBlau }}
        >
          100 €
        </div>
      </div>

      <div style={cardStyle(card2Scale, colors.gruen)}>
        <div>
          <div style={{ fontSize: 24, color: colors.subtext }}>
            Ihr Chef gibt dazu
          </div>
          <div style={{ fontSize: 20, color: colors.gruen }}>15 % Zuschuss</div>
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, color: colors.gruen }}>
          + 15 €
        </div>
      </div>

      <div style={cardStyle(card3Scale, colors.gruen)}>
        <div>
          <div style={{ fontSize: 24, color: colors.subtext }}>
            Der Staat schenkt Ihnen
          </div>
          <div style={{ fontSize: 20, color: colors.gruen }}>
            Steuer- & Sozialersparnis
          </div>
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, color: colors.gruen }}>
          − 43 €
        </div>
      </div>

      <div
        style={{
          backgroundColor: colors.gruen,
          borderRadius: 16,
          padding: "28px 32px",
          transform: `scale(${resultScale})`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "white" }}>
          Gesamtsparbetrag
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, color: "white" }}>
          {counterValue} €
        </div>
      </div>

      <div
        style={{
          opacity: bannerOpacity,
          transform: `translateY(${bannerY}px)`,
          backgroundColor: colors.highlightBlau,
          borderRadius: 12,
          padding: "20px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 24, color: "white" }}>
          Ihr echter Aufwand netto:
        </div>
        <div style={{ fontSize: 44, fontWeight: 700, color: "white" }}>
          nur 57 €
        </div>
      </div>
    </AbsoluteFill>
  );
};
