function login_action_fun( login_state){

    // console.log(" current receiver action is running is running" , payload);

    // console.log(myinfo , "oooppp");
       
        return {
            type : "loggedin" , 
            payload : login_state
            
            
           
        }
    
    }

    export default login_action_fun