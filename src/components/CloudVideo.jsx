/**
 * CloudVideo — Cloudinary-powered video player for wedding films.
 *
 * Props:
 *  publicId   – Cloudinary public_id of the video
 *  fallback   – static MP4 URL if no publicId
 *  poster     – custom poster image URL (auto-generated from Cloudinary if not provided)
 *  title      – shown in the overlay
 *  subtitle   – shown in the overlay
 *  meta       – small tag text (e.g. "WEDDING FILM · 8:24")
 *  style      – wrapper div style
 */
import { buildVideoUrl, buildVideoThumbnailUrl } from '../lib/cloudinary';

export default function CloudVideo({
  publicId,
  fallback,
  poster,
  title,
  subtitle,
  meta,
  style = {},
}) {
  const videoSrc = publicId
    ? buildVideoUrl(publicId)
    : (fallback || '');

  const posterSrc = poster
    ? poster
    : publicId
      ? buildVideoThumbnailUrl(publicId)
      : '';

  const hasVideo = Boolean(videoSrc);

  return (
    <div style={{ position: 'relative', ...style }}>
      {hasVideo ? (
        <video
          src={videoSrc}
          poster={posterSrc}
          controls
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        /* Placeholder when no video uploaded yet */
        <div style={{
          width: '100%', height: '100%',
          background: 'var(--bg-dark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '300px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px',
              border: '2px solid rgba(200,169,107,0.4)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <div style={{
                width: 0, height: 0,
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: '16px solid rgba(200,169,107,0.5)',
                marginLeft: '4px',
              }} />
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.15em',
              color: 'rgba(200,169,107,0.5)',
            }}>
              Upload film via Admin
            </p>
          </div>
        </div>
      )}

      {/* Metadata overlay shown when NOT playing (only for thumbnail-style cards) */}
      {(title || meta) && !hasVideo && (
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px',
        }}>
          {meta && (
            <div style={{
              fontFamily: 'var(--font-sans)', fontSize: '9px',
              textTransform: 'uppercase', letterSpacing: '0.2em',
              color: 'var(--gold)', marginBottom: '4px',
            }}>
              {meta}
            </div>
          )}
          {title && (
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: '20px',
              fontWeight: 400, color: 'var(--text-cream)',
            }}>
              {title}
            </div>
          )}
          {subtitle && (
            <div style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic',
              fontSize: '13px', color: 'rgba(240,237,230,0.65)',
            }}>
              {subtitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
