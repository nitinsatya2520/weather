import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"; 
import validator from 'validator'

const App = () => { 
  
  const [errorMessage, setErrorMessage] = useState('') 

  const validate = (value) => { 

      if (validator.isStrongPassword(value, { 
          minLength: 8, minLowercase: 1, 
          minUppercase: 1, minNumbers: 1, minSymbols: 1 
      })) { 
          setErrorMessage('Your Password is Strong') 
          if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 2, 
            minUppercase: 1, minNumbers: 2, minSymbols: 2 
        })) { 
            setErrorMessage('Your Password is Super Strong') 
            
        }
      } else { 
          setErrorMessage('Your Password is week') 
      } 
  } 
  return (
    <div className="App">
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
            <pre> 
                <h2>Checking Password Strength</h2> 
                <span>Enter Password: </span><input type="text"
                    onChange={(e) => validate(e.target.value)}></input> <br /> 
                {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>} 
            </pre> 

            
            
          

      </header>
  
      
    </div>
  );
}

export default App;
