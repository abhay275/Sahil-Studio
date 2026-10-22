/**
 * CloudUploadWidget — wraps Cloudinary's Upload Widget.
 *
 * Loads the Cloudinary Upload Widget script dynamically and opens it
 * when the user clicks the trigger. On success, calls onUpload(result, folder).
 *
 * Props:
 *  folder      – destination folder key (e.g. "portfolio", "films")
 *  onUpload    – callback(cloudinaryResult, folder)
 *  children    – render prop: children({ open }) where open() opens the widget
 *  multiple    – allow multiple file upload (default: true)
 *  resourceType– "image" | "video" | "auto" (default: "auto")
 */
import { useEffect, useRef, useCallback } from 'react';
import { UPLOAD_PRESET, FOLDERS } from '../lib/cloudinary';

const CLOUDINARY_SCRIPT_URL = 'https://upload-widget.cloudinary.com/global/all.js';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src  = src;
    script.async = true;
    script.onload  = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function CloudUploadWidget({
  folder        = 'portfolio',
  onUpload,
  children,
  multiple      = true,
  resourceType  = 'auto',
}) {
  const widgetRef = useRef(null);
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    loadScript(CLOUDINARY_SCRIPT_URL).catch(console.error);
  }, []);

  const open = useCallback(async () => {
    if (!cloudName || cloudName === 'your_cloud_name_here') {
      alert('⚠️ Please set VITE_CLOUDINARY_CLOUD_NAME in your .env file first.');
      return;
    }

    await loadScript(CLOUDINARY_SCRIPT_URL);

    const cloudinaryFolder = FOLDERS[folder] || `sahil-studio/${folder}`;

    if (!widgetRef.current) {
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName,
          uploadPreset:  UPLOAD_PRESET,
          folder:        cloudinaryFolder,
          multiple,
          resourceType,
          sources:       ['local', 'url', 'camera', 'google_drive'],
          cropping:      false,
          showAdvancedOptions: false,
          styles: {
            palette: {
              window:     '#111111',
              windowBorder: '#C8A96B',
              tabIcon:    '#C8A96B',
              menuIcons:  '#A7A39B',
              textDark:   '#1A1916',
              textLight:  '#F4F0E8',
              link:       '#C8A96B',
              action:     '#C8A96B',
              inProgress: '#C8A96B',
              complete:   '#C8A96B',
              error:      '#E53935',
              sourceBg:   '#0A0A0A',
            },
            fonts: {
              default: null,
              "'Cormorant Garamond', serif": {
                url:    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap',
                active: true,
              },
            },
          },
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return;
          }
          if (result.event === 'success') {
            onUpload?.(result, folder);
          }
        }
      );
    }

    widgetRef.current.open();
  }, [cloudName, folder, multiple, resourceType, onUpload]);

  // Destroy widget when folder changes so it's recreated with the new folder
  useEffect(() => {
    return () => {
      if (widgetRef.current) {
        widgetRef.current.destroy?.();
        widgetRef.current = null;
      }
    };
  }, [folder]);

  if (typeof children === 'function') {
    return children({ open });
  }

  return (
    <button onClick={open}>
      {children || 'Upload Media'}
    </button>
  );
}
