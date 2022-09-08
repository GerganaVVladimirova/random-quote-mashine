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
// const changeQuoteAndAuthor=()=>{
//     setQuote("life is soooo boring ");
//     setAuthor("Also me");

// }
// const colors=[
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857',
//   '#b7c8c2',
//   '#eca4b1',
//   '#e9dac4',
//   '#cfb2b0',
//   '#0e86d4',
//   '#055c9d',
//   '#003060',
//   '#01949a'

// ] 

const changeQuoteAndAuthor = async() => {
    try {
        const resp = await fetch("http://api.quotable.io/random?maxLength=50");
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