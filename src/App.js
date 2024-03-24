import React, { useState } from "react"


function App() {
  const[result, setResult] = useState(" ");
  const handleclick = (e) => {
    setResult((prev) => prev.concat(e.target.id))
  }
  const clearAll =() =>setResult(" ");
  const deleteOne = () =>setResult(result.slice(0, -1));
  const Calculate =() =>{
   try {
    setResult(eval(result).toString())
   } catch (error) {
     setResult("Error")
   }
  }

  return (
    <div className="bg-slate-200 h-screen p-4">
      <div className="rounded mx-auto max-w-[600px] min-h-[650px] shadow-xl shadow-black bg-cyan-800 my-6"> 
      <div className="text-5xl font-bold flex justify-center py-6 font-style: italic hover:text-white ">Calculator</div>
      <div className="bg-slate-800 max-w-96 p-4 rounded-md shadow-xl shadow-black mx-10 my-5">
        <input className="bg-black text-white rounded-md p-4 w-full font-semibold text-right tracking-wider borfer-2 border-[blue] shadow-inner shadow-sky-800 "
         type="text" value={result} disabled />
        <p className=" bg-slate-200 inline-block rounded-lg px-3 py-1 my-2 font-bold tracking wider border border-black">Brand Calculator</p>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={clearAll} type="Button" className="operator">AC</button> 
          <button onClick={deleteOne} type="Button" className="operator">DEL</button> 
          <button onClick={handleclick} type="Button" className="operator" id=".">.</button> 
          <button onClick={handleclick} type="Button" className="operator" id="/">/</button>  
          <button onClick={handleclick} type="Button" className="number" id="7">7</button> 
          <button onClick={handleclick} type="Button" className="number" id="8">8</button> 
          <button onClick={handleclick} type="Button" className="number" id="9">9</button> 
          <button onClick={handleclick} type="Button" className="operator" id="*">*</button>  
          <button onClick={handleclick} type="Button" className="number" id="4">4</button> 
          <button onClick={handleclick} type="Button" className="number" id="5">5</button> 
          <button onClick={handleclick} type="Button" className="number" id="6">6</button> 
          <button onClick={handleclick} type="Button" className="operator" id="-">-</button>  
          <button onClick={handleclick} type="Button" className="number" id="1">1</button> 
          <button onClick={handleclick} type="Button" className="number" id="2">2</button> 
          <button onClick={handleclick} type="Button" className="number" id="3">3</button> 
          <button onClick={handleclick} type="Button" className="operator" id="+">+</button>  
          <button onClick={handleclick} type="Button" className="number" id="00">00</button> 
          <button onClick={handleclick} type="Button" className="number" id="0">0</button> 
          <button onClick={Calculate} type="Button" className="operator col-span-2" id="=">=</button>  
        </div>
      </div>
       </div>
      
    </div>
  );
}

export default App;
