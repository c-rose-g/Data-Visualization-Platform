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
    <div className=" bg-[#0d0d0d] flex flex-col ">
      <div className="mt-[80px] pl-[24px] pr-[20px] text-white w-20 gap-8 flex flex-col ">

      <div id="sidebar-top-btns" className="flex items-center flex-col gap-8">
        <HomeButton onClick={handleHome}/>
        <BellButton/>
        <ClipboardButton/>
        <CloudUploadButton/>
        <CogButton/>
        <div className="mt-[80px]">

        <ProfileButton/>
        </div>
      </div>

      </div>
    </div>
  )
}
