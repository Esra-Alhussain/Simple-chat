import logo from './logo.svg';
import './App.css';
import Chat from "./components/Chat";
import Form from "./components/Form";
import {useState} from 'react';

 //thisChatMessages is from the chat component
function App() {
  const [messages, setMessages] = useState(
    "Hello, my name is John, What is your name?"
  );

  //passing call back function from the parent to the child
  //capture input values
  const [textInputTemp, textInput, setTextInput]= useState('');

    function updateInputText(e){
    
    const newValue= e.target.value;
    setTextInput(newValue);
   }

   //button click
   function handleAsk(e){
    //any operations 
    setMessages(textInput);
   }

  return (
    <div className="App">
     
      <Chat chat1={messages}/>
      <Form 
             textInputValue={textInputTemp}
             triggerAsk={messages}
             triggerInput={updateInputText}/>
    </div>
  );
}

export default App;

