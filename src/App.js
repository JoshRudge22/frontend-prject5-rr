import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar component */}
        <NavBar />

        {/* Main content container */}
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" render={() => <h2>Needs working on</h2>} />
            <Route exact path="/signin" render={() => <h2>Needs working on</h2>} />
          </Switch>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
