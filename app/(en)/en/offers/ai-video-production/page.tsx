import { enMetadata } from "../../_en/metadata";
import VideoOfferPage from "../../../../(ar)/offers/ai-video-production/video-offer-page";

export const metadata = enMetadata(
  "AI Video Production, AI Video Ads and Reels Editing",
  "Short-form video editing, AI-generated creative and purpose-built ad videos. Three clear packages with starting prices, deliverables and a simple WhatsApp brief.",
  "/en/offers/ai-video-production",
);

export default function Page() {
  return <VideoOfferPage locale="en" />;
}
