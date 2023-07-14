import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Whatis from './pages/HomePage/Whatis';
import Whowant from './pages/HomePage/Whowant';
import Subjects from './pages/HomePage/Subjects';
import Contactus from './pages/HomePage/Contactus';
import CourseDiscription from './pages/HomePage/CourseDiscription';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Whatis' exact component={Whatis}/>
        <Route path='/Whowant'exact component={Whowant}/>
        <Route path='/Subjects' exact component={Subjects}/>
        <Route path='/Contactus' exact component={Contactus}/>
        <Route path='/CourseDiscription' exact component={CourseDiscription}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
