import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Sequence,
} from "remotion";
import { colors, fonts } from "../styles/allianz-tokens";
import { AllianzBadge } from "../components/AllianzBadge";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Y = spring({ frame, fps, damping: 14, stiffness: 100 }) * 50 - 50;
  const line1Opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const verschenkenColor = interpolate(frame, [30, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const verschenkenScale = interpolate(frame, [30, 45], [1, 1.1], {
    extrapolateRight: "clamp",
  });

  const euroX = interpolate(frame, [35, 70], [0, -200], {
    extrapolateRight: "clamp",
  });
  const euroOpacity = interpolate(frame, [35, 70], [1, 0], {
    extrapolateRight: "clamp",
  });

  const line2Opacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateRight: "clamp",
  });
  const line2Y =
    spring({ frame: Math.max(0, frame - 60), fps, damping: 14, stiffness: 100 }) *
      50 -
    50;

  const line3Opacity = interpolate(frame, [120, 140], [0, 1], {
    extrapolateRight: "clamp",
  });
  const line3Y =
    spring({
      frame: Math.max(0, frame - 120),
      fps,
      damping: 14,
      stiffness: 100,
    }) *
      50 -
    50;

  const badgeOpacity = interpolate(frame, [180, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const stripeWidth = interpolate(frame, [180, 220], [0, 1080], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.hintergrund,
        padding: 60,
        justifyContent: "center",
        fontFamily: fonts.primary,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: stripeWidth,
          height: 8,
          backgroundColor: colors.allianzBlau,
        }}
      />

      <div style={{ marginTop: -200 }}>
        <div
          style={{
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
            fontSize: 52,
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.3,
            marginBottom: 40,
            position: "relative",
          }}
        >
          Wussten Sie, dass Sie jeden Monat Geld an den Staat{" "}
          <span
            style={{
              color: `rgb(${Math.round(65 + verschenkenColor * (225 - 65))}, ${Math.round(65 + verschenkenColor * (52 - 65))}, ${Math.round(65 + verschenkenColor * (62 - 65))})`,
              transform: `scale(${verschenkenScale})`,
              display: "inline-block",
            }}
          >
            verschenken
          </span>
          ?
          <span
            style={{
              position: "absolute",
              right: 0,
              top: -20,
              fontSize: 60,
              opacity: euroOpacity,
              transform: `translateX(${euroX}px)`,
            }}
          >
            💶
          </span>
        </div>

        <div
          style={{
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
            fontSize: 44,
            color: colors.text,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          Geld, das eigentlich{" "}
          <span style={{ color: colors.allianzBlau, fontWeight: 700 }}>
            Ihnen gehört
          </span>
          .
        </div>

        <div
          style={{
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            fontSize: 44,
            color: colors.text,
            lineHeight: 1.4,
          }}
        >
          <span style={{ fontWeight: 700 }}>Ihre Kollegen</span> bei Müller
          holen es sich bereits zurück.
        </div>
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
