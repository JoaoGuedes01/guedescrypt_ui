import { encrypt } from 'guedes-crypt';
import { useState } from 'react';

export const Encode = (props) => {
  const password = props.password;
  const [text, setText] = useState("");
  const [encrypted, setEncrypted] = useState(null);
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
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
  };

  const outputSectionStyle = {
    backgroundColor: '#e9f7ef',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    border: '1px solid #d4edda',
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

  const EncryptText = () => {
    setError(null); // Clear previous errors
    setEncrypted(null); // Clear previous encrypted text
    try {
      const encrypted_text = encrypt(text, password);
      setEncrypted(encrypted_text);
    } catch (err) {
      console.error("Encryption error:", err);
      setError(err);
    }
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Encode Panel</h2>
      <div>
        <label htmlFor="encode-input" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
          Input your Text
        </label>
        <textarea
          id="encode-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={textAreaStyle}
          placeholder="Enter text to encrypt..."
        />
        <button onClick={EncryptText} style={buttonStyle}>
          Encrypt!
        </button>
      </div>

      {encrypted && (
        <div style={outputSectionStyle}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Guedes Encrypted Secret</p>
          <textarea
            value={encrypted}
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
