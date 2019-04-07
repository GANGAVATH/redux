import {createStore, combineReducers } from 'redux';
import uuid from "uuid";
const addExpence = ({
    title = '',
    desctiption='',
    amount = 0,
    createAt=0

} = {}) => ({
    type : 'ADD_EXPENCE',
    expence : {
        id : uuid(),
        title,
        desctiption,
        amount,
        createAt
    }
})

const updateBook = (id,update) =>({
  type : 'UPDATE_BOOK',
  id,
  update,
})

const removeBook = ({id} = {}) =>({
   type : 'REMOVE_BOOK',  
   id
})

const defaultBookstate =[]

const addExpenceReducer = (state = defaultBookstate ,action) => {
     switch(action.type){
         case 'ADD_EXPENCE':
        return [
            ...state,
            action.expence
        ];
        case 'REMOVE_BOOK':
        return state.filter(({id}) => id !== action.id)

        case 'UPDATE_BOOK' :
            return state.map(ex => {
                if(ex.id === action.id){
                  return {
                      ...ex ,
                      ...action.update
                  }

                }else {
                    return ex
                }
            })
        default:
            return state
     }
}



// const store =createStore(addExpenceReducer)

const defaltfleter ={}
const filtersReducer = ( state =defaltfleter ,action ) =>{
    switch(action.type) {
        case '':
        default : 
        return state
    }
}

const store = createStore(combineReducers({
    books : addExpenceReducer,
    filters: filtersReducer
}))
store.subscribe(()=>{
    console.log(store.getState())
})

const removeID_ = store.dispatch(addExpence({
    title:'JAVASCRIPT',
    desctiption : 'javascript redux practices',
    amount :100 ,
    createAt:0
}))
const removeID = store.dispatch(addExpence({
    title:'pyrhon',
    desctiption : 'pyrhon practices',
    amount :50 ,
    createAt:0
}))

store.dispatch(updateBook(
   removeID.expence.id,
   { 
        title:'nodJS developer',
    }
))

store.dispatch(removeBook({ id : removeID_.expence.id }))

const DemoBooks = {
    books : [{
        id : 123456,
        title:'suri',
        desctiption : 'suri practices',
        amount :0,
        createAt:10

    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
      }
}