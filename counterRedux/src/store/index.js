import {createStore} from 'redux'

const reducer=(state={counter:0},action)=>{
    // reducer functions should be synchornus,we should not mutate the orginial state

    if(action.type==='INC'){
        return{ counter: state.counter+1}
    }
    else if(action.type==='DEC'){
        return{ counter: state.counter-1}
    }
    else if(action.type==='ADD_BY'){
        return{counter: state.counter+action.payload}
    }

    return state
}
const store= createStore(reducer)
export default store