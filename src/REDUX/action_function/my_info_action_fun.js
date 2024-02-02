function set_my_info_action_fun( myinfo ){

    // console.log(" current receiver action is running is running" , payload);

    // console.log(myinfo , "oooppp");
       
        return {
            type : "set_my_info" , 
            payload : myinfo 
            
           
        }
    
    }

    export default set_my_info_action_fun