import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidedraw } from './components/Sidedraw/Sidedraw';
import { AppRoutes } from './routes/routes';
import { Menu } from './components/Menu/Menu';

function App() {
  const [opened,setOpened] = useState<boolean>(false);
  return (
    <Router>
      <div className="App">
        <Header onOpen={setOpened}/>
          <Sidedraw open={opened} setOpened={setOpened}>
          <Menu onClose={setOpened}/>
        </Sidedraw>
      </div>
      <AppRoutes/>
    </Router>
  );
}

export default App;
