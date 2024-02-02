import React, { useState } from 'react'


import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';



import './Open_sheet_modal.css'
import { useDispatch, useSelector } from 'react-redux';
import modal_action_fun from '../REDUX/action_function/modal_action';
import { axiosInstance, is_sheet_exist_api } from '../api_list';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';



const Open_sheet_modal = ( ) => {

    const alert = useAlert()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  { open_sheet_modal} = useSelector(state=>state.open_sheet_modal)

    // console.log(open_sheet_modal , "lkl");

    // const all_sheet_modal = false

    const [isloading , setloading] = useState(false)

    


    const options = { 

        "className" : 'pop' ,
        "aria-labelledby" : "modal-modal-title" ,
        "aria-describedby" : "modal-modal-description" ,
        "slotProps" : {
            "backdrop": {
            "timeout" : 500
                        }
                       } 
     }
   
      
     const [sheet_id , set_id] = useState(null)


     function handlechange(e){

                if(e.target.value==""){   return set_id(null)   }

                set_id(e.target.value)




     }


    async function handlesubmit(){
             try {

                if(sheet_id==null) { return alert.show("pls enter some sheet id") }

                setloading(true)
                const {data} = await axiosInstance.post( is_sheet_exist_api , { sheet_id } )
                setloading(false)

                console.log(data);

                if(data.error) { return alert.show(data.mssg) }

                if(data.loginerror) { return alert.show(data.mssg) }

                if(!data.error) {    navigate(`/sheet/${sheet_id}`)       }
                
             } catch (error) {

                alert.show("error at frontend part")
                
             }
     }






  return (

                
        <Modal     open={ open_sheet_modal }  {...options} className='os-modal'>
              <Fade in={ open_sheet_modal } >
                        <div className='os-modal1' >
                                    <div  className='os-modal11  flex-row-center'>Enter Sheet_id</div>
                                    <div className='os-modal12  flex-row-center'>  
                                                  {isloading ? <>loader.....</>   :  <input type="text"  onChange={handlechange} /> }
                                     </div>
                                    <div  className='os-modal13 flex-row-center'>
                                                <div  className='os-modal131'  onClick={handlesubmit}>open sheet</div>
                                                <div  className='os-modal132'    onClick={  ()=>{  dispatch(modal_action_fun("open_sheet"  , false )  )   }}>close pop-up</div>
                                    </div>
                        </div>
             </Fade>
        </Modal>
    
  )
}

export default Open_sheet_modal