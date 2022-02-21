import './HomePage.scss'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link , useNavigate} from "react-router-dom"

export const HomePage = () =>{

    // --- navigate
    const navigate = useNavigate()

    const [ searchIt , setSearchIt ] = useState("")
    console.log("search it", searchIt)
     
    return <div className='HomePage'> 
        <div className='container'>
            <div className='logo'>
                <span className='G'>G</span>
                <span className='o'>o</span>
                <span className='o2'>o</span>
                <span className='g'>g</span>
                <span className='l'>l</span>
                <span className='e'>e</span>
            </div>
            <input className='search-box' type="text" value={searchIt}
            onChange={(e) =>{ setSearchIt(e.target.value)}}
            />

            

            <button className='SearchIcon'
            onClick={() =>{
                navigate(`/search?q=${searchIt}`)
                setSearchIt("")
            }}
            
            >   <SearchIcon className='icon' /> </button>
          
        </div>
    </div>
}