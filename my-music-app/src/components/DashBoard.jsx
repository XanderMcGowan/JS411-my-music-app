import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function valuetext(value) {
  return `${value}°C`;
}

export const DashBoard = () => {
  const [quality, setQuality] = React.useState("");
  const [volume, setVolume] = React.useState("");
  const [online, setOnline] = React.useState(false);

  const qualityChange = (event) => {
    setQuality(event.target.value);
  };

  const volumeChange= (event) => {
    setVolume(event.target.value);
  };

    const onlineChange= (event) => {
    setOnline(true);
  };


  return (
    <div>
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "25vh",
          width: "20vw",
          margin: "5vw",
          borderRadius: "15px",
          boxShadow: "-5px 5px 5px 1px #69728C",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Online"
            onChange={onlineChange}
          />
        </FormGroup>
      </div>
      <div
        style={{
          height: "25vh",
          width: "20vw",
          margin: "5vw",
          borderRadius: "15px",
          boxShadow: "-5px 5px 5px 1px #69728C",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={10}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            min={10}
            max={110}
            onChange={volumeChange}
          />
        </Box>
      </div>
      <div
        style={{
          height: "25vh",
          width: "20vw",
          margin: "5vw",
          borderRadius: "15px",
          boxShadow: "-5px 5px 5px 1px #69728C",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quality</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={quality}
              label="Quality"
              onChange={qualityChange}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
      <h2>
        Notifications: 
        { quality && <p>Music quality is degraded. Increase quality if your connection allows it.</p>} 
        { volume && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
        { online && <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
      </h2>
    </div>
  );
};
