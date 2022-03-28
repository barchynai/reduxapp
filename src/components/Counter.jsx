import { useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/actionss'

function Counter(){
    const counter = useSelector((state) => {
        return state
    })
    
    const dispatch = useDispatch()
    const handlerClick = () =>{
       dispatch({type:actions.INCREASE})
    }
    return (
        <>
        <h1>this is my counter {counter}</h1>
        <button onClick={()=>handlerClick()}>Add One</button>
        </>
    )
}
export default Counter