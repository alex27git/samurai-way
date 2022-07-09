import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile"
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {Footer} from "./Components/Footer/Footer";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {State} from "./Redux/State";
import {StateType} from "./Redux/State";


function App() {
  debugger

  let posts = State.profilePage.posts
  let dialogs = State.dialogPage.dialogs
  let massages = State.dialogPage.massages
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <Footer/>
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile posts={posts}/>}/>
          <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}
                                                        massages={massages}/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
