import { useState } from "react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"

export default function Layout() {
  const [open, setOpen] = useState(true)

  return(
  <div className="flex h-screen">
    {/* Sidebar menu collapse */}
    <Sidebar collapsed={!open} />

    {/* TopNav menu */}
    <div className="flex-1 flex flex-col">
        <TopNav
        sidebarOpen={open}
        onHamburgerClick={() =>setOpen(open => !open)}
        />
      </div>
      </div>
  )
}
