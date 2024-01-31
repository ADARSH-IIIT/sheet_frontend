

const initialstate = { slide_auth : { current_page : "none" } }




function slide_auth_red_fun( state= initialstate , action ){

    // console.log("slide AAUTH RED RUNNING");


    
    switch( action.type ){

        case 'signup' :  return { slide_auth : { current_page : "signup" } }
        case 'signin' : return { slide_auth : { current_page : "signin" }  }


        default : return state

    }



}

export default slide_auth_red_fun