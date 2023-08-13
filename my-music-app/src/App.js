import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


import { DashBoard }  from "./components/DashBoard";
import { TopBar } from "./components/TopBar";

function App() {
  const [visible, setVisible] = useState(true)
   const [isToggled, setIsToggled] = useState(false);

   const removeElement = () => {
    setVisible((prev) => !prev)
    setIsToggled((prev) => !prev);
  };

   return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <TopBar></TopBar>
      {visible && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <TextField id="outlined-basic" label="Username" variant="outlined" />
           <TextField id="outlined-basic" label="Password" variant="outlined" />
           <Button style={{backgroundColor: '#F1DABF'}} onClick={removeElement} variant="contained">Submit</Button>
         </div>
      )}
      { isToggled && <DashBoard />} 
    </div>

   );
}

export default App;
