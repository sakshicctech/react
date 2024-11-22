import  { useState,useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "!@#$%^&*()_+";
    }

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => passwordGenerator(),[length, numberAllowed, charAllowed,passwordGenerator]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(passwordRef.current.value);
  } ,[passwordRef]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className="outline-none w-full py-1 px-3" placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              return setLength(e.target.value)}} />
            <label >Length : {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed(prev => !prev)} />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => setCharAllowed(prev => !prev)} />
              <label htmlFor="charInput">Characters</label>
          </div>
        </div>  
      </div>

      
      
    </>
  )
}

export default App
