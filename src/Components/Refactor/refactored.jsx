import { brandStore } from "./brandStore.mjs";

import Color from "color";

const defaultColors = [
  { id: 1, name: "primary", value: "#333" },
  { id: 2, name: "secondary", value: "#222" },
  { id: 3, name: "tertiary", value: "#555" },
];

const defaultBodyFont = "Lato";
const allowedFonts = ["lato", "arial", "helvetica", "courier"];

const convertToRgb = (c) => Color(c).rgb().string();

const validateBodyFont = (bodyFont) => {
  let found = false;
  allowedFonts.forEach((a) => {
    if (a === bodyFont.toLowerCase()) found = true;
  });
  if (found) {
    return bodyFont;
  }
  return defaultBodyFont;
};

const buildTheme = (colors, bodyFont) => {
  if (!colors) {
    return (colors = defaultColors);
  }
  if (!bodyFont) {
    colors = defaultBodyFont;
  }
  const newColors = {};
  colors.forEach((c) => {
    newColors[c.name] = convertToRgb(c.value);
  });

  return {
    colors: newColors,
    bodyFont: validateBodyFont(bodyFont),
  };
};

export const getBranding = (user) => {
  if (user.brandId && brandStore.length) {
    brandStore.forEach((brand) => {
      const matchedBrands = brand.id === user.brandId;
      if (matchedBrands) {
        defaultColors = brand.defaultColors;
        defaultBodyFont = brand.bodyFont;
      }
      return matchedBrands;
    });
  }
  return buildTheme(defaultColors, defaultBodyFont);
};
