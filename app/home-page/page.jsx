"use client";

// import React from "react";
import React, { useEffect } from "react";
import Carousel from "../components/carousel";
import Image from "next/image";

export default function Homepage() {
  // document.addEventListener('DOMContentLoaded', function () {
  //   const paragraph = document.querySelector('.paragraph');
  //   const readMoreLink = paragraph.querySelector('.read-more');

  //   readMoreLink.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     paragraph.style.maxHeight = 'none';
  //     paragraph.style.backgroundColor = 'red';
  //     console.log('helo this is it')
  //     paragraph.classList.add('show-more');
  //     readMoreLink.style.display = 'none';
  //   });
  // });
  useEffect(() => {
    const paragraph = document.querySelector(".paragraph");
    const readMoreLink = paragraph.querySelector(".read-more");

    readMoreLink.addEventListener("click", function (e) {
      e.preventDefault();
      paragraph.style.maxHeight = "none";
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
      <div className="bg-white">
        <div>Home page</div>
        <Carousel />
        <main className="px-5 bg-white">
          <section className=" grid grid-cols-1 ">
            <h1 className="uppercase text-blue-900 font-bold text-2xl my-5">
              Book your room
            </h1>
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
            <div className="bg-blue-500 w-full h-[400px] bg-[url('/images/gray-shoe.jpg')] bg-cover bg-no-repeat"></div>
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
            <div className="bg-blue-500 w-full h-[400px] bg-[url('/images/gray-shoe.jpg')] bg-cover bg-no-repeat"></div>
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
              aboout us
            </h1>
            <div className="bg-blue-500 w-full h-[400px] bg-[url('/images/gray-shoe.jpg')] bg-cover bg-no-repeat"></div>
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
              <button className="read-more absolute bottom-0 right-0 bg-transparent text-blue-900 p-2">
                Read more
              </button>
            </div>
            <div className="text-center bg-gray-50 my-1 py-2">
              <h1 className=" text-blue-900 font-bold text-xl my-5">
                Dont know which one to choose?
              </h1>
              <p className=" text-blue-900 text-sm my-5 px-16">
                Leave the request and we will get back to you
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
          <section className=" grid grid-cols-1 bg-gray-50 my-5 p-5">
            <div className="bg-blue-500 w-full h-[200px] bg-[url('/images/gray-shoe.jpg')] bg-cover bg-no-repeat"></div>
            <h1 className=" text-blue-900 font-bold text-xl my-5">
              Need recommendations?
            </h1>
            <p className=" text-blue-900 text-sm my-5 px-16">
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
            <div className="bg-red-500 p-5 text-center"></div>
            <div className="bg-red-500 p-5 text-center"></div>
            <div className="bg-red-500 p-5 text-center"></div>
          </section>
          {/* location map  */}
          <section className=" grid grid-cols-1 bg-gray-50 my-5">
            <div className="bg-blue-500 w-full h-[400px] bg-[url('/images/gray-shoe.jpg')] bg-cover bg-no-repeat"></div>
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
              <input type="text" name="Fname" id="Fname"  placeholder="Your full name" className="w-full py-2 placeholder-gray-300 text-gray-500  border-b border-x-0 border-t-0  border-blue-900 my-1 focus:outline-none "/>
              <input type="email" name="email" id="email" placeholder="Your email address" className="w-full py-2 placeholder-gray-300 text-gray-500  border-b border-x-0 border-t-0  border-blue-900 my-1 focus:outline-none "/>
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
        <footer className=" grid grid-cols-1 gap-5 px-5 bg-white">
          <div className="grid grid-cols-1 gap-5 px-5 ">
          <div className="text-center  border-b border-x-0 border-t-0  border-gray-300">
             <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
              Our NewsLetter
            </h1>
            <p className=" text-blue-900 text-sm mb-10 px-16">
              Sign up for our newsletter!
            </p>
          </div>
          <div className="text-center  border-b border-x-0 border-t-0  border-gray-300">
             <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
              Our NewsLetter
            </h1>
            <p className=" text-blue-900 text-sm mb-10 px-16">
              Sign up for our newsletter!
            </p>
          </div>
          <div className="text-center  border-b border-x-0 border-t-0  border-gray-300">
             <h1 className="uppercase text-blue-900 font-bold text-xl my-5">
              Our NewsLetter
            </h1>
            <p className=" text-blue-900 text-sm mb-10 px-16">
              Sign up for our newsletter!
            </p>
          </div>
          <p className=" text-blue-900 opacity-60 text-sm mb-10 px-16 text-center w-full">Blue House 2023</p>
          </div>
        </footer>
      </div>
    </React.StrictMode>
  );
}
