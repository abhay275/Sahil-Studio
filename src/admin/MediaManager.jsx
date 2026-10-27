import { useState, useCallback } from 'react';
import { useMediaLibrary } from '../hooks/useMediaLibrary';
import CloudUploadWidget from '../components/CloudUploadWidget';
import { buildImageUrl, buildVideoThumbnailUrl } from '../lib/cloudinary';

const FOLDER_TABS = [
  { key: 'all',       label: 'All Media' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'weddings',  label: 'Weddings' },
  { key: 'films',     label: 'Films' },
  { key: 'journal',   label: 'Journal' },
  { key: 'about',     label: 'About' },
];

const STATUS_BADGE = {
  image: { bg: 'rgba(200,169,107,0.15)', color: '#C8A96B', label: 'IMAGE' },
  video: { bg: 'rgba(100,149,237,0.15)', color: '#6495ED', label: 'VIDEO' },
};

export default function MediaManager() {
  const { items, addMedia, deleteMedia, updateMedia, getByFolder } = useMediaLibrary();
  const [activeFolder, setActiveFolder] = useState('all');
  const [editingId,    setEditingId]    = useState(null);
  const [editTitle,    setEditTitle]    = useState('');
  const [copied,       setCopied]       = useState(null);

  const handleUpload = useCallback((result, folder) => {
    addMedia(result, folder);
  }, [addMedia]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title || '');
  };

  const saveEdit = (id) => {
    updateMedia(id, { title: editTitle });
    setEditingId(null);
  };

  const visibleItems = getByFolder(activeFolder);

  const cloudName   = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'derowd0h';
  const isConfigured = cloudName && cloudName !== 'your_cloud_name_here';

  // ─── Styles ────────────────────────────────────────────────────────────────
  const S = {
    header: {
      display: 'flex', alignItems: 'flex-start',
      justifyContent: 'space-between', flexWrap: 'wrap',
      gap: '16px', marginBottom: '32px',
    },
    title: {
      fontFamily: 'var(--font-serif)',
      fontSize: '32px', fontWeight: 400,
      color: 'var(--text-dark)', marginBottom: '4px',
    },
    subtitle: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px', color: 'var(--text-secondary)',
    },
    configBanner: {
      background: 'rgba(200,169,107,0.08)',
      border: '1px solid rgba(200,169,107,0.3)',
      borderRadius: '4px',
      padding: '14px 20px', marginBottom: '28px',
      fontFamily: 'var(--font-sans)', fontSize: '13px',
      color: 'var(--text-secondary)', lineHeight: 1.6,
    },
    tabs: {
      display: 'flex', gap: '0', marginBottom: '28px',
      borderBottom: '1px solid var(--border-color)',
    },
    tab: (active) => ({
      padding: '10px 20px',
      fontFamily: 'var(--font-sans)', fontSize: '11px',
      textTransform: 'uppercase', letterSpacing: '0.12em',
      cursor: 'pointer', background: 'none', border: 'none',
      borderBottom: active ? '2px solid var(--accent-gold)' : '2px solid transparent',
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      marginBottom: '-1px', transition: 'color 0.2s ease',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '16px',
    },
    card: {
      border: '1px solid var(--border-color)',
      borderRadius: '4px', overflow: 'hidden',
      background: '#fff',
      transition: 'box-shadow 0.2s ease',
    },
    thumb: {
      position: 'relative', paddingTop: '70%',
      background: '#f0ede8', overflow: 'hidden',
    },
    thumbImg: {
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '12px',
    },
    badge: (type) => ({
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '2px',
      fontSize: '9px', fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '0.1em',
      background: STATUS_BADGE[type]?.bg || '#eee',
      color: STATUS_BADGE[type]?.color || '#333',
      marginBottom: '8px',
    }),
    itemTitle: {
      fontFamily: 'var(--font-sans)', fontSize: '12px',
      color: 'var(--text-primary)', marginBottom: '4px',
      wordBreak: 'break-all',
    },
    publicId: {
      fontFamily: 'monospace', fontSize: '10px',
      color: 'var(--text-secondary)', marginBottom: '10px',
      wordBreak: 'break-all',
    },
    actions: {
      display: 'flex', gap: '6px', flexWrap: 'wrap',
    },
    btn: (variant = 'default') => ({
      padding: '5px 10px',
      fontFamily: 'var(--font-sans)', fontSize: '10px',
      fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '0.08em', border: 'none', cursor: 'pointer',
      borderRadius: '2px',
      background: variant === 'gold'    ? 'var(--accent-gold)' :
                  variant === 'danger'  ? 'rgba(220,38,38,0.1)' : '#f0ede8',
      color:      variant === 'gold'    ? '#111111' :
                  variant === 'danger'  ? '#dc2626' : 'var(--text-primary)',
      transition: 'opacity 0.2s ease',
    }),
    emptyState: {
      gridColumn: '1 / -1',
      padding: '64px 32px', textAlign: 'center',
      border: '1px dashed var(--border-color)', borderRadius: '4px',
    },
    uploadBtn: {
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '12px 24px',
      background: 'var(--accent-gold)', color: '#111111',
      fontFamily: 'var(--font-sans)', fontSize: '11px',
      fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '0.12em', border: 'none', cursor: 'pointer',
      borderRadius: '2px', transition: 'opacity 0.2s ease',
    },
    statsRow: {
      display: 'flex', gap: '24px', marginBottom: '28px', flexWrap: 'wrap',
    },
    stat: {
      padding: '16px 20px',
      border: '1px solid var(--border-color)', borderRadius: '4px',
      minWidth: '110px',
    },
  };

  return (
    <div>
      {/* Header */}
      <div style={S.header}>
        <div>
          <h1 style={S.title}>Media Library</h1>
          <p style={S.subtitle}>
            {items.length} file{items.length !== 1 ? 's' : ''} · Upload images and videos directly to Cloudinary
          </p>
        </div>

        {/* Upload CTA */}
        <CloudUploadWidget
          folder={activeFolder === 'all' ? 'portfolio' : activeFolder}
          onUpload={handleUpload}
          resourceType="auto"
        >
          {({ open }) => (
            <button style={S.uploadBtn} onClick={open}>
              <span style={{ fontSize: '16px' }}>↑</span>
              Upload Media
            </button>
          )}
        </CloudUploadWidget>
      </div>

      {/* Config warning */}
      {!isConfigured && (
        <div style={S.configBanner}>
          <strong style={{ color: '#C8A96B' }}>⚠️ Cloudinary not configured</strong>
          <br />
          Open <code style={{ background: 'rgba(0,0,0,0.08)', padding: '1px 5px', borderRadius: '3px' }}>.env</code> in the project root and fill in:
          <br />
          <code style={{ background: 'rgba(0,0,0,0.08)', padding: '2px 8px', borderRadius: '3px', display: 'inline-block', marginTop: '6px' }}>
            VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
          </code>
          <br />
          <code style={{ background: 'rgba(0,0,0,0.08)', padding: '2px 8px', borderRadius: '3px', display: 'inline-block', marginTop: '4px' }}>
            VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_preset
          </code>
          <br />
          <span style={{ fontSize: '12px', marginTop: '8px', display: 'block' }}>
            Then restart the dev server with <code>npm run dev</code>.
          </span>
        </div>
      )}

      {/* Stats */}
      <div style={S.statsRow}>
        {[
          { label: 'Total Files',  value: items.length },
          { label: 'Images',       value: items.filter(i => i.type === 'image').length },
          { label: 'Videos',       value: items.filter(i => i.type === 'video').length },
          { label: 'Total Size',   value: formatBytes(items.reduce((s, i) => s + (i.bytes || 0), 0)) },
        ].map(({ label, value }) => (
          <div key={label} style={S.stat}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, color: 'var(--text-primary)' }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Folder Tabs */}
      <div style={S.tabs}>
        {FOLDER_TABS.map(({ key, label }) => (
          <button
            key={key}
            style={S.tab(activeFolder === key)}
            onClick={() => setActiveFolder(key)}
          >
            {label}
            {key !== 'all' && (
              <span style={{ marginLeft: '6px', opacity: 0.5 }}>
                ({items.filter(i => i.folder === key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div style={S.grid}>
        {visibleItems.length === 0 ? (
          <div style={S.emptyState}>
            <div style={{ fontSize: '32px', marginBottom: '12px', opacity: 0.3 }}>🖼</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              No media in {activeFolder === 'all' ? 'library' : activeFolder} yet
            </p>
            <CloudUploadWidget
              folder={activeFolder === 'all' ? 'portfolio' : activeFolder}
              onUpload={handleUpload}
              resourceType="auto"
            >
              {({ open }) => (
                <button style={S.uploadBtn} onClick={open}>↑ Upload First File</button>
              )}
            </CloudUploadWidget>
          </div>
        ) : (
          visibleItems.map(item => {
            const thumbUrl = item.type === 'video'
              ? buildVideoThumbnailUrl(item.publicId)
              : buildImageUrl(item.publicId, { width: 400, height: 280, crop: 'fill' });

            return (
              <div key={item.id} style={S.card}>
                {/* Thumbnail */}
                <div style={S.thumb}>
                  <img src={thumbUrl} alt={item.title || item.publicId} style={S.thumbImg} />
                  {item.type === 'video' && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                    }}>
                      <div style={{
                        width: '36px', height: '36px',
                        border: '2px solid rgba(255,255,255,0.7)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid white', marginLeft: '3px' }} />
                      </div>
                    </div>
                  )}
                  {/* Folder tag */}
                  <div style={{
                    position: 'absolute', top: '8px', left: '8px',
                    background: 'rgba(0,0,0,0.6)', color: '#C8A96B',
                    fontFamily: 'var(--font-sans)', fontSize: '9px',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    padding: '2px 8px', borderRadius: '2px',
                  }}>
                    {item.folder}
                  </div>
                </div>

                {/* Card Body */}
                <div style={S.cardBody}>
                  <span style={S.badge(item.type)}>
                    {STATUS_BADGE[item.type]?.label || item.type}
                  </span>

                  {/* Editable title */}
                  {editingId === item.id ? (
                    <div style={{ marginBottom: '8px' }}>
                      <input
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && saveEdit(item.id)}
                        autoFocus
                        placeholder="Add a title..."
                        style={{
                          width: '100%', padding: '4px 0',
                          fontFamily: 'var(--font-sans)', fontSize: '12px',
                          border: 'none', borderBottom: '1px solid var(--accent-gold)',
                          outline: 'none', background: 'transparent',
                          color: 'var(--text-primary)',
                        }}
                      />
                      <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                        <button style={S.btn('gold')} onClick={() => saveEdit(item.id)}>Save</button>
                        <button style={S.btn()} onClick={() => setEditingId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div style={S.itemTitle}>
                      {item.title || <span style={{ opacity: 0.4, fontStyle: 'italic' }}>Untitled</span>}
                    </div>
                  )}

                  <div style={S.publicId}>{item.publicId}</div>

                  {/* Actions */}
                  <div style={S.actions}>
                    <button
                      style={S.btn('gold')}
                      onClick={() => handleCopy(item.publicId, item.id)}
                    >
                      {copied === item.id ? '✓ Copied' : 'Copy ID'}
                    </button>
                    <button style={S.btn()} onClick={() => startEdit(item)}>
                      Rename
                    </button>
                    <button
                      style={S.btn('danger')}
                      onClick={() => {
                        if (window.confirm('Remove this item from the library?')) {
                          deleteMedia(item.id);
                        }
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024)         return `${bytes} B`;
  if (bytes < 1024 * 1024)  return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
