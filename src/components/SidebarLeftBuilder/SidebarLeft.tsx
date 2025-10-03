import { MessageSquare } from "lucide-react";
import { useState } from "react"

interface SidebarProps {
  className?: string;
}

export default function Sidebar({className} : SidebarProps) {

  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className={className}>
      <div className={`relative  ${!openSidebar ? ' w-[160px] h-full' : ' w-14 h-full' } transition-all duration-300`}>
        <div className='z-10 absolute top-1 -right-[35px] w-6 h-6 bg-white shadow flex items-center justify-center'>
          <button onClick={() => setOpenSidebar(!openSidebar)} className=" w-full h-full flex items-center justify-center text-gray-700 font-bold hover:cursor-pointer">
            X
          </button>
        </div>
        <div className={` h-full transition-all duration-300 ${!openSidebar ? ' p-0' : ' p-0 overflow-hidden'}`}>
          <button className=" w-full h-10 flex items-center justify-center gap-2  p-1 bg-white rounded-xl hover:cursor-pointer ">
            <MessageSquare className={`${!openSidebar ? 'w-4 h-4' : 'w-5 h-5'}`} /> 
            <p className={` font-semibold text-gray-700 transition-all duration-300 ${!openSidebar ? ' opacity-100' : ' opacity-0 hidden' } `}>
              Texto
            </p>
          </button>
        </div>
      </div>
    </div>
  )
};