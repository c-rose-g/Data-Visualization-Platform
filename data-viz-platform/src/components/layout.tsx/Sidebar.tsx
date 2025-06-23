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
    <div className="mt-[80px] bg-[#0d0d0d] text-white w-20 pt-[30px] pb-[20px] pl-[24px] pr-[20px] flex justify-between flex-col">
      <div id="sidebar-top-btns" className="flex items-center flex-col gap-8">
        <HomeButton onClick={handleHome}/>
        <BellButton/>
        <ClipboardButton/>
        <CloudUploadButton/>
        <CogButton/>
      </div>
      <div id="sidebar-profile-btn" className="flex items-center justify-center">
        <ProfileButton/>
      </div>
    </div>
  )
}
