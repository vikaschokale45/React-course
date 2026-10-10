import {useState,useCallback,useEffect,useRef} from 'react';

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charsAllowed,setCharsAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) {
      str = str + "0123456789";
    }
    if(charsAllowed){
      str = str + "!@#$%^&*()+=[]{}~"
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charsAllowed,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charsAllowed,passwordGenerator]);

  return (
    <>
      <div className="w-full mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-600 pb-4">
        <h1 className="text-center text-2xl" >Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-2 px-3 rounded-full" placeholder="password" readOnly ref={passwordRef} />
          <button className="outline-none py-2 px-2 rounded-full bg-blue-600 text-white shrink-0" onClick={copyPassword}>Copy</button>
        </div>
        <div className="flex justify-evenly text-sm gap-x-2 shrink">
          <div className="flex items-center gap-x-1 shrink">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{
              setLength(e.target.value);
            }} />
            <label>Length:{length}</label>
          <div className="flex items-center gap-x-1 ml-4 shrink" >
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label>Numbers</label>
          <div className="flex items-center gap-x-1 ml-4 shrink">
            <input type="checkbox" defaultChecked={charsAllowed} id="characterInput" onChange={()=>{
              setCharsAllowed((prev)=>!prev)
            }} />
            <label>Characters</label>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
