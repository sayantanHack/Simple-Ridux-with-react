import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
    render() {

        // reducer state & action
        const reducer = function(state, action){
            if(action.type === "ATTACK"){
                return action.payload;
            }
            if(action.type === "BLACK ATTACK"){
                return action.payload;
            }
            return state;
        }

        // store constant reducer & state
        const store = createStore(reducer, "Peace");
        
        // subscribing store pass callback function
        store.subscribe(()=>{
            console.log("Store is now", store.getStarted())
        }
        )
// ispatching actions
        store.dispatch({type:"ATTACK", payload: "James Bond"})
        store.dispatch({type:"BLACK  ATTACK", payload: "BatMan"})

        return(
            <div>
                Test
            </div>
        );
    }
}

export default ReduxDemo;