import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';


const Users = ({usersList, loading, userStyle}) => {
  let style 
  userStyle?style=gridStyle:style=listStyle

  if (loading) {
    return <Spinner />;
  } else {
    return (
     <>
     
      <div style={style}>
        {usersList.map(user => (
          <UserItem key={user.login.uuid} user={user} />
        ))}
      </div>
      </>
    );
  }
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
const listStyle = {
  display: 'list-item',
  
};

export default Users;
