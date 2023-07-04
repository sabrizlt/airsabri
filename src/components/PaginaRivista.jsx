import React from 'react';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import Rivista from './Rivista';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <MyNavbar />
      <Rivista />
      <MyFooter />
    </div>
  );
}

export default Home;
