import React from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import { useState } from "react";
import Question from "./Question";
import Homepage from "./Homepage";
import {Routes,Route} from "react-router-dom"

function App() {
  const [question,setquestion]=useState([
        {
          question: "What is React?",
          options: [
            "A JavaScript library",
            "A CSS framework",
            "A PHP framework",
            "A SQL database"
          ],
          answer: "A JavaScript library"
        },
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Markup Language",
            "Hyperlinks and Text Markup Language"
          ],
          answer: "Hyper Text Markup Language"
        },
        {
          question: "Which tag is used to define an internal style sheet?",
          options: ["<css>", "<style>", "<script>", "<link>"],
          answer: "<style>"
        },
        {
          question: "Which property is used to change the background color?",
          options: ["color", "background-color", "bgcolor", "background"],
          answer: "background-color"
        },
        {
          question: "Which JavaScript function is used to parse a string to an integer?",
          options: ["parseInt()", "parse()", "toInt()", "StringToInt()"],
          answer: "parseInt()"
        },
        {
          question: "Which of the following is not a JavaScript data type?",
          options: ["String", "Number", "Boolean", "Float"],
          answer: "Float"
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Computer Style Sheets",
            "Cascading Simple Sheets"
          ],
          answer: "Cascading Style Sheets"
        },
        {
          question: "What is the correct syntax for a comment in JavaScript?",
          options: [
            "/* Comment */",
            "// Comment",
            "<!-- Comment -->",
            "' Comment"
          ],
          answer: "// Comment"
        },
        {
          question: "Which company developed React?",
          options: ["Google", "Microsoft", "Facebook", "Apple"],
          answer: "Facebook"
        },
        {
           question: "Which command is used to create a new React application?",
           options: [
            "npx create-react-app",
            "npm install react",
            "react-new-app",
            "npx react-app"
          ],
          answer: "npx create-react-app"
        }
  ])
  return (
    <div>
      <Routes>
       <Route path="/" element={<Homepage />}/>
       <Route path="/login" element={ <Login />}/>
       <Route path="/register" element={<Register />}/>
       <Route path="/dashboard" element={<Dashboard />}/>
       <Route path="/qusetion" element={<Question 
        question={question}
        setquestion={setquestion}
       />}/>
      
     
   
      </Routes>
        
      
    </div>

  );
}

export default App;
