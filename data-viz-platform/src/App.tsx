import './App.css'
import Sidebar from './components/layout.tsx/Sidebar';
import TopNav from './components/layout.tsx/TopNav';

type AppProps = {
  children: React.ReactNode;
};
function App({children}: AppProps) {

  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <TopNav/>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default App
