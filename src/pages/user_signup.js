import React, { useState } from 'react';
import {} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import {auth,provider} from '../components/googlesignin/config'
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
 
import {
    HeadTitle,
    PageContainer,
    ContentContainer,
    FormGroup,
    Input,
    Label,
    Button,
    HeadDescription
  } from '../components/Styles';
import { useEffect } from 'react';
  
  const Signup = () => {
    
    // const Signup = () => {
    //     const handleSignup = (e) => {
    //       e.preventDefault();
    //       // Perform Signup logic here
    //     };
    const [value,setValue] = useState('')
    const navigate = useNavigate();
    const handleClick = () => {
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
      })

      

    }

    useEffect(()=>{
      setValue(localStorage.getItem('email'))
    }, [])


    return (
        <div>
        <NavbarHead />
        <PageContainer>
            <ContentContainer>
            <HeadTitle style={{ marginTop: '130px' }}>User Signup</HeadTitle>
            {/* <form onSubmit={handleSignup}> */}
            
        <form style={{ marginTop: '50px',marginLeft: '615px' }}>
            <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              id="name"
              name="name"
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              id="pw"
              name="pw"
            />
          </FormGroup>

          <HeadDescription style={{ marginLeft: '20px'}}>Already an User? <a href ="/login" >Login!</a> </HeadDescription>
          <Button style={{ marginLeft: '110px',marginTop: '50px' }} type="submit">Signup</Button>
      </form>
      <div style={{ marginTop: '20px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           {value?navigate('/', {}):
           <Button style={{textAlign: 'center'}} onClick={handleClick} >Sign In with Google</Button>}
          </div>
            </ContentContainer>
            <FooterBottom />
        </PageContainer>
        </div>
    );
};

export default Signup;
