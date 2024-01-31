import React from 'react'


import './Sheet.css'
import Login from '../COMPONENTS/Login';
import { HiMenu } from "react-icons/hi";

import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

import boy_image from '../assests/boy_image.jpg'

const Sheet = () => {
  return (
    <div className='sheet flex-row-center'>
              <div className='sheet1 flex-col-center'>
                        <div className='sheet11 flex-row-center'>
                                <div className='sheet111 flex-row-center'   >
                                        SMART_SHEET.com
                                </div>
                                <div className='sheet112 flex-row-end'>
                                        <div  className='  flex-row-center  navbar-button'>All_sheets</div>
                                        <div className='  flex-row-center  navbar-button'>My_sheets</div>
                                        <div className='  flex-row-center  navbar-button'>Profile</div>
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
                                                                                        <div className='mys-icon'>my_sheets</div>
                                                                                        <div className='cns-icon'>create new sheet</div>
                                                                                        <div className='als-icon'>all_sheets</div>
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
  )
}

export default Sheet