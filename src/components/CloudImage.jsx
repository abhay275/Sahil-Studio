/**
 * CloudImage — drop-in optimised image component powered by Cloudinary.
 *
 * Props:
 *  publicId   – Cloudinary public_id  (required if no `fallback`)
 *  fallback   – Unsplash / static URL used when publicId is not set
 *  alt        – alt text
 *  width      – desired pixel width for Cloudinary transform
 *  height     – desired pixel height for Cloudinary transform
 *  crop       – Cloudinary crop mode (default: "fill")
 *  gravity    – Cloudinary gravity (default: "auto")
 *  className  – forwarded to <img>
 *  style      – forwarded to <img>
 *  ...rest    – any other <img> attributes
 */
import { buildImageUrl } from '../lib/cloudinary';

export default function CloudImage({
  publicId,
  fallback,
  alt = '',
  width,
  height,
  crop    = 'fill',
  gravity = 'auto',
  style   = {},
  ...rest
}) {
  // If we have a Cloudinary publicId, use the optimised CDN URL
  const src = publicId
    ? buildImageUrl(publicId, { width, height, crop, gravity })
    : (fallback || '');

  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={style}
      {...rest}
    />
  );
}
