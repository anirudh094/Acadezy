import React, { useEffect, useState } from "react";
import {auth,provider} from "../firebaseconfig";
import {signInWithPopup} from "firebase/auth";
import "../LoginPage/loginpage.css"
import { MDBBtn, MDBIcon} from 'mdb-react-ui-kit';

function SignINwithGoogle() {

    const [value,setValue] = useState('');
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    })

    const logout =()=>{
        localStorage.clear();
        window.location.reload();
    }

  return (
    <>
        {value?<p></p>:
            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} onClick={handleClick}>
                <MDBIcon fab icon='google' size="lg"/>
            </MDBBtn>
        }
        
    </>
  );
};

export default SignINwithGoogle;
