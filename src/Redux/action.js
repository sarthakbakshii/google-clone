import { GET_ALL } from './actionType';
import { SORT_ASC } from './actionType';
import { SORT_DESC } from './actionType';
import { SORT_DATE_DESC } from './actionType';
import { SORT_DATE_ASC } from './actionType';

export const getAll = (payload) =>{
    return {
        type : GET_ALL,
        payload
    }
}

export const sort_asc = (payload) =>{
    return {
        type : SORT_ASC,
        payload
    }
}

export const sort_desc = (payload) =>{
    return {
        type : SORT_DESC,
        payload
    }
}

export const sort_date_asc = (payload) =>{
    return {
        type : SORT_DATE_ASC,
        payload
    }
}

export const sort_date_desc = (payload) =>{
    return {
        type : SORT_DATE_DESC,
        payload
    }
}