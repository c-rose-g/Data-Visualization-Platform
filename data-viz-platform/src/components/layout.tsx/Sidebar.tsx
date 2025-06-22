import Hamburger from "../HamburgerButton"
import HomeButton from "../HomeButton"
import BellButton from "../BellButton"
import ClipboardButton from "../ClipboardButton"
import CloudUploadButton from "../CloudUploadButton"
import CogButton from "../CogButton"
import ProfileButton from "../ProfileButton"

export default function Sidebar() {
  return (
    <div className="bg-[#0d0d0d] text-white w-20 pt-[30px] pb-[20px] pl-[24px] pr-[20px] flex justify-between flex-col">
      <div id="sidebar-top-btns" className="flex items-center flex-col gap-8">
        <Hamburger/>
        <HomeButton/>
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
