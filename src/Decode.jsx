import { decrypt } from 'guedes-crypt';
import { useState } from 'react';

export const Decode = (props) => {
  const password = props.password;
  const [text, setText] = useState("");
  const [decrypted, setDecrypted] = useState(null);
  const [error, setError] = useState(null);

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '25px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid #e9ecef',
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '20px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const textAreaStyle = {
    width: '100%',
    minHeight: '120px',
    padding: '12px',
    fontSize: '1em',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    marginBottom: '15px',
    boxSizing: 'border-box',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '1em',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
  };

  const outputSectionStyle = {
    backgroundColor: '#e6f2ff',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    border: '1px solid #cce5ff',
  };

  const errorStyle = {
    color: '#dc3545',
    backgroundColor: '#f8d7da',
    border: '1px solid #f5c6cb',
    padding: '15px',
    borderRadius: '8px',
    marginTop: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const DecryptText = () => {
    setError(null); // Clear previous errors
    setDecrypted(null); // Clear previous decrypted text
    try {
      const decrypted_text = decrypt(text, password);
      setDecrypted(decrypted_text);
    } catch (err) {
      console.error("Decryption error:", err);
      setError(err);
    }
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Decode Panel</h2>
      <div>
        <label htmlFor="decode-input" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
          Input your encrypted text
        </label>
        <textarea
          id="decode-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={textAreaStyle}
          placeholder="Enter encrypted text to decrypt..."
        />
        <button onClick={DecryptText} style={buttonStyle}>
          Decrypt!
        </button>
      </div>

      {decrypted && (
        <div style={outputSectionStyle}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Guedes Decrypted Secret</p>
          <textarea
            value={decrypted}
            readOnly
            style={{ ...textAreaStyle, backgroundColor: '#ffffff', cursor: 'text' }}
          />
        </div>
      )}

      {error && (
        <div style={errorStyle}>
          Error: {String(error)}
        </div>
      )}
    </div>
  );
};
