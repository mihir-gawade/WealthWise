import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [invested,setInvested]=useState(0);
  const [years,setYears]=useState(0);
  const [returns,setReturns]=useState(0);
  const [finalamount,setFinalamount]=useState(0);

  let calculate = (e) => {

    let months=years*12;
    let i=(returns/12)/100;
    let finalamount = ((invested)*(1+i)*((Math.pow((1+i),months)-1)/i));
    // let finalamount = returns*10;

    setFinalamount(finalamount.toFixed(1));

    let numToWords = n => {
      let a = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
      ];
      let b = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
      ];
      let g = [
        '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
        'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
      ];
      // this part is really nasty still
      // it might edit this again later to show how Monoids could fix this up
      let makeGroup = ([ones,tens,huns]) => {
        return [
          num(huns) === 0 ? '' : a[huns] + ' hundred ',
          num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
          a[tens+ones] || a[ones]
        ].join('');
      };
      // "thousands" constructor; no real good names for this, i guess
      let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
      // execute !
      if (typeof n === 'number') return numToWords(String(n));
      if (n === '0')             return 'zero';
      return comp (chunk(3)) (reverse) (arr(n))
        .map(makeGroup)
        .map(thousand)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(' ');
    };





  }

  


  

  return ( 
    <>

    <div className='main'>

      <div className='i1'>

        <div className='p1'>

          <p>MONTHLY INVESTMENT</p>
          <input 

          placeholder='Monthly Investment'
          
          id='inp1' 
          type="number" 
          value={invested}
          onChange={(e) => setInvested(e.target.value)}
          />
          </div>
        <div className='p2'>

        <p>ANNUAL RETURNS</p>
          <input id='inp2' placeholder='Annual Returns' type="number" value={returns} onChange={(e) => setReturns(e.target.value)} />

        </div>
        <div className='p3'>
          
        <p>NUMBER OF YEARS</p>
          <input id='inp1'  placeholder='Number of Years' type="number" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
        <div className='p4'>
          <button onClick={calculate}>CALCULATE</button>
        </div>

      </div>
      <div className='i3'></div>
      <div className='i2'>

      


        <p >&nbsp;&nbsp;INVESTED &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; : Rs {Math.round(invested*years*12)}</p>
        <p >&nbsp;&nbsp;RETURNS   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  : Rs {(Math.round(finalamount))-Math.round(invested*years*12)}</p>
        <p className='final-val'>Rs {(Math.round(finalamount))}</p>

      </div>

      

    </div>
    

    
    
    
    </>

    
  )
}

export default App
