// import './App.css'
import SideBar from './components/layout.tsx/Sidebar';
import TopNav from './components/layout.tsx/TopNav';

type AppProps = {
  children: React.ReactNode;
};
function App({children}: AppProps) {

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default App
