import React from "react";

const Sidebar = (props) =>  {

    const clicked  = props.isClicked;
    const handleClick = () => {
        props.toggleSidbar();
      };

  return (
    <React.StrictMode>
        <div className={clicked ? "fixed bg-gray-200/50 top-0 left-0  w-full grid grid-cols-3 h-full z-[100] transition-all ease-out duration-[500ms] md:hidden" : "md:hidden fixed bg-gray-200/50 top-0 -left-[500px]  w-full grid grid-cols-3 h-full z-[100] transition-all ease-out duration-[1000ms]"}>
         <div className="bg-blue-900 p-20 text-white col-span-2 relative">
            <button onClick={handleClick} className="absolute top-5 right-5 text-xl">X</button>
         </div>
        </div>
    </React.StrictMode>
    
  )
}
export default Sidebar;



