import React, {useState} from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import routes from './routes';
import Header from './Header'
import "./App.css";
import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";


firebase.initializeApp(firebaseConfig)
export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value= {{isLoggedIn, setLoggedIn}}>
      is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            {routes.map(route => (
              <Route 
              key={route.path}
              path={route.path}
              exact={route.exact}
              component = {route.main} />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>  
  );
}

export default App;
