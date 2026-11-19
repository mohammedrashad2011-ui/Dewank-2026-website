import { identityOgImage, ogSize } from "./identity-og";

// Social card for /offers/visual-identity and /en/offers/visual-identity (both pages point here).
export const alt = "Dewank: essential logo and brand identity design package";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return identityOgImage();
}
