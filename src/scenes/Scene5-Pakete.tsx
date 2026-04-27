import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../styles/allianz-tokens";

export const Scene5Pakete: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const card1Scale = spring({
    frame: Math.max(0, frame - 60),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const card2Scale = spring({
    frame: Math.max(0, frame - 75),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const card3Scale = spring({
    frame: Math.max(0, frame - 90),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const highlightScale = spring({
    frame: Math.max(0, frame - 120),
    fps,
    damping: 12,
    stiffness: 100,
  });
  const middleScale = 1 + highlightScale * 0.05;

  const outerOpacity = interpolate(frame, [120, 150], [1, 0.5], {
    extrapolateRight: "clamp",
  });

  const checkScale = spring({
    frame: Math.max(0, frame - 180),
    fps,
    damping: 8,
    stiffness: 160,
  });

  const socialOpacity = interpolate(frame, [180, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const pulse =
    frame > 240
      ? Math.sin((frame - 240) * 0.1) * 0.02 + 1
      : 1;

  const cardBase = {
    backgroundColor: colors.container,
    borderRadius: 20,
    padding: "32px 36px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    marginBottom: 24,
    width: "100%",
  };

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
          marginTop: 120,
          marginBottom: 20,
        }}
      >
        Was passt zu Ihnen?
      </div>

      <div
        style={{
          opacity: titleOpacity,
          fontSize: 28,
          color: colors.subtext,
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        Die meisten Ihrer Kollegen wählen die goldene Mitte:
      </div>

      <div
        style={{
          ...cardBase,
          transform: `scale(${card1Scale})`,
          opacity: outerOpacity,
        }}
      >
        <div style={{ fontSize: 22, color: colors.subtext, marginBottom: 4 }}>
          Klein
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 700, color: colors.text }}>
            50 € Sparrate
          </div>
          <div style={{ fontSize: 24, color: colors.gruen, fontWeight: 600 }}>
            ~25 € netto
          </div>
        </div>
      </div>

      <div
        style={{
          ...cardBase,
          transform: `scale(${card2Scale * middleScale})`,
          border: highlightScale > 0.5 ? `3px solid ${colors.allianzBlau}` : "3px solid transparent",
          position: "relative",
        }}
      >
        {highlightScale > 0.5 && (
          <div
            style={{
              position: "absolute",
              top: -16,
              right: 30,
              backgroundColor: colors.allianzBlau,
              color: "white",
              padding: "6px 20px",
              borderRadius: 20,
              fontSize: 20,
              fontWeight: 700,
              transform: `scale(${spring({ frame: Math.max(0, frame - 130), fps, damping: 8, stiffness: 160 })})`,
            }}
          >
            ⭐ Empfohlen
          </div>
        )}

        <div style={{ fontSize: 22, color: colors.subtext, marginBottom: 4 }}>
          Mittel
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 700, color: colors.text }}>
            100 € Sparrate
          </div>
          <div
            style={{
              fontSize: 24,
              color: colors.gruen,
              fontWeight: 600,
              transform: `scale(${pulse})`,
            }}
          >
            ~50 € netto
          </div>
        </div>

        {checkScale > 0.01 && (
          <div
            style={{
              marginTop: 16,
              opacity: socialOpacity,
              fontSize: 24,
              color: colors.allianzBlau,
              display: "flex",
              alignItems: "center",
              gap: 8,
              transform: `scale(${checkScale})`,
            }}
          >
            <span style={{ color: colors.gruen, fontSize: 30 }}>✓</span>
            Die meisten Ihrer Kollegen wählen diese Option.
          </div>
        )}
      </div>

      <div
        style={{
          ...cardBase,
          transform: `scale(${card3Scale})`,
          opacity: outerOpacity,
        }}
      >
        <div style={{ fontSize: 22, color: colors.subtext, marginBottom: 4 }}>
          Maximal
        </div>
        <div style={{ fontSize: 36, fontWeight: 700, color: colors.text }}>
          Der Steuer-Profi-Satz
        </div>
      </div>
    </AbsoluteFill>
  );
};
