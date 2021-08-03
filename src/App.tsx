import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ContactForm } from './features/contactForm';

function App() {
  const submit = (e: any) => {
    e.preventDefault()
    // print the form values to the console
    console.log(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ContactForm handleSubmit={submit} />
       </header>
    </div>
  );
}

export default App;
