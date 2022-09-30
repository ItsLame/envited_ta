import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './pages/styles/main.css';
import { IconName } from "react-icons/im";

import HomePage from './pages/home';
import CreatePage from './pages/create';
import EventPage from './pages/event';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route exact strict path="/" component={HomePage}/> */}
          <Route exact strict path="/" element={<HomePage />}/>
          {/* <Route exact strict path="/create" component={CreatePage}/> */}
          <Route exact strict path="/create" element={<CreatePage />}/>
          {/* <Route exact strict path="/event" component={EventPage}/> */}
          <Route exact strict path="/event" element={<EventPage />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;