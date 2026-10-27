export const WHATSAPP_PHONE_NUMBER = '919335280514';
export const WHATSAPP_DISPLAY_PHONE = '+91 93352 80514';

export const SERVICE_OPTIONS = {
  photography: 'Wedding Photography',
  cinematography: 'Wedding Cinematography',
  both: 'Photography + Cinematography',
  prewedding: 'Pre-Wedding Shoot',
  destination: 'Destination Wedding',
};

/**
 * Format the user-selected date or return 'Not specified'
 */
export function formatSelectedDate(dateStr) {
  if (!dateStr || !dateStr.trim()) return 'Not specified';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
      }
    }
  } catch {
    // fallback to original string
  }
  return dateStr;
}

/**
 * Formats enquiry form data into the exact required WhatsApp message
 */
export function formatWhatsAppMessage(form = {}) {
  const name = form.name?.trim() || '';
  const email = form.email?.trim() || '';
  const phone = form.phone?.trim() || 'Not specified';
  const weddingDate = form.weddingDate ? formatSelectedDate(form.weddingDate) : 'Not specified';
  const venue = form.venue?.trim() || 'Not specified';
  const service = SERVICE_OPTIONS[form.package] || form.package?.trim() || 'Not specified';
  const additional = form.message?.trim() || 'Not provided';

  return `Hello Sahil Studio! I'd like to enquire about your photography services.

*CLIENT DETAILS*
Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone}

*EVENT DETAILS*
Wedding/Event Date: ${weddingDate}
Venue / Location: ${venue}
Service Interested In: ${service}

*ADDITIONAL DETAILS*
${additional}

Please contact me regarding availability, packages, and pricing.

Thank you!`;
}

/**
 * Generates the direct WhatsApp URL
 */
export function buildWhatsAppUrl(form = {}) {
  const message = formatWhatsAppMessage(form);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates required form fields
 */
export function validateEnquiryForm(form = {}) {
  if (!form.name || !form.name.trim()) {
    return { isValid: false, error: 'Please enter your full name.' };
  }
  if (!form.email || !form.email.trim()) {
    return { isValid: false, error: 'Please enter your email address.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }
  return { isValid: true, error: null };
}

/**
 * Reliably opens WhatsApp URL across desktop, iOS, and Android
 */
export function openWhatsApp(url) {
  if (typeof window === 'undefined') return;

  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
