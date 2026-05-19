import { useState } from 'react';

function showPDFinModal() {
  const [showPdf, setShowPdf] = useState(true);

  return (
    <div>
      <h1>Pagina aplicației</h1>

      {showPdf && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button
              style={styles.closeButton}
              onClick={() => setShowPdf(false)}
            >
              Închide
            </button>

            <iframe
              src="/documente/instructiuni.pdf"
              title="Document PDF"
              width="100%"
              height="100%"
              style={styles.iframe}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    width: '80vw',
    height: '85vh',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10,
    padding: '8px 12px',
    cursor: 'pointer',
  },
  iframe: {
    border: 'none',
    marginTop: '40px',
    height: 'calc(100% - 40px)',
  },
};

export default showPDFinModal;
