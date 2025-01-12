import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [hasSpecialChars, setHasSpecialChars] = useState(false);
  const [error, setError] = useState('');

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleSpecialCharsChange = () => {
    setHasSpecialChars(!hasSpecialChars);
  };

  const generatePassword = () => {
    if (length < 1) {
      setError('La longitud debe ser al menos 1 carácter');
      return;
    }
    setError('');

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let characters = lowerCase + upperCase + numbers;
    if (hasSpecialChars) {
      characters += specialChars;
    }
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="App">
      <h1>Generador de Contraseña</h1>
      
      <div>
        <label htmlFor="length">Longitud de la contraseña: </label>
        <input
          id="length"
          type="number"
          value={length}
          onChange={handleLengthChange}
          min="1"
        />
      </div>

      <div>
        <label htmlFor="specialChars">
          Incluir caracteres especiales:
        </label>
        <input
          type="checkbox"
          id="specialChars"
          checked={hasSpecialChars}
          onChange={handleSpecialCharsChange}
        />
      </div>

      <button onClick={generatePassword}>Generar Contraseña</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {password && (
        <div>
          <h2>Contraseña Generada:</h2>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
