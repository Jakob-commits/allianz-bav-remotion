import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  interpolateColors,
  spring,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../styles/allianz-tokens";

export const Scene6FOMO: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const leftBarHeight = interpolate(frame, [60, 110], [0, 42], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const leftCounter = Math.round(
    interpolate(frame, [65, 110], [0, 21000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const rightBarHeight = interpolate(frame, [120, 170], [0, 98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rightCounter = Math.round(
    interpolate(frame, [125, 170], [0, 49000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const diffOpacity = spring({
    frame: Math.max(0, frame - 180),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const lossScale = spring({
    frame: Math.max(0, frame - 185),
    fps,
    damping: 8,
    stiffness: 160,
  });

  const warnColor = interpolateColors(frame, [180, 195], ["#414141", "#E1343E"]);

  const outroOpacity = interpolate(frame, [240, 270], [0, 1], {
    extrapolateRight: "clamp",
  });

  const formatNumber = (n: number) =>
    n.toLocaleString("de-DE");

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
          fontSize: 44,
          fontWeight: 700,
          color: colors.text,
          textAlign: "center",
          marginTop: 120,
          marginBottom: 60,
        }}
      >
        Was passiert, wenn Sie
        <br />
        nicht mitmachen?
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 60,
          height: 700,
          paddingBottom: 40,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: colors.subtext,
              marginBottom: 12,
            }}
          >
            {formatNumber(leftCounter)} €
          </div>
          <div
            style={{
              width: 180,
              height: `${leftBarHeight}%`,
              backgroundColor: colors.subtext,
              borderRadius: "12px 12px 0 0",
              minHeight: 4,
              transition: "none",
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: colors.subtext,
              marginTop: 16,
              fontWeight: 600,
            }}
          >
            Eigenaufwand
            <br />
            (Netto)
          </div>
        </div>

        <div style={{ textAlign: "center", position: "relative" }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: colors.allianzBlau,
              marginBottom: 12,
            }}
          >
            {formatNumber(rightCounter)} €
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: 180,
                height: `${rightBarHeight}%`,
                backgroundColor: colors.allianzBlau,
                borderRadius: "12px 12px 0 0",
                minHeight: 4,
              }}
            />
            {diffOpacity > 0.01 && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 180,
                  height: `${rightBarHeight - leftBarHeight}%`,
                  backgroundColor: `rgba(225, 52, 62, ${diffOpacity * 0.3})`,
                  borderRadius: "12px 12px 0 0",
                  border: `2px dashed ${colors.rot}`,
                }}
              />
            )}
          </div>
          <div
            style={{
              fontSize: 24,
              color: colors.allianzBlau,
              marginTop: 16,
              fontWeight: 600,
            }}
          >
            Auszahlung
            <br />
            (Netto)
          </div>
        </div>
      </div>

      {lossScale > 0.01 && (
        <div
          style={{
            textAlign: "center",
            transform: `scale(${lossScale})`,
            marginTop: -40,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "white",
              padding: "16px 36px",
              borderRadius: 16,
              boxShadow: "0 4px 20px rgba(225,52,62,0.2)",
              border: `2px solid ${colors.rot}`,
            }}
          >
            <span style={{ fontSize: 36 }}>⚠️</span>
            <span
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: warnColor,
              }}
            >
              28.000 € Verlust
            </span>
          </div>
        </div>
      )}

      <div
        style={{
          opacity: outroOpacity,
          fontSize: 32,
          color: colors.text,
          textAlign: "center",
          marginTop: 40,
          lineHeight: 1.4,
          padding: "0 20px",
        }}
      >
        Das ist das Geld, das Sie dem Staat{" "}
        <span style={{ color: colors.rot, fontWeight: 700 }}>schenken</span>,
        <br />
        wenn Sie nicht unterschreiben.
      </div>
    </AbsoluteFill>
  );
};
