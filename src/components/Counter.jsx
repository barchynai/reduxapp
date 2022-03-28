import { useState } from 'react'
import {store} from '../store/store'
import * as actions from '../store/actions/actionss'

function Counter(){
    const [refresh, setRefresh] = useState(false)
    const counter = store.getState()
    const handlerClick =()=>{
       store.dispatch({type:actions.INCREASE})
       setRefresh(!refresh)
       
    }
    return (
        <>
        <h1>this is my counter {counter}</h1>
        <button onClick={()=>handlerClick()}>Add One</button>
        </>
    )
}
export default Counter