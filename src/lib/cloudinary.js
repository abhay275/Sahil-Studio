import { Cloudinary } from '@cloudinary/url-gen';

// ─── Cloudinary singleton ─────────────────────────────────────────────────────
// Reads from .env — fill in VITE_CLOUDINARY_CLOUD_NAME in your .env file
export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'derowd0h',
  },
  url: {
    secure: true,
  },
});

// Upload preset (set to "Unsigned" in Cloudinary dashboard)
export const UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'sahil_studio';

// ─── Folder structure ─────────────────────────────────────────────────────────
export const FOLDERS = {
  portfolio: 'sahil-studio/portfolio',
  weddings:  'sahil-studio/weddings',
  films:     'sahil-studio/films',
  journal:   'sahil-studio/journal',
  about:     'sahil-studio/about',
};

// ─── Helper: build an optimised Cloudinary image URL ─────────────────────────
// publicId  – the Cloudinary public ID (e.g. "sahil-studio/portfolio/img1")
// options   – { width, height, crop, quality, format }
export function buildImageUrl(publicId, options = {}) {
  const {
    width   = 'auto',
    height,
    crop    = 'fill',
    quality = 'auto',
    format  = 'auto',
    gravity = 'auto',
  } = options;

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'derowd0h';
  const base      = `https://res.cloudinary.com/${cloudName}/image/upload`;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width !== 'auto'  ? `w_${width}`          : null,
    height            ? `h_${height}`          : null,
    `c_${crop}`,
    `g_${gravity}`,
    'dpr_auto',
  ]
    .filter(Boolean)
    .join(',');

  return `${base}/${transforms}/${publicId}`;
}

// ─── Helper: build a Cloudinary video URL ────────────────────────────────────
export function buildVideoUrl(publicId, options = {}) {
  const { quality = 'auto', format = 'auto' } = options;
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'derowd0h';
  const base      = `https://res.cloudinary.com/${cloudName}/video/upload`;
  const transforms = [`f_${format}`, `q_${quality}`].join(',');
  return `${base}/${transforms}/${publicId}`;
}

// ─── Helper: build a video thumbnail URL ─────────────────────────────────────
export function buildVideoThumbnailUrl(publicId, options = {}) {
  const { width = 800, height = 450 } = options;
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'derowd0h';
  const base      = `https://res.cloudinary.com/${cloudName}/video/upload`;
  const transforms = `w_${width},h_${height},c_fill,so_2,f_jpg,q_auto`;
  return `${base}/${transforms}/${publicId}`;
}
