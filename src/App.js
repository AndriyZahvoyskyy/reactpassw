import React, { useState } from 'react';
import './App.css';

const characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '1234567890',
  symbols: '!@#$%^&*()_+=-:><,./?',
};

function App() {
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const createPassword = (options) => {
    let charset = '';
    if (options.uppercase) charset += characters.uppercase;
    if (options.lowercase) charset += characters.lowercase;
    if (options.numbers) charset += characters.numbers;
    if (options.symbols) charset += characters.symbols;

    let newPassword = '';
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }
    return newPassword;
  };

  const handleGeneratePassword = () => {
    const passwordOptions = {
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    };
    const newPassword = createPassword(passwordOptions);
    setPassword(newPassword);
  };

  return (
    <div className="container">
      <div className="password-container">
        <div className="password">{password || 'Your password here'}</div>
        <button className="password-copy">
          
        </button>
      </div>
      <div className="options-container">
        <div className="length-container">
          <div className="text">Character Length</div>
          <div className="length">{length}</div>
        </div>
        <input
          type="range"
          min="5"
          max="25"
          value={length}
          className="slider"
          onChange={handleLengthChange}
        />
        <div className="input-container">
          <input
            type="checkbox"
            id="upper"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          <div className="text">Include Uppercase letters</div>
        </div>
        <div className="input-container">
          <input
            type="checkbox"
            id="lower"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          <div className="text">Include Lowercase letters</div>
        </div>
        <div className="input-container">
          <input
            type="checkbox"
            id="numbers"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          <div className="text">Include Numbers</div>
        </div>
        <div className="input-container">
          <input
            type="checkbox"
            id="symbols"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          <div className="text">Include Symbols</div>
        </div>
        <button className="button-generate" onClick={handleGeneratePassword}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
