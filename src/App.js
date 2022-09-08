import React, {useState} from 'react';
import './App.scss';
import ARRAY_COLORS from './colors'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'


function App() {
    const [quote,setQuote] =useState("life is strange ");
    const [author,setAuthor]=useState("me");
    // const [randomColor,setRandomColor]=useState("rgba(235, 64, 52)");
const [mainColor,setMainColor]=useState('#01949a');
const element=<FontAwesomeIcon icon={faTwitter}/>;


const changeQuoteAndAuthor = async() => {
    try {
        const resp = await fetch("https://api.quotable.io/random?maxLength=50");
        const data = await resp.json();
        console.log(data.author, data.content);
        setQuote(data.content);
        setAuthor(data.author);
        let rnd=Math.floor(Math.random()*230);
        setMainColor(ARRAY_COLORS[rnd])

    } catch (e) {
        console.log("error", e)
    }
}    
//  const getRandomColor=()=>{
// let rnd=Math.floor(Math.random()*20);
// // setRandomColor(rnd);

// setRandomColor(colors[rnd])
// //     let o = Math.round;
// //     let r = Math.random;
// //      let  s = 255;
// //    let rgb='rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// //  setRandomColor(rgb);
// //  document.body.style.background = setRandomColor;
// // console.log(setRandomColor);
// }
// const changeStyles=()=>{
//     getRandomColor();
    
// }
    return ( 
    <div className = "App" >
        <header className = "App-header" style={{backgroundColor:mainColor, color:mainColor}}>
            <div id="quote-box">
                {/* <p> Random color is {randomColor}</p> */}
                 <p id="text">{quote}  </p>
                 <p id="author">- {author}</p>
                 <div className='buttons'>
                    <a className="button" id="tweet-quote" style={{backgroundColor:mainColor}} 
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${quote} -${author}`)}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <button id="new-quote" style={{backgroundColor:mainColor}} onClick={()=>{changeQuoteAndAuthor();/*getRandomColor()*/}}>Change quote
                    </button>
                 </div>

            </div>
           
        </header> 
         </div>
    );
}

export default App;