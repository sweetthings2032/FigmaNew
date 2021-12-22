import React from "react";
import "./sidebar.css";
import {
  Search,
  NotificationsOutlined,
  QuestionAnswerOutlined,
  SaveAltOutlined,
  SdStorageOutlined,
  BarChartOutlined,
  BookOutlined,
  ListOutlined,
} from "@material-ui/icons";

import { PersonOutline } from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="profil">
            <img
              src={require("./boss.png")}
              alt="profilepicture"
              className="profilPic"
            />
            <div className="profilname">
              <h3 className="profilname">Alex Assenmacher</h3>
              <h4 className="profilname">Home Buyer</h4>
              <button className="profilbtn">Edit Profile</button>
            </div>
          </div>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              Profile
              <PersonOutline />
            </li>
            <hr />
            <li className="sidebarListItem">
              My listing
              <ListOutlined />
            </li>
            <hr />
            <li className="sidebarListItem">
              Saved home
              <SaveAltOutlined />
            </li>{" "}
            <hr />
            <li className="sidebarListItem">
              Saved search
              <SdStorageOutlined />
            </li>{" "}
            <hr />
            <li className="sidebarListItem">
              Messages
              <QuestionAnswerOutlined />
            </li>{" "}
            <hr />
            <li className="sidebarListItem">
              Notification
              <NotificationsOutlined />
            </li>{" "}
            <hr />
            <li className="sidebarListItem">
              Billing
              <PersonOutline />
            </li>{" "}
            <hr />
            <li className="sidebarListItem active">
              Analytics
              <BarChartOutlined />
            </li>{" "}
            <hr />
            <li className="sidebarListItem">
              Blog
              <BookOutlined />
            </li>{" "}
            <hr />
            <li className="profiltlink">
              <div className="profliLinkTitle">Profile link</div>
              <form
                className="example"
                action=""
                style={{ margin: "auto", maxWidth: 300 }}
              >
                <input type="text" placeholder="Search.." name="search2" />
                <button type="submit">
                  <i className="fa fa-search" />
                  <Search />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
