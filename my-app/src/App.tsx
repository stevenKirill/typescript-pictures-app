import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidedraw } from './components/Sidedraw/Sidedraw';
import { AppRoutes } from './routes/routes';
import { Menu } from './components/Menu/Menu';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  const [opened,setOpened] = useState<boolean>(false);
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <Header onOpen={setOpened}/>
          <Sidedraw open={opened} setOpened={setOpened}>
          <Menu onClose={setOpened}/>
        </Sidedraw>
      </div>
      <AppRoutes/>
      </Provider>
    </Router>
  );
}

export default App;
