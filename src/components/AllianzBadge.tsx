import React from "react";
import { colors, fonts } from "../styles/allianz-tokens";

export const AllianzBadge: React.FC<{ opacity?: number }> = ({
  opacity = 1,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        opacity,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: colors.allianzBlau,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
            fill="white"
          />
        </svg>
      </div>
      <span
        style={{
          fontFamily: fonts.primary,
          fontSize: 28,
          fontWeight: 700,
          color: colors.allianzBlau,
        }}
      >
        Allianz
      </span>
    </div>
  );
};
