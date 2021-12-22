import React from "react";
import "./footer.css";
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <h6 className="hSix">Counter Delivery, Carter Beach</h6>
        <h6 className="hSix">PostCentre, Westport</h6>
      </div>
      <div className="footerContainer">
        <h3 className="hThree">Abount</h3>
        <h6 className="hSix">Company</h6>
        <h6 className="hSix">Team</h6>
        <h6 className="hSix">Careers</h6>
        <h6 className="hSix">Blog</h6>
      </div>
      <div className="footerContainer">
        <h3 className="hThree">Support</h3>
        <h6 className="hSix">Help Centers</h6>
        <h6 className="hSix">Cancellation</h6>
        <h6 className="hSix">Neighborhood Support</h6>
        <h6 className="hSix">Trust & Safety</h6>
      </div>
      <div className="footerContainer">
        <h3 className="hThree">Address</h3>
        <h6 className="hSix">Counter Delivery, Carters Beach</h6>
        <h6 className="hSix">Post Center, Westport</h6>

        <Facebook className="hSix" />
        <Instagram className="hSix" />
        <WhatsApp className="hSix" />
      </div>
    </div>
  );
}
