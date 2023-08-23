import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Stickbar = () => {
  return (
    <div className="stickbar">
      <a href="#">
        <KeyboardDoubleArrowUpIcon
          sx={{
            backgroundColor: "white",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            position: "fixed",
            right: "5vw",
            bottom: "5vw",
            color: "#5221e6"
          }}
        />
      </a>
    </div>
  );
};

export default Stickbar;
