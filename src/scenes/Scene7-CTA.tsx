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

export const Scene7CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const mainTextY =
    spring({ frame, fps, damping: 12, stiffness: 100 }) * 50 - 50;
  const mainTextOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const clockOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateRight: "clamp",
  });
  const progressWidth = interpolate(frame, [70, 110], [0, 100], {
    extrapolateRight: "clamp",
  });

  const bubbleScale = spring({
    frame: Math.max(0, frame - 120),
    fps,
    damping: 8,
    stiffness: 140,
  });

  const fingerY =
    frame > 140
      ? Math.sin((frame - 140) * 0.15) * 8
      : 0;
  const fingerOpacity = interpolate(frame, [140, 155], [0, 1], {
    extrapolateRight: "clamp",
  });

  const badgeOpacity = interpolate(frame, [180, 220], [0, 0.7], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.hintergrund,
        padding: 60,
        fontFamily: fonts.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: mainTextOpacity,
          transform: `translateY(${mainTextY}px)`,
          fontSize: 52,
          fontWeight: 700,
          color: colors.text,
          textAlign: "center",
          lineHeight: 1.3,
          marginTop: -200,
        }}
      >
        <span style={{ color: colors.allianzBlau }}>Sichern</span> Sie sich
        <br />
        jetzt Ihren{" "}
        <span style={{ color: colors.gruen }}>Vorteil</span>.
      </div>

      <div
        style={{
          opacity: clockOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 60,
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 44 }}>⏱️</span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: colors.text,
            }}
          >
            Nur 2 Minuten
          </span>
        </div>

        <div
          style={{
            width: 400,
            height: 8,
            backgroundColor: "#E0E0E0",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progressWidth}%`,
              height: "100%",
              backgroundColor: colors.gruen,
              borderRadius: 4,
            }}
          />
        </div>
      </div>

      <div
        style={{
          transform: `scale(${bubbleScale})`,
          marginTop: 80,
          display: "flex",
          alignItems: "flex-end",
          gap: 16,
        }}
      >
        <div
          style={{
            backgroundColor: colors.whatsappGruen,
            borderRadius: "20px 20px 20px 4px",
            padding: "20px 32px",
            maxWidth: 600,
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
          }}
        >
          <div
            style={{
              fontSize: 34,
              color: "white",
              fontWeight: 600,
            }}
          >
            Ja, ich will starten. ✅
          </div>
        </div>

        <div
          style={{
            opacity: fingerOpacity,
            transform: `translateY(${fingerY}px)`,
            fontSize: 48,
          }}
        >
          👆
        </div>
      </div>

      <div
        style={{
          opacity: clockOpacity,
          fontSize: 28,
          color: colors.subtext,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Antworten Sie einfach auf diese Nachricht.
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
