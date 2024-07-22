import React, { useEffect, useState } from "react"
import Login from "./Login.jsx"
//import io from "socket.io-client"
//const socket = io("/login")
import styled from "styled-components"
import ListChat from "./ListChat.jsx"

const Footer = styled.p`
  width: 100vw;
  height: 10vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
`;

const Main = () => {
/*  const [msg, setMsg] = useState("")
  socket.on("login", (data) => {
    console.log(data)
    setMsg(data)
  })*/
  return (
    <>
      <ListChat />
      <Footer>&copy; MaNu, {new Date().getFullYear()}</Footer>
    </>
  )
}

export default Main
