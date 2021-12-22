import React from "react";
import "./topbar.css";
import { Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWraper">
        <div className="topleft">
          <div>
            <form
              className="example"
              action="/action_page.php"
              style={{ margin: "auto", maxWidth: 300 }}
            >
              <input type="text" placeholder="Search.." name="search2" />
              <button type="submit">
                <i className="fa fa-search" />
                <Search />
              </button>
            </form>
          </div>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">Udwell Now</div>
          <div className="topbarIconContainer">Sell Properties</div>
        </div>
      </div>
    </div>
  );
}
