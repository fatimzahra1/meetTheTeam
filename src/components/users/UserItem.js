import React from 'react';
import PropTypes from 'prop-types';
import phoneNumber from "../../icons/phone.png";
import mail from "../../icons/mail.png";


const UserItem = ({ user: { cell, email ,location, name, picture} }) => {
 

 const str1 = cell.replace('-', '');
 const str2 = str1.replace('(', '');
 const strFinal = str2.replace(')', '');
 const urlPhone="tel:"+strFinal
 const urlEmail="mailto:"+email
  

  return (
    <div className='card text-center'>
      <div className="ds-top"></div>
      <div className="name">
      <h3>{name.first} {name.last}</h3>
      </div>
      
      <img
        src={picture.large}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <div className="city">
      <h3>{location.city} </h3>
      </div>
      <div className="contact">
      <a href={urlEmail}><img src={mail} alt="" /></a>
      <a href={urlPhone}><img src={phoneNumber} alt="" /></a>
      
      
      
      
      </div>
      
      
      <div>
        
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
