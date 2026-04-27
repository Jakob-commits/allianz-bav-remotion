import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../styles/allianz-tokens";
import { AllianzBadge } from "../components/AllianzBadge";

export const Scene2Baeckerei: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY =
    spring({ frame, fps, damping: 14, stiffness: 100 }) * 40 - 40;

  const brotScale = spring({
    frame: Math.max(0, frame - 20),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const strikeWidth = interpolate(frame, [70, 85], [0, 100], {
    extrapolateRight: "clamp",
  });

  const newPriceScale = spring({
    frame: Math.max(0, frame - 85),
    fps,
    damping: 10,
    stiffness: 120,
  });

  const staatY =
    spring({
      frame: Math.max(0, frame - 120),
      fps,
      damping: 12,
      stiffness: 100,
    }) *
      100 -
    100;
  const staatOpacity = interpolate(frame, [120, 140], [0, 1], {
    extrapolateRight: "clamp",
  });

  const chefY =
    spring({
      frame: Math.max(0, frame - 150),
      fps,
      damping: 12,
      stiffness: 100,
    }) *
      100 -
    100;
  const chefOpacity = interpolate(frame, [150, 170], [0, 1], {
    extrapolateRight: "clamp",
  });

  const outroOpacity = interpolate(frame, [210, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  const badgeOpacity = interpolate(frame, [260, 280], [0, 1], {
    extrapolateRight: "clamp",
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
          transform: `translateY(${titleY}px)`,
          fontSize: 52,
          fontWeight: 700,
          color: colors.text,
          textAlign: "center",
          marginTop: 120,
        }}
      >
        Das Bäckerei-Prinzip
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 80,
          transform: `scale(${brotScale})`,
        }}
      >
        <svg width="180" height="140" viewBox="0 0 180 140">
          <ellipse cx="90" cy="80" rx="80" ry="50" fill="#D4A574" />
          <ellipse cx="90" cy="70" rx="70" ry="40" fill="#E8C49A" />
          <path
            d="M40 70 Q60 40 90 45 Q120 40 140 70"
            stroke="#C49A6C"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div style={{ position: "relative" }}>
            <span
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: colors.subtext,
              }}
            >
              2,00 €
            </span>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: `${strikeWidth}%`,
                height: 4,
                backgroundColor: colors.rot,
                transform: "translateY(-50%)",
              }}
            />
          </div>
          {newPriceScale > 0.01 && (
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: colors.gruen,
                transform: `scale(${newPriceScale})`,
                display: "inline-block",
              }}
            >
              1,00 €
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 60,
          marginTop: 80,
        }}
      >
        <div
          style={{
            opacity: staatOpacity,
            transform: `translateY(${staatY}px)`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 8 }}>🏛️</div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.text,
            }}
          >
            Staat
          </div>
          <div
            style={{
              fontSize: 24,
              color: colors.gruen,
              fontWeight: 600,
            }}
          >
            spart Steuern
          </div>
        </div>

        <div
          style={{
            opacity: chefOpacity,
            transform: `translateY(${chefY}px)`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 8 }}>👔</div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.text,
            }}
          >
            Ihr Chef
          </div>
          <div
            style={{
              fontSize: 24,
              color: colors.allianzBlau,
              fontWeight: 600,
            }}
          >
            gibt Zuschuss
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: outroOpacity,
          textAlign: "center",
          marginTop: 80,
          fontSize: 40,
          color: colors.text,
          lineHeight: 1.4,
        }}
      >
        Genau so funktioniert
        <br />
        <span style={{ fontWeight: 700, color: colors.allianzBlau }}>
          Ihre Betriebsrente
        </span>
        .
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AllianzBadge opacity={badgeOpacity} />
      </div>
    </AbsoluteFill>
  );
};
