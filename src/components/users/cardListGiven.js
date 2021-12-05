import React from "react";
import phoneNumber from "../../icons/phone.png";
import mail from "../../icons/mail.png";

const CardListGiven = ({
  userStyle,
  user: { cell, email, location, name, picture },
}) => {
  const str1 = cell.replace("-", "");
  const str2 = str1.replace("(", "");
  const strFinal = str2.replace(")", "");
  const urlPhone = "tel:" + strFinal;
  const urlEmail = "mailto:" + email;
  var colors = ["#E8CDAD", "#E1D3C7", "#A7B8A8"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <div className="card-background">
        <div className="rectangle11">
          <div
            className="rectangle12"
            style={{ backgroundColor: `${color}` }}
          ></div>
          <div className="groupe1">
            <div
              className="rectangle13"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <div className="rectangle14"></div>
          </div>
        </div>
        <div className="avatar-given">
          {" "}
          <img
            src={picture.large}
            alt=""
            className="round-img"
            style={{ width: "60px" }}
          />
        </div>
        <div className="contact-name">
          {name.first} {name.last}
        </div>
        <div className="contact-city">{location.city}</div>
        <div className="contact-given">
          <a className="mail-given" href={urlEmail}>
            <img src={mail} alt="" />
          </a>

          <a className="phone-given" href={urlPhone}>
            <img src={phoneNumber} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default CardListGiven;
