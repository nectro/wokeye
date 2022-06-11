import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from './state';


function Rectfunc(){
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch);
}

export default Rectfunc



