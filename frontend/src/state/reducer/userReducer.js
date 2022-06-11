const initState = {status:false,data:null};


const reducer = (state = initState, action)=>{
    switch(action.type){
        case "set_user":
            let userDetails = action.payload;
            return userDetails;
        case "logout_user":
            return null;
        default:
            return state;
    }
}

export default reducer