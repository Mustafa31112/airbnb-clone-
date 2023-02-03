import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Banner.css";
//import { Search } from "@mui/icons-material";
import Search from "./Search";


function Banner() {
  const [showSearch, setShowSearch] = useState
  (false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)}
        
        className="banner_searchButton" variant="outlined">
          {showSearch
          ? "Hide" : 
          "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
