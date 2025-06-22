
export default function TopNav() {
  return (
    <div className="h-20 bg-[#0d0d0d] text-white pt-[20px] pb-[20px] pl-[24px] pr-[20px]">
      <div id="top-nav-btns" className="flex gap-6 items-center ">
        <button type="button" className="bg-[#222324] font-inter text-lg font-medium border border-[#5A5A5A] pt-2 pb-2 pr-6 pl-6 rounded-md">Charging Station</button>
        <div className="text-lg font-roobert font-medium">Fleet Sizing</div>
        <div className="font-inter font-medium text-lg">Parking</div>
      </div>
    </div>
  )
}
