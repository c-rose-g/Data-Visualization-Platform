import { useNavigate } from "react-router-dom"
import HomeButton from "../HomeButton"
import BellButton from "../BellButton"
import ClipboardButton from "../ClipboardButton"
import CloudUploadButton from "../CloudUploadButton"
import CogButton from "../CogButton"
import ProfileButton from "../ProfileButton"

export type SidebarProps = {
  collapsed?: boolean;
}
export default function Sidebar({collapsed}:SidebarProps) {
  const navigate = useNavigate();
  const handleHome = () =>{
    navigate("/dashboard");
  };

  return (
    <div className=" bg-[#0d0d0d] flex flex-col">
      <div className=" text-white w-20 ">

      <div id="sidebar-top-btns" className="flex items-center flex-col ">
        <div className="gap-8 flex flex-col mt-[90px]  ">

        <HomeButton onClick={handleHome}/>
        <BellButton/>
        <ClipboardButton/>
        <CloudUploadButton/>
        <CogButton/>
        </div>
        <div className="fixed bottom-32  ">

        <ProfileButton/>
        </div>
      </div>

      </div>
    </div>
  )
}
