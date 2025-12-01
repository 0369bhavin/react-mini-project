import './App.css';
import Button from './component/Button';
import Colorbox from'./component/Colorbox';
import { useState } from "react";
function App() {
  const color = ["PINK", "BLUE", "RED","ORANGE" ,"TOMATO","LIGHTCORAL"];
const[selectedcolor,Setselectedcolor]=useState('red')

  return (
  
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-center mb-4">🎨 color switcher</h1>
      {/*buttion */}
      <div className="flex flex-row gap-4">
        {color.map((item) => (
          <Button  key={item} color={item} Setselectedcolor={Setselectedcolor}  >
            {item}
            </Button>
            
        ))}
      </div>
      <Colorbox color={selectedcolor}/>
    </div>

   
    
  );
  
}

export default App;