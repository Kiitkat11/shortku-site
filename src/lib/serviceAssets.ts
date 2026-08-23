export type ServiceAsset = {
  src: string;
  /** "cover" fills the oval and crops; "contain" fits the whole artwork on a disc. */
  fit: "cover" | "contain";
  /** Disc colour behind a contained image, matched to the artwork's own background. */
  bg?: string;
  /** Frame tilt in degrees. Varied per service so the row doesn't look mechanical. */
  tilt?: number;
};

// Maps a service id from translations to its image in /public.
// Services with no entry here fall back to the generated OrganicBlob.
export const serviceAssets: Record<string, ServiceAsset> = {
  entry: { src: "/services/entry.jpeg", fit: "cover", tilt: -8 },
  localization: {
    src: "/services/localization.png",
    fit: "contain",
    bg: "#f8f0e7",
    tilt: 6,
  },
  funding: {
    src: "/services/funding.png",
    fit: "contain",
    bg: "#18212c",
    tilt: -5,
  },
  consulting: { src: "/services/consulting.png", fit: "cover", tilt: 7 },
};
