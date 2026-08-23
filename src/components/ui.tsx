import Image from "next/image";
import type { ServiceAsset } from "@/lib/serviceAssets";
import type { ServiceColor } from "@/lib/translations";

const colorMap: Record<ServiceColor, string> = {
  orangey: "#ff8709",
  pink: "#fec5fb",
  lilac: "#9d95ff",
  blue: "#00bae2",
};

export function OrganicBlob({
  color,
  className = "",
}: {
  color: ServiceColor;
  className?: string;
}) {
  return (
    <div className={`relative blob-drift ${className}`} aria-hidden="true">
      <svg viewBox="0 0 480 480" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id={`blob-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.95" />
            <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <ellipse
          cx="240"
          cy="260"
          rx="200"
          ry="180"
          fill={`url(#blob-${color})`}
          transform="rotate(-12 240 260)"
        />
        <ellipse
          cx="280"
          cy="200"
          rx="120"
          ry="100"
          fill={`url(#blob-${color})`}
          opacity="0.6"
          transform="rotate(8 280 200)"
        />
        <ellipse
          cx="180"
          cy="320"
          rx="90"
          ry="70"
          fill={colorMap[color]}
          opacity="0.25"
        />
      </svg>
    </div>
  );
}

export function ServiceVisual({
  asset,
  color,
  className = "",
}: {
  asset: ServiceAsset;
  color: ServiceColor;
  className?: string;
}) {
  const tilt = asset.tilt ?? -7;
  // Cover art is scaled up so the tilt can't expose a gap at the oval's edge;
  // contained art is eased inward instead, to stay clear of the curve.
  const artScale = asset.fit === "cover" ? 1.24 : 0.88;

  return (
    <div className={`relative blob-drift ${className}`} aria-hidden="true">
      <div
        className="absolute inset-[6%] rounded-[50%] blur-3xl opacity-30"
        style={{ background: colorMap[color] }}
      />
      <div
        className="absolute inset-0 rounded-[50%] overflow-hidden"
        style={{
          transform: `rotate(${tilt}deg)`,
          background: asset.bg,
        }}
      >
        <Image
          src={asset.src}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 480px"
          className={asset.fit === "contain" ? "object-contain" : "object-cover"}
          style={{ transform: `rotate(${-tilt}deg) scale(${artScale})` }}
        />
      </div>
    </div>
  );
}

export function CategoryLabel({
  children,
  color,
}: {
  children: React.ReactNode;
  color: ServiceColor | "green";
}) {
  const colors: Record<ServiceColor | "green", string> = {
    ...colorMap,
    green: "#0ae448",
  };
  return (
    <span
      className="text-[19px] md:text-[24px] font-normal leading-none block mb-4"
      style={{ color: colors[color] }}
    >
      {children}
    </span>
  );
}

export function PillButton({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "gradient";
}) {
  const className = variant === "gradient" ? "pill-gradient" : "pill-outline";
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export { colorMap };
