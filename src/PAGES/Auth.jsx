import React, { useRef } from 'react'
import Signup from '../COMPONENTS/Signup'

import './Auth.css'
import Login from '../COMPONENTS/Login'
import { useSelector , useDispatch} from 'react-redux'
import set_current_page from '../REDUX/action_function/slide_auth_action_fun'




const Auth = () => {


    const dispatch = useDispatch()

    const {slide_auth} = useSelector(state=>state.slide_auth)
    const {current_page} = slide_auth

    // console.log(  slide_auth , current_page );

  



    const signin = useRef(null)
    const signup = useRef(null)


      
    if(current_page=="signup"){


       

       if(signin?.current) {     signin.current.style.animation = "up 1s ease-in-out forwards" }
       if(signup?.current) {    signup.current.style.animation = "down 1s ease-in-out forwards"  }



    }


    if(current_page=="signin"){

      


       if(signup?.current)   {      signup.current.style.animation = "up 1s ease-in-out forwards"}
        
        if(signin?.current)  {    signin.current.style.animation = "down 1s ease-in-out forwards"}

    }


 



  return (
         <div className='auth'>
             
             <div className='auth1 flex-row-center' ref={signin} >
                   
                   {/* this will contain signin component */}

                 {/* <button   onClick={  change_to_signup   }>go to signup page</button> */}
                 <Login></Login>
                      
                
             </div>

             <div className='auth2 flex-row-center' ref={signup}>

                   {/* this will contain signup component */}

              
                  {/* <button   onClick={ change_to_signin }>go to sign in page</button> */}
                  <Signup></Signup>
                
             </div>




              
         </div>
  )
}

export default Auth