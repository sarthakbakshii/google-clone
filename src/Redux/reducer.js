import { GET_ALL } from './actionType';

const initalState = {
    searchData : []
}

const reducer = ( store = initalState , { type , payload}) =>{
    switch(type){
        case GET_ALL :{
            return { ...store , searchData : payload }
        }
        default :
            return store 
    }
}

export { reducer }