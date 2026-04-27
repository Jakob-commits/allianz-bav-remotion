import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../styles/allianz-tokens";

export const Scene4Steuer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY =
    spring({ frame, fps, damping: 14, stiffness: 100 }) * 40 - 40;

  const waageRotation = interpolate(frame, [80, 130], [0, -15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const waageOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateRight: "clamp",
  });

  const leftWeightY =
    spring({
      frame: Math.max(0, frame - 80),
      fps,
      damping: 10,
      stiffness: 80,
    }) * 30;

  const rightWeightY =
    spring({
      frame: Math.max(0, frame - 80),
      fps,
      damping: 10,
      stiffness: 80,
    }) * -30;

  const arrowX = interpolate(frame, [150, 200], [-300, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const arrowOpacity = interpolate(frame, [150, 170], [0, 1], {
    extrapolateRight: "clamp",
  });

  const zoneScale = spring({
    frame: Math.max(0, frame - 150),
    fps,
    damping: 12,
    stiffness: 100,
  });

  const outroOpacity = interpolate(frame, [210, 240], [0, 1], {
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
          fontSize: 50,
          fontWeight: 700,
          color: colors.text,
          textAlign: "center",
          marginTop: 120,
        }}
      >
        Die Steuer-Schaukel
      </div>

      <div
        style={{
          opacity: waageOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <svg width="800" height="500" viewBox="0 0 800 500">
          <line
            x1="400"
            y1="400"
            x2="400"
            y2="150"
            stroke={colors.navigation}
            strokeWidth="8"
          />
          <polygon
            points="360,400 440,400 400,420"
            fill={colors.navigation}
          />

          <g transform={`rotate(${waageRotation}, 400, 150)`}>
            <line
              x1="100"
              y1="150"
              x2="700"
              y2="150"
              stroke={colors.navigation}
              strokeWidth="6"
            />

            <line
              x1="100"
              y1="150"
              x2="100"
              y2="220"
              stroke={colors.subtext}
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="150"
              x2="200"
              y2="220"
              stroke={colors.subtext}
              strokeWidth="2"
            />
            <ellipse
              cx="150"
              cy={230 + leftWeightY}
              rx="70"
              ry="15"
              fill={colors.rot}
              opacity={0.8}
            />

            <line
              x1="600"
              y1="150"
              x2="600"
              y2="220"
              stroke={colors.subtext}
              strokeWidth="2"
            />
            <line
              x1="700"
              y1="150"
              x2="700"
              y2="220"
              stroke={colors.subtext}
              strokeWidth="2"
            />
            <ellipse
              cx="650"
              cy={230 + rightWeightY}
              rx="70"
              ry="15"
              fill={colors.gruen}
              opacity={0.8}
            />
          </g>
        </svg>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 700,
            marginTop: -60,
          }}
        >
          <div style={{ textAlign: "center", width: 250 }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: colors.rot,
              }}
            >
              HEUTE
            </div>
            <div style={{ fontSize: 26, color: colors.text }}>
              30–40 % Steuern
            </div>
          </div>
          <div style={{ textAlign: "center", width: 250 }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: colors.gruen,
              }}
            >
              SPÄTER
            </div>
            <div style={{ fontSize: 26, color: colors.text }}>
              15–20 % Steuern
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: arrowOpacity,
          transform: `translateX(${arrowX}px) scale(${zoneScale})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          gap: 16,
        }}
      >
        <div
          style={{
            backgroundColor: colors.gruen,
            borderRadius: 12,
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 36, color: "white" }}>→</span>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "white",
            }}
          >
            Ihr Gewinn
          </span>
        </div>
      </div>

      <div
        style={{
          opacity: outroOpacity,
          fontSize: 38,
          fontWeight: 600,
          color: colors.allianzBlau,
          textAlign: "center",
          marginTop: 60,
        }}
      >
        Heute sparen, später profitieren.
      </div>
    </AbsoluteFill>
  );
};
