import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '250px', 
        borderRight: '1px solid var(--border-color)', 
        padding: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)'
      }}>
        <h2 style={{ fontSize: '16px', letterSpacing: '0.1em', marginBottom: 'var(--space-6)' }}>SAHIL STUDIO</h2>
        
        <p className="metadata" style={{ marginBottom: 'var(--space-1)' }}>INTERNAL</p>
        <Link to="/admin" className="btn-link" style={{ padding: '8px 0' }}>Dashboard</Link>
        <Link to="/admin/inquiries" className="btn-link" style={{ padding: '8px 0' }}>Inquiries</Link>
        <Link to="/admin/bookings" className="btn-link" style={{ padding: '8px 0' }}>Bookings</Link>
        
        <p className="metadata" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-1)' }}>CONTENT</p>
        <Link to="/admin/media" className="btn-link" style={{ padding: '8px 0' }}>Media Manager</Link>
        <Link to="/admin/portfolio" className="btn-link" style={{ padding: '8px 0' }}>Portfolio Manager</Link>
        <Link to="/admin/films" className="btn-link" style={{ padding: '8px 0' }}>Film Manager</Link>
        
        <div style={{ marginTop: 'auto' }}>
          <Link to="/" className="btn-link metadata" style={{ color: 'var(--text-secondary)' }}>← BACK TO SITE</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: 'var(--space-8)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
