import React from "react"
import { createRoot } from "react-dom/client"
import Main from "./main.jsx"

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
