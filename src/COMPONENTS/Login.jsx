import React, { useRef, useState } from 'react'

import './Login.css'
import { useDispatch } from 'react-redux'

import set_current_page from '../REDUX/action_function/slide_auth_action_fun'

import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { FaLock } from "react-icons/fa6";

import ReactLoading from 'react-loading';

import { useAlert } from 'react-alert'

import validator from 'validator';
import { axiosInstance, login_api } from '../api_list';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';





// const axiosinstance = axios.create()

const Login = () => {

        const navigate = useNavigate()
        const dispatch = useDispatch()
        const alert = useAlert()
        const emailref=useRef(null)
        const passwordref = useRef(null)

        const [input_type , set_type] = useState("password")

        const [email , setemail] = useState(null) 
        const [password , setpassword] = useState(null) 

        const [loading , setloading] = useState(false)




        function go_to_signup(){
        dispatch( set_current_page("signup") ) 
                   
        }


        function move_to_next_input_tag(e){

                if(email=='' || email==null){return}
                if(e.key=='Enter'){
                        passwordref.current.focus()
                }
        }

        function move_to_submit_button(e){
                if(password=='' || password==null){return}
                if(e.key=='Enter'){
                       handle_submit()
                }
        }




        async function handle_submit(){



                try {

                        console.log("subbiting the details" , email , password);

                setloading(true)

                if(email=='' || email==null || password=='' || password==null  || !validator.isEmail(email) ){
                setloading(false)
                alert.show("pls enter valid creds")
                return
                }

                const {data} = await axiosInstance.post(   login_api , { email : email , password : password })
                console.log(data);
                if(data.error){  alert.show(data.mssg) ; return setloading(false)   }
                
                if(!data.error) {
                        

                        //////////////    navigate to new link
                        alert.show(data.mssg)
                        setloading(false)
                        navigate("/profile/sheet")



                }

                        
                } catch (error) {

                        // console.log(error);
                        console.log("error at hasndle login in frontend");
                        setloading(false)
                        
                }
                



                setloading(false)
                return 



        }


        
    

  return (
    <div  className='login flex-row-center'>
            <div className='login1 flex-col-center'>
                <div className='signup21'>Hello, Friends!</div>
                <div className='signup22 flex-col-center'>
                        <div>Enter you personal details and</div>
                        <div>start journey with us</div>
                </div>
                <div className='signup23 flex-row-center'>
                        <button className='btn'  onClick={go_to_signup}>Sign up</button>
                </div>
             </div>



            <div className='login2 flex-col-center'>
                        <div className='login21 flex-row-center'>Sign in</div>
                        <div className='login22 flex-row-center'>
                                <div className='auth_icon flex-row-center'><FaGoogle></FaGoogle></div>
                                <div className='auth_icon flex-row-center'><FaGithub></FaGithub></div>
                                <div className='auth_icon flex-row-center'><FaFacebookF></FaFacebookF></div>
                        </div>
                        <div className='login25 flex-row-center'>or use your email_id</div>

                        <div className='login23 flex-col-center'>
                                <div  className='login231 flex-row-center'>
                                        <div className='login2311 flex-row-center'><IoMail /></div>
                                        <div className='login2312 flex-row-center'><input type="text" placeholder='Email' className='auth_input' onKeyDown={move_to_next_input_tag} onChange={(e)=>{setemail(e.target.value)}}/></div>
                                </div>
                                <div className='login232 flex-row-center'>
                                         <div className='login2311 flex-row-center'><FaLock onMouseEnter={()=>{set_type("text")}} onMouseLeave={()=>{set_type("password")} }/></div>
                                        <div className='login2312 flex-row-center'><input type={input_type} placeholder='Password' className='auth_input' ref={passwordref}  onKeyDown={move_to_submit_button} onChange={(e)=>{setpassword(e.target.value)}} /></div>     
                                </div>
                                <div className='login233 flex-row-center'>
                                        <div>forgot your password ?</div>
                                        <div onClick={go_to_signup}>Create new acccount!</div>
                                </div>
                        </div>
                        <div className='login24 flex-row-center'>
                              { loading ? <div className='flex-row-center'> <ReactLoading type={'bubbles'} color='grey'/> </div>  :  <div className='flex-row-center'  onClick={handle_submit}>Login</div>  }
                        </div>
            </div>

</div>
  )
}

export default Login