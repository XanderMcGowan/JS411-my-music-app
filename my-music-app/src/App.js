import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'

function App() {
  const [loggedIn, setloggedIn] = useState(false)

  return (
    <div className="App" style={ {display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{backgroundColor:'#118AB2'}}>
        <h1>My music app</h1>
      </div>
      <div style={{width:'25vw', display: 'inline-block'}}>

      <TextField id="filled-basic" label="Username" variant="filled" />
      <br></br>
      <TextField id="filled-basic" label="Password" variant="filled" />
      <br></br>
      <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}

export default App;
