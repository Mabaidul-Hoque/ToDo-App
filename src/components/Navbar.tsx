// import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between  py-6">
      {/* LOGO */}
      <img width={50} className="" src="/logo.png" alt="logo" />
      {/* TODO TEXT */}
      <h1 className="">TODO LIST</h1>
      {/* SAVED LIST */}
      <h1>SAVED LISTS</h1>
    </div>
  );
};

export default Navbar;
