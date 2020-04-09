import {ADD_MOVIE, DELETE_MOVIE, SEARCH_MOVIE, EDIT_MOVIE} from '../action/actionType/ActionType'
const initState={
    listMovie:[
        {
            id:1,
            movieName:"joker",
            image:"https://www.indiewire.com/wp-content/uploads/2019/09/joker-1.jpg?w=780",
            years:"2019",
            typeMovie:"comedy",
            description:"joker thriller",
            rating:"7"
        },
        {
            id:2,
            movieName:"fethi",
            image:"https://www.indiewire.com/wp-content/uploads/2019/09/joker-1.jpg?w=780",
            years:"2019",
            typeMovie:"comedy",
            description:"joker thriller",
            rating:"7"
        },
        {
            id:3,
            movieName:"joerfg",
            image:"https://www.indiewire.com/wp-content/uploads/2019/09/joker-1.jpg?w=780",
            years:"2019",
            typeMovie:"comedy",
            description:"joker thriller",
            rating:"7"
        }

    ],
    searchMovie:""
}
const listReducer=(state=initState, action)=>{
    switch (action.type){
        case ADD_MOVIE :
            return {
                ...state,listMovie: [...state.listMovie, action.payload]
            };
        case DELETE_MOVIE :
            return {
                listMovie:state.listMovie.filter((el,i)=>(el.id!==action.payload))
            }
        case SEARCH_MOVIE :
            return{
            ...state,searchMovie:action.payload
            }

        case EDIT_MOVIE :
            return{
            ...state,listMovie:[...state.listMovie.map((el,i)=>el.id===action.payload.id?action.payload.obj:el)]
            }
    
        default:
        return state;
    }

}
export default listReducer