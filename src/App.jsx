import { useState } from 'react';
import { Encode } from './Encode.jsx';
import { Decode } from './Decode.jsx';
import { generatePassword } from 'guedes-crypt';

import logo from '../public/logo.svg'; // Assuming this path is correct for your project structure

function App() {
  const [panel, setPanel] = useState("encode");
  const [password, setPassword] = useState("");

  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#ffffff',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  // New style for the logo image
  const logoStyle = {
    display: 'block', // Ensures margin: auto works for centering
    margin: '0 auto 20px auto', // Centers the image and adds bottom margin
    maxWidth: '150px', // Limits the maximum width of the logo
    height: 'auto', // Maintains aspect ratio
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '1em',
    borderRadius: '6px',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };

  const disabledButtonStyle = {
    backgroundColor: '#e9ecef',
    borderColor: '#e9ecef',
    color: '#6c757d',
    cursor: 'not-allowed',
  };

  const passwordSectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'flex-start',
  };

  const inputStyle = {
    padding: '10px 12px',
    fontSize: '1em',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    width: '100%',
    boxSizing: 'border-box',
  };

  const linkContainerStyle = {
    marginTop: '30px',
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #e0e0e0',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <div style={appContainerStyle}>
      {/* Apply the new logoStyle to the image */}
      <img src={logo} alt="GuedesCrypt Logo" style={logoStyle} />
      <h1 style={headerStyle}>GuedesCrypt UI Tester</h1>

      <div style={buttonGroupStyle}>
        <button
          style={panel === 'encode' ? { ...buttonStyle, ...disabledButtonStyle } : buttonStyle}
          onClick={() => setPanel('encode')}
          disabled={panel === 'encode'}
        >
          Encode
        </button>
        <button
          style={panel === 'decode' ? { ...buttonStyle, ...disabledButtonStyle } : buttonStyle}
          onClick={() => setPanel('decode')}
          disabled={panel === 'decode'}
        >
          Decode
        </button>
      </div>

      <div style={passwordSectionStyle}>
        <label htmlFor="password-input" style={{ fontWeight: 'bold', color: '#555' }}>
          Password
        </label>
        <input
          id="password-input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="Enter or generate a password"
        />
        <button
          onClick={() => setPassword(generatePassword())}
          style={{ ...buttonStyle, backgroundColor: '#6c757d', borderColor: '#6c757d' }}
        >
          Generate Password
        </button>
      </div>

      <div>
        {panel === "encode" ? (
          <Encode password={password} />
        ) : (
          <Decode password={password} />
        )}
      </div>

      <div style={linkContainerStyle}>
        <a
          href="https://github.com/JoaoGuedes01/guedescrypt_ui"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          App Repository
        </a>
        <a
          href="https://www.npmjs.com/package/guedes-crypt"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          guedes-crypt npm page
        </a>
      </div>
    </div>
  );
}

export default App;

