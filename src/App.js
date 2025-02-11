import React from 'react';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar component */}
        <NavBar />

        {/* Main content container */}
        <Container>
          <h1>Welcome to the App!</h1>
          <p>This is where your app content will go.</p>
        </Container>
      </div>
    </Router>
  );
}

export default App;
