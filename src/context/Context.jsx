



import { createContext, useState, useEffect } from "react";
import runChat from "../config/gemini";
import * as marked from 'marked';
 // Destructured import for safe Markdown parsing

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 80 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts(prev => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }



    // Parse Markdown using marked for safe formatting (optional)
    const formattedResponse = marked.parse(response);

    // Display the formatted response (implementation depends on your UI)
    // console.log(formattedResponse); // Replace with UI update logic

    // You can choose to set either the original or formatted response based on your needs:
    // Set formattedResponse if available, otherwise use original response

    let newResponseArray = formattedResponse.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {

      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ")

    }

    
    setResultData(formattedResponse || response);
    Prism.highlightAll();
    setLoading(false);
    setInput("");
  };

  // ... existing code

  return (
    <Context.Provider value={{
      prevPrompts,
      setPrevPrompts,
      recentPrompt,
      setRecentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput,
      onSent,
      newChat,
    }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;