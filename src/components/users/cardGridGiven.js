import React from "react";
import phoneNumber from "../../icons/phone.png";
import mail from "../../icons/mail.png";

const CardGridGiven = ({ user: { cell, email, location, name, picture } }) => {
  const str1 = cell.replace("-", "");
  const str2 = str1.replace("(", "");
  const strFinal = str2.replace(")", "");
  const urlPhone = "tel:" + strFinal;
  const urlEmail = "mailto:" + email;
  var colors = ["#E8CDAD", "#E1D3C7", "#A7B8A8"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <div className="card-grid-background">
        <div
          className="rectangle1"
          style={{ backgroundColor: `${color}` }}
        ></div>

        <div className="rectangle8"></div>
        <div className="rectangle9"></div>
        <div
          className="rectangle10"
          style={{ backgroundColor: `${color}` }}
        ></div>

        <div className="contact-grid-name">
          {name.first} {name.last}
        </div>
        <div className="avatar-grid-given">
          {" "}
          <img src={picture.large} alt="" className="round-grid-img" />
        </div>
        <div className="contact-grid-city">{location.city}</div>
        <div className="contact-grid-given">
          <a className="mail-grid-given" href={urlEmail}>
            <img src={mail} alt="" />
          </a>

          <a className="phone-grid-given" href={urlPhone}>
            <img src={phoneNumber} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default CardGridGiven;
