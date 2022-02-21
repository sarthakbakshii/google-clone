import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';
import { SearchPage } from './Components/SearchPage'


import {
  Route,
  Routes
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from 'axios'
import { useEffect } from 'react';
import { getAll} from './Redux/action'

function App() {

  // --------- redux 
       const searchData = useSelector( (store) => store.searchData );
      console.log(searchData, " searchData")

      const dispatch = useDispatch();

  const getData = () =>{
    axios.get('https://fast-reef-22226.herokuapp.com/data')
    .then( ({data}) => {
        dispatch( getAll(data) )
    })
  }
  useEffect( () =>{
    getData()
  }, [])


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={  <HomePage /> }></Route>
          <Route path="/search" element={  <SearchPage /> }></Route>
        
        </Routes>
         
    </div>
  );
}

export default App;
