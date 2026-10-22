import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="h2" style={{ marginBottom: 'var(--space-6)' }}>Dashboard Overview</h1>
      
      <div className="grid grid-cols-3" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
        <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
          <p className="metadata">NEW INQUIRIES</p>
          <h2 className="display">12</h2>
        </div>
        <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
          <p className="metadata">UPCOMING WEDDINGS</p>
          <h2 className="display">4</h2>
        </div>
        <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
          <p className="metadata">PENDING FOLLOW-UPS</p>
          <h2 className="display">3</h2>
        </div>
      </div>

      <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>Recent Inquiries</h2>
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <th className="metadata" style={{ padding: 'var(--space-2) 0' }}>NAME</th>
            <th className="metadata" style={{ padding: 'var(--space-2) 0' }}>DATE</th>
            <th className="metadata" style={{ padding: 'var(--space-2) 0' }}>LOCATION</th>
            <th className="metadata" style={{ padding: 'var(--space-2) 0' }}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Kavya & Ishaan', date: 'Oct 12, 2026', loc: 'Jaipur', status: 'NEW' },
            { name: 'Ananya & Rahul', date: 'Nov 05, 2026', loc: 'Goa', status: 'CONTACTED' },
            { name: 'Meera & Dev', date: 'Dec 18, 2026', loc: 'Udaipur', status: 'FOLLOW-UP' }
          ].map((item, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: 'var(--space-3) 0' }}>{item.name}</td>
              <td style={{ padding: 'var(--space-3) 0', color: 'var(--text-secondary)' }}>{item.date}</td>
              <td style={{ padding: 'var(--space-3) 0', color: 'var(--text-secondary)' }}>{item.loc}</td>
              <td style={{ padding: 'var(--space-3) 0' }}>
                <span style={{ 
                  padding: '4px 8px', fontSize: '10px', 
                  backgroundColor: item.status === 'NEW' ? 'var(--accent-gold)' : 'transparent',
                  color: item.status === 'NEW' ? '#000' : 'var(--text-primary)',
                  border: item.status !== 'NEW' ? '1px solid var(--border-color)' : 'none',
                  borderRadius: '2px'
                }}>{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
