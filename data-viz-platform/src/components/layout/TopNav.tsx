import HamburgerButton from "../HamburgerButton"
import SearchIcon from "../SearchIcon"

type HamburgerButtonProp = {
  sidebarOpen: boolean;
  onHamburgerClick?: () => void;
}

export default function TopNav({sidebarOpen, onHamburgerClick }:HamburgerButtonProp) {
  return (
    <header className="flex items-center h-20 bg-[#0d0d0d] text-white  pl-[30px] pt-5 pb-5  -ml-[80px]">
      <HamburgerButton
      onClick={onHamburgerClick}
      aria-expanded={sidebarOpen}
      className="text-white "
      />
      <nav id="top-nav-btns" className="flex w-full items-center justify-between">
        <div className="flex gap-10 ml-[80px] ">
          <a href="/charging" className="bg-[#222324] font-inter text-lg font-medium border border-[#5A5A5A] pr-6 pl-6 rounded-md">Charging Station</a>
          <a href="/fleet" className="text-lg font-roobert font-medium">Fleet Sizing</a>
          <a href="/parking" className="font-inter font-medium text-lg">Parking</a>
        </div>
        <div className="flex mr-[80px] border border-[rgba(90, 90, 90, 1)] rounded-md px-4 py-2 bg-[#181819] items-center ">
          <SearchIcon className="h-5 w-5 text-[rgba(237, 237, 237, 1)]"/>
        <input type="search" placeholder="Search" className="font-inter w-full ml-4  bg-[#181819] text-[rgba(237, 237, 237, 1)] " />
        </div>
      </nav>
    </header>
  )
}
