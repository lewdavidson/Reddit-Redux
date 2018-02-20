import React from 'react';
import reddit from'./../assets/title.png';


const Navbar = () => {
  return(
    <div className="nav-styles">
      <img src={reddit}/>
      <ul className="list-style">
        <li>Hot</li>
        <li>Fresh</li>
        <li>Proud 2 Serve</li>
        <li>Create new post</li>
      </ul>
      <style jsx>{`
        .nav-styles {
          background-color: #cee3f8;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .list-style {
          list-style: none;
          display: inline-flex;
          margin-left: 80px;

        }


      `}</style>
    </div>
  );
};

export default Navbar;
