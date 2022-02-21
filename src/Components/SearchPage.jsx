import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useLocation} from "react-router-dom";
import "./SearchPage.scss"

import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAll } from '../Redux/action'


export const SearchPage = () =>{
    const search = useLocation().search;
  const name = new URLSearchParams(search).get('q');

  const [searchQuery , setSearchQuery] = useState(name);

  const [results, setresults] = useState([])
  console.log("results" , results)


//   ---- redux
  const searchData = useSelector( (store) => store.searchData );
      console.log(searchData, " searchData on search page")
      const dispatch = useDispatch()

//   ----- network call for search 
    const getResults = () =>{
        axios.get("https://fast-reef-22226.herokuapp.com/data")
        .then( (data) =>{
            let temp = data.data;
            temp = temp.filter( e =>{
                if(e.title.indexOf(searchQuery) !== -1) return e;
            })
            setresults(temp);
            dispatch( getAll(temp) )
        })        
    }
    useEffect( () => {
        getResults()
    }, [])

    // ------------------------------------


    return (  <div className="SearchPage"> 

        <div id="navbar" className="navbar">
            <div className='logo'>
                <span className='G'>G</span>
                <span className='o'>o</span>
                <span className='o2'>o</span>
                <span className='g'>g</span>
                <span className='l'>l</span>
                <span className='e'>e</span>
            </div>
            <input type="text" className="searchBox" defaultValue={searchQuery}
            onChange={ (e) =>{
                setSearchQuery(e.target.value)
            }}
            />
            <button className="search" 
            onClick={ () =>{
                getResults()
            }}
            > Search</button>
        
        </div>
        <div className="sortBox"> 
            <button> Sort A-Z </button>
            <button> Sort Z-A </button>
            <button> Sort Date asc </button>
            <button> Sort Date desc </button>
        </div>

        <div id="search-result" className="search-result">
        {searchData.map( a =>{
            return (
                <div className="detailed-result">
                    <div className="text-left">{a.url}</div>
                    <div className="bold"> TiTle : {a.title}</div>
                     <div> {a.description}</div>
                      <div className="bold"> Creation Date :  {a.creation_date}</div>
                       <div className="bold"> explicit :  {a.explicit} quality : {a.quality}</div>



                
                </div>
            )
        })}
        </div>
        
        </div> )
}