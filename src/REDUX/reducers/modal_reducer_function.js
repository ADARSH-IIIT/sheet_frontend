


const profileinitialstate = {   profile_modal : false }


 export  function profile_modal_reducer_function(    state= profileinitialstate , action  ){



    // console.log("reducer of modal"  , action);

    switch(action.type){
    case 'profile' :  return { profile_modal : action.modal_state }
       

    default : return state

    }


}




const createsheetinitialstate = {  create_sheet_modal : false   }


export  function create_sheet_modal_reducer_function(    state= createsheetinitialstate , action  ){



    console.log("reducer of create sheet modal"  , action);

    switch(action.type){
    case 'create_sheet' :  return {  create_sheet_modal : action.modal_state }
       

    default : return state

    }


}





const allsheetinitialstate = {  all_sheet_modal : false   }


export  function all_sheet_modal_reducer_function(    state= allsheetinitialstate , action  ){



    console.log("reducer of all sheet  modal"  , action);

    switch(action.type){
    case 'all_sheet' :  return { all_sheet_modal : action.modal_state }
       

    default : return state

    }


}



const mysheetinitialstate = {  all_sheet_modal : false   }


export  function my_sheet_modal_reducer_function(    state= mysheetinitialstate , action  ){



    console.log("reducer of my sheet  modal"  , action);

    switch(action.type){
    case 'my_sheet' :  return { my_sheet_modal : action.modal_state }
       

    default : return state

    }


}



const opensheetinitialstate = {  open_sheet_modal : false   }


export  function open_sheet_modal_reducer_function(    state= opensheetinitialstate , action  ){



    console.log("reducer of my sheet  modal"  , action);

    switch(action.type){
    case 'open_sheet' :  return { open_sheet_modal : action.modal_state }
       

    default : return state

    }


}

