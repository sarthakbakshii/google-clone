import { GET_ALL } from './actionType';
import { SORT_ASC } from './actionType';
import { SORT_DESC } from './actionType';
import { SORT_DATE_DESC } from './actionType';
import { SORT_DATE_ASC } from './actionType';

const initalState = {
    searchData : []
}

const reducer = ( store = initalState , { type , payload}) =>{
    switch(type){
        case GET_ALL :{
            return { ...store , searchData : payload }
        }

        case SORT_ASC :{
            function compareStrings(a, b) {
                // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? -1 : (a > b) ? 1 : 0;
            }

            let sorted = JSON.parse(JSON.stringify(store.searchData));

             sorted.sort(function(a, b) {
                    return compareStrings(a.title, b.title);
                })

            return { ...store , searchData : sorted }
            

        }
        case SORT_DATE_ASC :{
            function compareStrings(a, b) {
                // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? -1 : (a > b) ? 1 : 0;
            }

            let sorted = JSON.parse(JSON.stringify(store.searchData));

             sorted.sort(function(a, b) {
                    return compareStrings(a.creation_date, b.creation_date);
                })

            return { ...store , searchData : sorted }
            

        }

        case SORT_DESC :{
            function compareStrings(a, b) {
                // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? 1 : (a > b) ? -1 : 0;
            }

            let sorted = JSON.parse(JSON.stringify(store.searchData));

             sorted.sort(function(a, b) {
                    return compareStrings(a.title, b.title);
                })

            return { ...store , searchData : sorted }
            

        }

        case SORT_DATE_DESC :{
            function compareStrings(a, b) {
                // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? 1 : (a > b) ? -1 : 0;
            }

            let sorted = JSON.parse(JSON.stringify(store.searchData));

             sorted.sort(function(a, b) {
                    return compareStrings(a.creation_date, b.creation_date);
                })

            return { ...store , searchData : sorted }
            

        }

        default :
            return store 
    }
}

export { reducer }