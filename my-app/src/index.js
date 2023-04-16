import React from "react"
import ReactDOM  from "react-dom/client"

// Think Of Component As Function
function Main(){
    return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Main/>)



