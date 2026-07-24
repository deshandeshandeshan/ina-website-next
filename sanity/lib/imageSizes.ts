// Width (px) requested from Sanity's image CDN, paired with the `sizes`
// attribute passed to next/image, derived from how wide each image actually
// renders across breakpoints. Without these, Sanity serves the untouched
// upload resolution and next/image can't pick a sensibly-sized srcset
// candidate — this is what keeps large editor-uploaded originals from being
// shipped to the browser at full size.
export const IMAGE_SIZES = {
  hero: { width: 1600, sizes: "(min-width: 480px) 40vw, 70vw" },
  wide: { width: 2000, sizes: "(min-width: 480px) 70vw, 90vw" },
  large: { width: 1600, sizes: "(min-width: 480px) 50vw, 100vw" },
  medium: { width: 1200, sizes: "(min-width: 480px) 35vw, 100vw" },
  small: { width: 1000, sizes: "(min-width: 480px) 30vw, 60vw" },
  compact: { width: 900, sizes: "(min-width: 480px) 20vw, 70vw" },
  fullBleed: { width: 2200, sizes: "100vw" },
  carousel: { width: 1200, sizes: "(min-width: 480px) 500px, 90vw" },
  lightbox: { width: 2000, sizes: "100vw" },
} as const;
