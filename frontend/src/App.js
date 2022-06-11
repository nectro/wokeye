import { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from './state';

import Navigation from './navigation';

function App() {
  const dispatch = useDispatch()
  const { setUser } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector(state=>state)

  useEffect(()=>{
    setUser({name:"sanm",gender:"male",make:"bengali"})
  },[])

  useEffect(()=>{
    console.log(state)
  },[state])

  return (
    <div className="App">
      <Navigation isLoggedIn={state.user.status}/>
    </div>
  );
}

export default App;
