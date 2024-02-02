

const initialstate = { my_info :  null }




function set_my_info_reducer( state= initialstate , action ){

    // console.log("slide AAUTH RED RUNNING");

    // console.log("info reducer is running" , action);


    
    switch( action.type ){

        case 'set_my_info' :  return { my_info : action.payload }
       

        default : return state

    }



}

export default set_my_info_reducer