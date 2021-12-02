import React from 'react';

import Navbar from './components/layout/headerUsers';


import Users from './components/users/Users';

import { useState,useEffect } from 'react';




import './App.css';
const axios = require('axios');

const App = () => {
  const [usersList, setUsersList] = useState([])
  const [loading, setLoading] = useState(true)
  const [userStyle, setUserStyle] = useState(true)
  const [sorted, setSorted] = useState(false)
  
  useEffect(() => {
    setUsersList(usersList)
  }, [sorted])
 
  useEffect( () => {
    async function fetchData() {
    const result = await axios(
      'https://randomuser.me/api/?results=50',
    );

    console.log(result.data.results)
    setUsersList(result.data.results)
    setLoading(false)}
    fetchData();
  }, []);
  const changeTheStyle = ()=>{setUserStyle(!userStyle)
  }

  const setSearchedArray = (newArray)=>setUsersList(newArray)
  const setSortedArray = (sortedArray)=>{setUsersList(sortedArray)
  setSorted(!sorted)}
  

  return (
    <div>
      <h1>Meet the team</h1>
  <Navbar sorted={sorted} setSortedArray={setSortedArray} setSearchedArray={setSearchedArray} usersList={usersList} changeTheStyle= {changeTheStyle} userStyle={userStyle}/>
          <div className='App'>
            <Users userStyle={userStyle} usersList={usersList}  loading= {loading}
            />
            <div className='container'>
             
              
            </div>
          </div>
        
          </div>
  );
 
};

export default App;
