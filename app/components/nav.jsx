// import Link from "next/link";
import React from "react";
import { Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <React.StrictMode>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/home-page">Home</Navbar.Link>
          <Navbar.Link href="/">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      </React.StrictMode>
    //   <nav className="bg-white py-4">
    //   <div className="container mx-auto px-4">
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center">
    //         <Link href="/" className="text-gray-800 text-xl font-bold">
    //           logo
    //         <i className='bx bx-menu'></i>
    //         </Link>
    //       </div>
    //       <div className="flex items-center">
    //         <Link
    //           href="/home-page"
    //           className="text-gray-600 hover:text-gray-800 mx-4"
    //         >
    //           home
    //           <i className='bx bx-location-plus' ></i>
    //         </Link>
    //         <Link
    //           href="/services"
    //           className="text-gray-600 hover:text-gray-800 mx-4"
    //         >
    //           services
    //           <i className='bx bxl-whatsapp' ></i>
    //         </Link>
    //         <Link
    //           href="/contact"
    //           className="text-gray-600 hover:text-gray-800 mx-4"
    //         >
    //           contact
    //           <i className='bx bx-phone-call' ></i>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
