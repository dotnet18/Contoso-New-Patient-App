import { style } from "@vanilla-extract/css";
import { breakpoints } from "../main.css";

export const img = style({
  display: "block",
  maxWidth: 1280,
  "@media": {
    [`screen and (max-width: ${breakpoints.small})`]: {
      maxWidth: 320,
    },
  },
});
