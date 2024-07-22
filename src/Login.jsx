import React, { useState } from "react"
import styled from "styled-components"
import background from "./assets/back-login.jpg"
import googleIcon from "./assets/google.svg"

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center;
`;
const Content = styled.div`
  width: 280px;
  height: 400px;
  background: rgba(203, 216, 44, 0.24);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(203, 216, 44, 0.45);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  width: 90%;
  height: 60%;
  padding: 7px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3%;
`;
const Title = styled.label`
  letter-spacing: 0.2em;
  font-size: 1.4em;
  text-align: center;
  color: #F8EDE3;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  -webkit-text-stroke: 0.5px black;
  margin-bottom: 10%;
`;
const BoxInput = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 13%;
  gap: 5px;
`;
const Input = styled.input`
  background-color: rgb(230, 255, 255);
  width: ${props => props.leng || ""};
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  height: 70%;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  &:focus{
    border: none;
    border-bottom: 2px solid black;
    outline: none;
  }
  &:invalid{
    color: red;
  }
`;
const Button = styled.a`
  text-decoration: none;
  color: black;
  border-radius: 5%;
  width: 20%;
  height: 70%;
  text-align: center;
  font-weight: bold;
  font-family: "Fira Sans Condensed", sans-serif;
  background: rgb(255, 186, 102);
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 186, 102, 0.48);
`;
const Submit = styled.button`
  width: 90%;
  background: rgba(235, 91, 0, 0.74);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.7px);
  -webkit-backdrop-filter: blur(2.7px);
  border: 1px solid rgba(235, 91, 0, 0.44);  
`;
const Hr = styled.div`
  width: 60%;
  border: 0.5px solid #F8EDE3;
`;
const P = styled.p`
  color: #F8EDE3;
  font-family: "Noto Sans", sans-serif;
  letter-spacing: 0.5em;
  font-size: 0.6em;
  margin: 4px;
`;
const Google = styled.div`
  border-radius: 16px;
  width: 85%;
  background-color: white;
  box-shadow: 0 4px 0 white;
  display: flex;
  gap: 5px;
  padding: 7px;
  height: 5%;
  justify-content: center;
  align-items: center;
  font-family: "Fira Sans Condensed", sans-serif;
`;
const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
const Text = styled.h5`
  font-size: 1em;
  text-align: center;
  height: 20px;
  font-family: sans-serif;
`;
const Span = styled.span`
  color: ${props => props.colors || ""};
`;

export default () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const handlerEmail = e => setEmail(e.target.value)
  const handlerOtp = e => setOtp(e.target.value)
  return (
    <Container>
      <Content>
        <Form>
          <Title htmlFor="title">Login <hr />Your Email</Title>
          <BoxInput>
            <Input
              type="email" 
              leng="90%"
              id="title" 
              required placeholder="Input Your Email"
              value={email}
              onChange={handlerEmail}
              name="email"
            />
          </BoxInput>
          <BoxInput>
            <Input
              type="text"
              maxLength="6"
              leng="60%"
              id="title"
              required placeholder="Input Your OTP"
              value={otp}
              onChange={handlerOtp}
              name="otp"
            />
            <Button>Send</Button>
          </BoxInput>
          <BoxInput>
            <Submit>Sign Up</Submit>
          </BoxInput>
        </Form>
        <Hr />
        <P>OR</P>
        <Google>
          <Icon src={googleIcon}/>
          <Text>
            <Span colors="#4286F7">G</Span>
            <Span colors="#EF4131">o</Span>
            <Span colors="#FFBE00">o</Span>
            <Span colors="#4286F7">g</Span>
            <Span colors="#31AA5A">l</Span>
            <Span colors="#EF4131">e</Span>
          </Text>
        </Google>
      </Content>
    </Container>
  )
}
