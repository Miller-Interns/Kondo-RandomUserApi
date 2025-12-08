import { definePreset } from "@primeuix/themes";
import Nora from "@primeuix/themes/nora";

export const WhiskeyLoungePreset = definePreset(Nora, {
  semantic: {
    primary: { color: "#B08B4F", contrastText: "#F5EDE2" },
    surface: { background: "#1B1412", ground: "#0E0E0E", card: "#3F2C23" },
    text: { color: "#F5EDE2", secondary: "#C7B79F" },
    border: { color: "#6E4A35" },
    highlight: { background: "#8C5E3C", text: "#FFFFFF" },
  },
});
