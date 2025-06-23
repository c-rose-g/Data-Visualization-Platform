import { useState } from "react"
import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"

export type LayoutProps = {
  children: ReactNode
}

export default function Layout({children}:LayoutProps) {
  const [open, setOpen] = useState(true)

  return(
  <div className="flex flex-1 bg-[#0f0f0f] text-white h-screen overflow-auto border rounded-md">
    {/* Sidebar menu collapse */}
    <Sidebar collapsed={!open} />

    {/* TopNav menu */}
    <div className="flex-1 flex flex-col">
        <TopNav
        sidebarOpen={open}
        onHamburgerClick={() =>setOpen(open => !open)}
        />
        {/* main content */}
        <main className="flex-1 ">{children}</main>
      </div>
      </div>
  )
}
