import React, { useEffect, useState } from 'react'


import './Sheet.css'
import Login from '../COMPONENTS/Login';
import { HiMenu } from "react-icons/hi";

import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

import boy_image from '../assests/boy_image.jpg'
import Profile_modal from '../MODAL_components/Profile_modal';
import Create_shet_modal from '../MODAL_components/Create_sheet_modal';
import axios from 'axios';
import { axiosInstance, who_am_i_api } from '../api_list';
import { useAlert } from 'react-alert';
import { useDispatch , useSelector } from 'react-redux';
import set_my_info_action_fun from '../REDUX/action_function/my_info_action_fun';
import login_action_fun from '../REDUX/action_function/log_in_action';
import modal_action_fun from '../REDUX/action_function/modal_action';
import All_sheet_modal from '../MODAL_components/All_sheet_modal';
import My_sheet_modal from '../MODAL_components/My_sheet_modal';
import Open_sheet_modal from '../MODAL_components/Open_sheet_modal';




const Sheet = () => {

        const alert = useAlert()
        const dispatch = useDispatch()
      
               const {isloggedin} = useSelector(state=>state.isloggedin)
        //        const  abc = useSelector(state=>state.profile_modal)

               


//         dispatch(modal_action_fun("profile"  , true))
        






        useEffect(()=>{
                who_i_am()
        } , [])







//   this function is used to check whether i am logged in or not , then it set my info as well as login state to redux according to response received from backend
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      async  function who_i_am(){
                try {
                        
                        const {data} = await axiosInstance.get( who_am_i_api  )
                        console.log(    data , "data"   );
                
                        if(data.error){  return alert.show("eror to fetch your details")   }

                        if(  data.loginerror) { return dispatch(login_action_fun(false))  }

                        dispatch(login_action_fun(true))

                        dispatch(  set_my_info_action_fun( data.info )  )



                     

                        



                        
                } catch (error) {
                        dispatch(login_action_fun(false))  
                        console.log("eror to get your details in frontend in sheet.jsx");
                        
                }
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








  return (



        isloggedin ? 

        


    <div className='sheet flex-row-center'>
 
              <Profile_modal  />
              <Create_shet_modal  />
              <All_sheet_modal/>
              <My_sheet_modal/>
              <Open_sheet_modal/>

              <div className='sheet1 flex-col-center'>
                        <div className='sheet11 flex-row-center'>
                                <div className='sheet111 flex-row-center'   >
                                        SMART_SHEET.com
                                </div>
                                <div className='sheet112 flex-row-end'>
                                        <div  className='  flex-row-center  navbar-button' onClick={()=>{dispatch(modal_action_fun("all_sheet" , true))}} >All_sheets</div>
                                        <div className='  flex-row-center  navbar-button'  onClick={()=>{dispatch(modal_action_fun("my_sheet"  , true))}}>My_sheets</div>
                                        <div className='  flex-row-center  navbar-button'   onClick={()=>{dispatch(modal_action_fun("profile"  , true))}} >Profile</div>
                                        <div className='  flex-row-center  navbar-button'>Logout</div>
                                        <div  className='burgermenu flex-row-center'><HiMenu /></div>
                                </div>
                        </div>
                        <div className='sheet12 flex-row-center'>
                                 <div className='sheet121 flex-row-center'>
                                          <div  className='sheet1211'>
                                                        <div className='sheet12111'> Sheet <br /> Management </div>
                                                        <div className='sheet12112'>Time to get organised</div>
                                                        <div className='sheet12113'> 
                                                                        <div className='sheet121131'></div> 
                                                                        <div className='sheet121132'></div> 
                                                                        <div className='sheet121133'></div> 
                                                                        <div className='sheet121134'></div> 
                                                        </div>
                                                        <div className='sheet12114'>
                                                                         You wouldn't fly without an altimeter, <br /> speedometer, radar, or aircraft controller. <br /> Why work without a cool data management tool?
                                                        </div>
                                                        <div className='sheet12115'>
                                                                        <div className='sheet121151'>
                                                                                        <div className='mys-icon'   onClick={()=>{dispatch(modal_action_fun("open_sheet"  , true))}}>open_sheet</div>
                                                                                        <div className='cns-icon'  onClick={()=>{dispatch(modal_action_fun("create_sheet"  , true))  }}>create new sheet</div>
                                                                                        {/* <div className='als-icon'>all_sheets</div> */}
                                                                        </div>
                                                        </div>
                                          </div>
                                 </div>
                                 <div className='sheet122  flex-row-center'>
                                        <img src={boy_image} alt="boy image here" className='boy_image' />
                                 </div>
                        </div>

                        <div className='sheet13 flex-row-center'>
                                <div className='sheet131'><div>copyright@smart_sheet.com</div></div>
                                <div className='sheet132 flex-row-center'>
                                        <div  className='sm-icon'><FaInstagram /></div>
                                        <div className='sm-icon'><FaGithubSquare /></div>
                                        <div className='sm-icon'><FaFacebookSquare /></div>
                                </div>
                                <div className='sheet133'>
                                        <div className='sm-icon' ><IoIosInformationCircle /></div>
                                </div>
                        </div>
              </div>
    </div>

         :  <div>not auth</div>
  


  )
}

export default Sheet