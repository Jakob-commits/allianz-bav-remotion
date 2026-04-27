import React from "react";
import { colors, fonts } from "../styles/allianz-tokens";

interface CardProps {
  title: string;
  value: string;
  color?: string;
  icon?: string;
  opacity?: number;
  scale?: number;
  translateY?: number;
  highlighted?: boolean;
  badge?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  value,
  color = colors.text,
  opacity = 1,
  scale = 1,
  translateY = 0,
  highlighted = false,
  badge,
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: colors.container,
        borderRadius: 20,
        padding: "28px 32px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        opacity,
        transform: `scale(${scale}) translateY(${translateY}px)`,
        border: highlighted
          ? `3px solid ${colors.allianzBlau}`
          : "3px solid transparent",
        position: "relative",
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: -16,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: colors.allianzBlau,
            color: "white",
            padding: "6px 20px",
            borderRadius: 20,
            fontSize: 22,
            fontWeight: 700,
            fontFamily: fonts.primary,
          }}
        >
          {badge}
        </div>
      )}
      <div
        style={{
          fontFamily: fonts.primary,
          fontSize: 26,
          color: colors.subtext,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: fonts.primary,
          fontSize: 42,
          fontWeight: 700,
          color,
        }}
      >
        {value}
      </div>
      {children}
    </div>
  );
};
