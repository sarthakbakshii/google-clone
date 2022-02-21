import { GET_ALL } from './actionType';

export const getAll = (payload) =>{
    return {
        type : GET_ALL,
        payload
    }
}