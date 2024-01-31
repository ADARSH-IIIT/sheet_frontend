import React, { useRef, useState } from 'react'

import './Signup.css'

import { useDispatch } from 'react-redux'

import set_current_page from '../REDUX/action_function/slide_auth_action_fun'



import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { FaLock } from "react-icons/fa6";

import { FaUser } from "react-icons/fa";
import { useAlert } from 'react-alert';
import { axiosInstance, signup_api } from '../api_list';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';







const Signup = () => {

  const dispatch = useDispatch()
  const alert = useAlert()
 const emailref = useRef(null)
 const passwordref = useRef(null)
 const usernameref = useRef(null)
 const navigate= useNavigate()

 const [email , setemail] = useState(null)
 const [username , setusername] = useState(null)
 const [ password , setpassword] = useState(null)
        
  function go_to_signin(){
  dispatch( set_current_page("signin") ) 
             
  }


  const [input_type , set_type] = useState("password")
  const [loading , setloading] = useState(false)


  function go_to_email(e){

        if(username=='' || username==null){return }

        if(e.key=='Enter'){
                emailref.current.focus()
        }
  }

  function go_to_password(e){

        if(email=='' || email==null){return }

        if(e.key=='Enter'){
                passwordref.current.focus()
        }
  }


  function go_to_signup_button(e){

        if(password=='' || password==null){return }


      if(e.key=='Enter')  handle_signup()

  }


  async function handle_signup(){
        // console.log("registerinngggggg");
        try {

                console.log("trying to regiister" , email , password , username);
                let validation_error = false

        setloading(true)

        if( !validator.isEmail(email) ){
                setloading(false)
                alert.show("pls enter valid email address")
                validation_error = true
        }

        if( password.length<8 ){
                setloading(false)
                alert.show("password should have atleast 8 characters")
                validation_error = true

        }

        if( username.length<4 ){
                setloading(false)
                alert.show("username should have atleast 4 characters")
                validation_error = true

        }


        if(validation_error){ return }

        const {data} = await axiosInstance.post(   signup_api , { email : email , password : password , username : username })
        if(data.error){  alert.show(data.mssg) ; return setloading(false)   }
        
        if(!data.error) {
                

                //////////////    navigate to new link
                alert.show(data.mssg)
                setloading(false)
                navigate('/profile/sheet')



        }

                
        } catch (error) {

                // console.log(error);
                console.log("error at hasndle login in frontend");
                alert.show("some error to register at this moment")
                setloading(false)
                
        }
  }







  return (
    <div  className='signup flex-row-center'>


<div className='login2 flex-col-center'>
                        <div className='login21 flex-row-center'>Sign Up</div>
                        <div className='login22 flex-row-center'>
                                <div className='auth_icon flex-row-center'><FaGoogle></FaGoogle></div>
                                <div className='auth_icon flex-row-center'><FaGithub></FaGithub></div>
                                <div className='auth_icon flex-row-center'><FaFacebookF></FaFacebookF></div>
                        </div>
                        <div className='login25 flex-row-center'>or create with email_id</div>

                        <div className='signup_input_parent flex-col-center'>

                                <div  className='login231 flex-row-center'>
                                        <div className='login2311 flex-row-center'><FaUser /></div>
                                        <div className='login2312 flex-row-center'><input type="text" placeholder='Username' className='auth_input' ref={usernameref} onChange={(e)=>{setusername(e.target.value)}}  onKeyDown={go_to_email} /></div>
                                </div>
                                <div  className='login231 flex-row-center'>
                                        <div className='login2311 flex-row-center'><IoMail /></div>
                                        <div className='login2312 flex-row-center'><input type="text" placeholder='Email' className='auth_input' ref={emailref} onChange={(e)=>{setemail(e.target.value)}} onKeyDown={go_to_password}/></div>
                                </div>
                                <div className='login232 flex-row-center'>
                                         <div className='login2311 flex-row-center'><FaLock onMouseEnter={()=>{set_type("text")}} onMouseLeave={()=>{set_type("password")} }/></div>
                                        <div className='login2312 flex-row-center'><input type={input_type} placeholder='Password' className='auth_input' ref={passwordref}  onChange={(e)=>{ setpassword(e.target.value)}} onKeyDown={go_to_signup_button}/></div>     
                                </div>
                                <div className='login233 flex-row-center'>
                                        {/* <div>forgot your password ?</div> */}
                                        <div onClick={go_to_signin}>Already have an account? Login</div>
                                </div>
                        </div>
                        <div className='login24 flex-row-center'>
                                <div className='flex-row-center'  onClick={handle_signup}>Register</div>
                        </div>
            </div>



        <div className='signup2 flex-col-center'>
            <div className='signup21'>Welcome Back!</div>
            <div className='signup22 flex-col-center'>
                <div>To keep connected with us</div>
                <div>login here</div>
            </div>
            <div className='signup23 flex-row-center'>
                <button className='btn' onClick={go_to_signin}>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Signup