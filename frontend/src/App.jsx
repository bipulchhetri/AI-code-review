// import React, { useEffect, useState } from 'react';
// import  axios from "axios";
// import "prismjs/themes/prism-tomorrow.css";

// import prism from "prismjs";
// import Editor from "react-simple-code-editor"
// // import "highlight.js/styles/github-dark.css";
// // import rehypeHighlight from "rehype-highlight";


// import './App.css';
// const App = () => {
// const [count,setCount]=useState(0);
// const[code,setCode]=useState(`function sum()
//   {
//   return 1+1}`)
//   const [review,setReview]=useState('');
//   useEffect(() => {
//     prism.highlightAll()
//   }, [])

//   async function reviewCode(){
//     const response=await axios.post('http://localhost:3000/ai/get-review',{code})
//   setReview(response.data);
//   }
//   return (
//    <>
//    <main>
//     <div className="left">
//     <div className="code">
//     <Editor
//               value={code}
//               onValueChange={code => setCode(code)}
//               highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
//               padding={10}
//               style={{
//                 fontFamily: '"Fira code", "Fira Mono", monospace',
//                 fontSize: 16,
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//                 height: "100%",
//                 width: "100%"
//               }}
//             />
  
//     <div onClick={reviewCode}>
//       <button>Review</button>
//     </div>
//     </div>
//     </div>
//     <div className="right">
  
//      {review}
    
//     </div>
//    </main>
//    </>
//   )
// }
// // function sum(){
// //   return a+b;
// // }
// // const result=sum(4,6);
// // console.log(sum);
// export default App


import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'
import Hero from './component/Hero'
import Footer from './component/Footer'

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('https://ai-code-review-iyig.onrender.com/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
   <Hero/>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
      <Footer/>
    </>
  )
}



export default App