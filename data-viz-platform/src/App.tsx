import './App.css'
type AppProps = {
  children: React.ReactNode;
};
function App({children}: AppProps) {

  return (
    <main className="flex h-screen">
      {/* add sidebarNav */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </main>
  )
}

export default App
