import React from "react"
import ReactDOM  from "react-dom/client"

import "./index.css"
// Think Of Component As Function
// JSX Syntax 
function Main(){
    return (
    <React.Fragment>
    <div>
        <h1>My First Component</h1><br></br>
        <h3>Hello World</h3>
        <ul>
            <li>
                <a href="#">Hello People</a>
            </li>
        </ul>
    </div>
    <h3>Hello People</h3>
    <input type="text" name="" id=""/>
    </React.Fragment>
    )
} 

// Nested Components
//   return <div>
//         <Person/>
//         <Message/>
// </div>/ function Greeting(){
// //   
// }

// function Person(){
//     return <h2>Hi I am Riyaan</h2>
// }

// function Message(){
//     return <p>This is My Message</p>
// }

// function Main(){
//     return React.createElement('div',
//     {},
//     React.createElement('h2',{},"Hello World")
//     )
// }

// Book-List Application
const BookList = () =>{
    return(
        <section className="booklist">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

const Book=()=>{
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image=()=> (<img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg" alt="The Psychology of Money"/>)
const Title=()=> <h2>The Psychology Of Money</h2>
const Author=()=>{
    const inlineHeadingStyles = {
        color:`#617d98`,
        fontSize:`0.75rem`,
        marginTop:`0.5rem`
    }
    return <h4 style={inlineHeadingStyles}>Morgan Housel </h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList/>)



