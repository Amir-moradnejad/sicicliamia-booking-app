"use client";

// import React from "react";
import React, { useEffect, useState } from "react";
// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import Nav from "../components/nav";
import Carousel from "../components/carousel";
import Sidebar from "../components/sidebar";
import MyCalender from "../components/myCalender";
import Link from "next/link";

export default function Homepage(props) {
  const [isClicked, setisClicked] = useState(false);
  const toggleSidbar = () => {
    setisClicked(!isClicked);
    // console.log("hello world");
  };
  useEffect(() => {
    const paragraph = document.querySelector(".paragraph");
    const readMoreLink = paragraph.querySelector(".read-more");
    const showLessLink = paragraph.querySelector(".show-less");

    readMoreLink.addEventListener("click", function (e) {
      e.preventDefault();
      paragraph.style.maxHeight = "none";
      readMoreLink.style.display = "none";
      showLessLink.style.display = "block";
    });

    showLessLink.addEventListener("click", function (e) {
      e.preventDefault();
      paragraph.style.maxHeight = "10rem";
      readMoreLink.style.display = "block";
      showLessLink.style.display = "none";
    });

    return () => {
      readMoreLink.removeEventListener("click", function (e) {
        e.preventDefault();
        paragraph.style.maxHeight = "none";
      });
    };
  }, []);

  return (
    <React.StrictMode>
      <Nav toggleSidbar={toggleSidbar} />
      <div className="bg-white">
        <Sidebar isClicked={isClicked} toggleSidbar={toggleSidbar} />
        <Carousel />
        <main className="px-5 bg-white">
          <section className=" grid grid-cols-1 ">
            <h1 className="uppercase text-blue-900 font-bold text-2xl my-5">
              Book your room
            </h1>
            {/* <MyCalender /> */}
            <form action="">
              <input
                type="date"
                name="date"
                id="date"
                className="w-full border border-blue-900 text-gray-400"
                placeholder="checkin-checkout"
              />
              <input
                type="date"
                name="date"
                id="date"
                className="w-full border border-blue-900 text-gray-400"
                placeholder="checkin-checkout"
              />
              <button
                type="submit"
                className="text-white font-semibold w-full bg-blue-900 hover:bg-blue-900 hover:underline hover:text-white py-3 px-4  my-5 mx-auto uppercase"
              >
                Search
              </button>
            </form>
          </section>
          {/* gallery */}
          <section className=" grid grid-cols-1 ">
            <h1 className="uppercase text-blue-900 font-bold text-2xl my-5">
              Gallery
            </h1>
            <div className="bg-blue-500 w-full h-[50vh] md:h-[70vh] bg-[url('/images/puttingOnShoes.jpg')] bg-cover bg-no-repeat"></div>
            <button
              type="submit"
              className="text-blue-900 font-semibold items-center bg-transparent  border border-blue-900 hover:bg-blue-900 hover:underline hover:text-white py-3 px-4  my-10 mx-auto uppercase"
            >
              View gallery
            </button>
          </section>
          {/* recomendation  */}
          <section className=" grid grid-cols-1 ">
            <h1 className="uppercase text-blue-900 font-bold text-2xl my-5">
              Recommendation
            </h1>
            <div className="bg-blue-500 w-full h-[50vh] md:h-[70vh] bg-[url('/images/nature-norway.jpg')] bg-cover bg-no-repeat"></div>
            <button
              type="submit"
              className="text-blue-900 font-semibold items-center bg-transparent  border border-blue-900 hover:bg-blue-900 hover:underline hover:text-white py-3 px-4  my-10 mx-auto uppercase"
            >
              View more
            </button>
          </section>
          {/* about us  */}
          <section className=" grid grid-cols-1 ">
            <h1 className="uppercase text-blue-900 font-bold text-2xl my-5">
              about us
            </h1>
            <div className="bg-blue-500 w-full h-[50vh] md:h-[70vh] bg-[url('/images/walking-leg2.jpg')] bg-cover bg-no-repeat"></div>
            <div className="paragraph relative overflow-hidden max-h-40 my-5">
              <p className=" text-blue-900 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                non corrupti dolorum voluptate qui doloribus sunt soluta
                pariatur! Velit, dolores illum repudiandae tempore consequuntur
                rerum ullam quo! Praesentium dolores eum sapiente eveniet
                deleniti, a molestiae magni voluptatum quaerat tenetur provident
                amet, ab itaque repellat nihil facere reprehenderit
                necessitatibus minus nam odio, maiores sint obcaecati illum
                totam? Ipsam earum quia sapiente hic praesentium quae est
                voluptas recusandae fugit reiciendis. Eaque reiciendis impedit
                perspiciatis sed odio iusto praesentium cum, saepe facilis
                adipisci architecto aliquid commodi ex iure, expedita ut totam
                optio autem unde quidem fuga. Aliquam in aspernatur earum id
                optio rerum.
              </p>
              <span className="show-less hidden absolute -bottom-1 underline right-0 cursor-pointer bg-white text-blue-900 opacity-40">
                Show Less
              </span>
              <span className="read-more absolute -bottom-1 underline right-0 cursor-pointer bg-white text-blue-900">
                Read more
              </span>
            </div>
            <div className="text-center bg-gray-50 my-1 py-2">
              <h1 className=" text-blue-900 font-bold text-xl my-5">
                Dont know which one to choose?
              </h1>
              <p className=" text-blue-900 text-sm my-5 px-16">
                Leave the request and we will get back to you span
              </p>
              <button
                type="submit"
                className="text-blue-900 font-semibold items-center bg-transparent  border border-blue-900 hover:bg-blue-900 hover:underline hover:text-white py-3 px-4 my-3 mx-auto uppercase"
              >
                i need help
              </button>
            </div>
          </section>

          {/* needs recomendation  */}
          <section className=" text-center bg-gray-50 my-5 p-5">
            <div className="bg-blue-500 w-full h-[200px] bg-[url('/images/nature1.jpg')] bg-cover bg-no-repeat"></div>
            <h1 className=" text-blue-900 font-bold text-xl my-5">
              Need recommendations?
            </h1>
            <p className=" text-blue-900 text-sm my-5">
              Leave the request and we will get back to you
            </p>
            <button
              type="submit"
              className="text-blue-900 font-semibold items-center bg-transparent  border border-blue-900 hover:bg-blue-900 hover:underline hover:text-white py-3 px-4 my-3 mx-auto uppercase"
            >
              read blogs
            </button>
          </section>

          {/* support tab  */}
          <section className=" grid grid-cols-3 gap-3 bg-gray-50 my-5 p-5">
            <div className=" font-semibold text-center">
              <Link href="#" className="uppercase text-blue-900 text-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900 mx-auto mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                Support
              </Link>
            </div>
            <div className=" font-semibold text-center">
              <Link href="#" className="uppercase text-blue-900 text-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900 mx-auto mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                FAQ
              </Link>
            </div>
            <div className=" font-semibold text-center">
              <Link href="#" className="uppercase text-blue-900 text-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900 mx-auto mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                FEEDBACK
              </Link>
            </div>
          </section>
          {/* location map  */}
          <section className=" grid grid-cols-1 bg-gray-50 my-5">
            <div className="bg-blue-500 w-full h-[50vh] md:h-[70vh] bg-[url('/images/map.jpg')] bg-cover bg-no-repeat"></div>
          </section>

          {/*  news letter */}
          <section className=" grid grid-cols-1  my-5 p-5 text-center border-b border-x-0 border-t-0  border-gray-200">
            <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
              Our NewsLetter
            </h1>
            <p className=" text-blue-900 text-sm mb-10 px-16">
              Sign up for our newsletter!
            </p>
            <form action="">
              <input
                type="text"
                name="Fname"
                id="Fname"
                placeholder="Your full name"
                className="w-full py-2 placeholder-gray-300 text-gray-500  border-b border-x-0 border-t-0  border-blue-900 my-1 focus:outline-none "
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full py-2 placeholder-gray-300 text-gray-500  border-b border-x-0 border-t-0  border-blue-900 my-1 focus:outline-none "
              />
              <button
                type="submit"
                className="bg-blue-900 font-semibold items-center text-white w-full border border-blue-900 hover:bg-blue-900 hover:underline hover:text-white py-3 px-4 my-5 mx-auto uppercase"
              >
                Sign Up
              </button>
            </form>
          </section>
        </main>
        {/* footer */}
        <footer className=" gap-5 px-5 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 ">
            {/* about us */}
            <div className="text-center  border-b border-x-0 border-t-0  border-gray-300 py-5">
              <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
                About Us
              </h1>
              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  House Rules & Concellation Policy
                </Link>
              </div>
              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  Blue House Blog
                </Link>
              </div>
              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  Northen Light
                </Link>
              </div>
              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  Imprints & Private Policy
                </Link>
              </div>
            </div>
            {/* contact us*/}
            <div className="text-center  border-b border-x-0 border-t-0  border-gray-300 py-5">
              <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
                Contact Us
              </h1>
              <div className="py-2 ">
                <Link href="#" className=" text-blue-900 text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-auto  text-blue-900 mb-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p>+354 7756 6480</p>
                </Link>
              </div>
              <div className="py-2">
                {/* <i className="block text-blue-900 text-xl">@</i> */}
                <Link href="#" className=" text-blue-900 text-sm">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    className="text-sm mx-auto  text-blue-900 mb-1"
                    width="18"
                    height="18"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Whatsapp
                </Link>
              </div>

              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-sm mx-auto  text-blue-900 mb-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@bluehouse.is
                </Link>
              </div>

              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-sm mx-auto  text-blue-900 mb-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Valhusabraut 19 <br />
                  Seltjarnarnes, 170, Iceland
                </Link>
              </div>

              <div className="py-2">
                <Link href="#" className=" text-blue-900 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-sm mx-auto  text-blue-900 mb-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Grotta Nortern <br />
                  Lights Apartment
                </Link>
              </div>
            </div>
            {/* follow us */}
            <div className="text-center border-b border-x-0 border-t-0  border-gray-300 py-5">
              <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
                Follow Us
              </h1>
              <div className="flex flex-row justify-around mx-auto px-20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className=" text-blue-900 opacity-60 text-sm px-16 py-5 text-center w-full">
            Blue House 2023
          </p>
        </footer>
      </div>
    </React.StrictMode>
  );
}
