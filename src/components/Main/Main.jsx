
import React, { useContext, useEffect, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

function Main() {
  const { recentPrompt, showResult, loading, resultData, input, setInput, onSent } = useContext(Context);

  useEffect(() => {
     Prism.highlightAll()
  }, [resultData]);
  

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                // Render formattedResultData with dark background for code snippet
                <div  dangerouslySetInnerHTML={{ __html: resultData }}></div>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img
                onClick={() => onSent()}
                src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double check its response
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;



// import React, { useContext, useEffect } from 'react';
// import './Main.css';
// import { assets } from '../../assets/assets';
// import { Context } from '../../context/Context';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';

// function Main() {
//   const { recentPrompt, showResult, loading, resultData, input, setInput, onSent } = useContext(Context);
// const Data =resultData;
//   useEffect(() => {
//     Prism.highlightAll();
//   }, [Data]);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>
//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p><span>Hello, Dev</span></p>
//               <p>How can I help you today</p>
//             </div>
//             <div className="cards">
//               <div className="card">
//                 <p>Suggest beautiful places to see on an upcoming road trip</p>
//                 <img src={assets.compass_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>Briefly summarize this concept: urban planning</p>
//                 <img src={assets.bulb_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>Brainstorm team bonding activities for our work retreat</p>
//                 <img src={assets.message_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>Improve the readability of the following code</p>
//                 <img src={assets.code_icon} alt="" />
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className='result'>
//             <div className="result-title">
//               <img src={assets.user_icon} alt="" />
//               <p>{recentPrompt}</p>
//             </div>

//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="" />
//               {loading ? (
//                 <div className="loader">
//                   <hr />
//                   <hr />
//                   <hr />
//                 </div>
//               ) : (
//                 // Render resultData with dark background for code snippet
//                 <div dangerouslySetInnerHTML={{ __html: Data }}></div>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder='Enter a prompt here' />
//             <div>
//               <img src={assets.gallery_icon} alt="" />
//               <img src={assets.mic_icon} alt="" />
//               {input ? <img
//                 onClick={() => onSent()}
//                 src={assets.send_icon} alt="" /> : null}
//             </div>
//           </div>
//           <p className='bottom-info'>
//             Gemini may display inaccurate info, including about people, so double check its response
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;



/*import React, { useContext, useEffect } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

function Main() {

    const { recentPrompt, showResult, loading, resultData, input, setInput, onSent } = useContext(Context)

    useEffect(() => {
        Prism.highlightAll();
    }, [resultData]);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Breifly summarize this concept: urban planing</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>

                    </> : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                // Render resultData with dark background for code snippet
                                // <div dangerouslySetInnerHTML={{ __html: resultData.replace(/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g, '<pre class="code-snippet "><code >$2</code></pre>') }}></div>
                                <div dangerouslySetInnerHTML={{ __html: resultData }}></div>
                            )}
                        </div>
                    </div>}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img
                                onClick={() => onSent()}
                                src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double check its response
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
*/





/*import React, { useContext } from 'react'

import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

const {recentPrompt,showResult, loading,resultData, input, setInput, onSent} = useContext(Context)


  return (
    <>
       <div className="main">
        <div className="nav">
           <p>Gemini</p> 
           <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult
          ?<>
           <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarize this concept: urban planing</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
          
          </> : <div className='result'>
                 <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                 </div>

                 <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                    :<div dangerouslySetInnerHTML={{__html:resultData}}></div>
                }
                    
                 </div>
            </div>}

           

            <div className="main-bottom">
                <div className="search-box">
                    <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                     type="text" 
                     placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input? <img 
                        onClick={() => onSent()}
                        src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info,including about people,so double check its response
                </p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Main

*/