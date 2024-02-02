

const initialstate = {   isloggedin :  false }




function log_in_reducer( state= initialstate , action ){

    // console.log("slide AAUTH RED RUNNING");

    // console.log("info reducer is running" , action);


    
    switch( action.type ){

        case 'loggedin' :  return { isloggedin : action.payload }
       

        default : return state

    }



}

export default log_in_reducer