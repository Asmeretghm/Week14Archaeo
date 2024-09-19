import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <div className="navbar bg-neutral text-neutral-content">
      {/* <button className="btn btn-ghost text-xl">ArchaeoDB</button> */}
      <Link to="/Archaeopage" className="btn btn-ghost text-xl">ArchaeoDB</Link>
      <Link to="/Hero" className="btn btn-ghost text-xl">Home</Link>



    </div>
  );
}

export default Navbar;