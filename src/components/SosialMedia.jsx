export default function SosialMedia() {
  return (
    <div className="section">
      <strong>Sosial Media:</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '8px' }}>
          📸 Instagram: fillaakhtar_
        </li>
        <li>
          🐙 GitHub: 
          <a 
            href="https://github.com/Fillah010306" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              marginLeft: '8px',
              color: '#24292e',
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '1px solid #e1e4e8',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#0366d6';
              e.target.style.borderBottomColor = '#0366d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#24292e';
              e.target.style.borderBottomColor = '#e1e4e8';
            }}
          >
            Fillah010306
          </a>
        </li>
      </ul>
    </div>
  );
}