import React from 'react';
import NavBar from './components/pages/NavBar';
import Footer from './components/pages/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import EmployerPage from './pages/EmployerPage';
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
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/employerpage" component={EmployerPage} />
          </Switch>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
