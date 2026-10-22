/**
 * useMediaLibrary — manages Sahil Studio's media catalogue
 *
 * Stores media items in localStorage so the admin can upload via
 * the Media Manager and have those images appear on the public site
 * without needing a backend.
 *
 * Each item shape:
 * {
 *   id:         string   — uuid
 *   publicId:   string   — Cloudinary public_id
 *   folder:     string   — "portfolio" | "weddings" | "films" | "journal" | "about"
 *   type:       string   — "image" | "video"
 *   format:     string   — "jpg" | "mp4" etc.
 *   width:      number
 *   height:     number
 *   bytes:      number
 *   title:      string   — human label (optional)
 *   uploadedAt: string   — ISO timestamp
 * }
 */

import { useState, useCallback } from 'react';

const STORAGE_KEY = 'sahil_media_library';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('Media library storage error:', e);
  }
}

function uuid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useMediaLibrary() {
  const [items, setItems] = useState(loadFromStorage);

  // Add one or more items (called after successful Cloudinary upload)
  const addMedia = useCallback((cloudinaryResult, folder = 'portfolio') => {
    const info = cloudinaryResult.info || cloudinaryResult;
    const newItem = {
      id:         uuid(),
      publicId:   info.public_id,
      folder,
      type:       info.resource_type || 'image',
      format:     info.format || '',
      width:      info.width  || 0,
      height:     info.height || 0,
      bytes:      info.bytes  || 0,
      title:      '',
      uploadedAt: new Date().toISOString(),
      secureUrl:  info.secure_url || '',
    };

    setItems(prev => {
      const next = [newItem, ...prev];
      saveToStorage(next);
      return next;
    });

    return newItem;
  }, []);

  // Delete by id
  const deleteMedia = useCallback((id) => {
    setItems(prev => {
      const next = prev.filter(item => item.id !== id);
      saveToStorage(next);
      return next;
    });
  }, []);

  // Update title / metadata
  const updateMedia = useCallback((id, patch) => {
    setItems(prev => {
      const next = prev.map(item => item.id === id ? { ...item, ...patch } : item);
      saveToStorage(next);
      return next;
    });
  }, []);

  // Get items filtered by folder
  const getByFolder = useCallback((folder) => {
    if (!folder || folder === 'all') return items;
    return items.filter(item => item.folder === folder);
  }, [items]);

  // Get first image public_id for a folder (used as hero/cover)
  const getCover = useCallback((folder) => {
    const match = items.find(item => item.folder === folder && item.type === 'image');
    return match ? match.publicId : null;
  }, [items]);

  return { items, addMedia, deleteMedia, updateMedia, getByFolder, getCover };
}
