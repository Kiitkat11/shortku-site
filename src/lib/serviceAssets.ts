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
// Services with no entry here fall back to the generated OrganicBlob, which is
// what all four Mimi features do today — the coloured blob per feature is the
// deliberate visual for the introductory site.
export const serviceAssets: Record<string, ServiceAsset> = {};
