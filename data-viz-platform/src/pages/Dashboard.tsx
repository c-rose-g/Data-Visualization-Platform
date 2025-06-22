import {useState} from 'react'
import CaretButton from '../components/CaretButton'

// TODO fix kpi cards and kpi/variable spacing

function Dashboard() {
  const [showMessages, setShowMessages] = useState(true)
  const messages = ["The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles", "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles."]
  const handleRefresh = () =>{
    window.location.reload()
  }

  const handleUpload = () =>{
    // upload logic
  }
  const handleMessages = () => {
    setShowMessages(((prev:boolean) => !prev))

  }

  return (
    <>
    <div className="bg-[#161618] text-white">
      <div id="charging-station-section" className="flex justify-between pb-10">
        <div className="border flex items-center ">
          <div className="ml-4 mr-2">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg>}</div>
          <h2 className="font-bold text-[32px]">Charging Station</h2>
        </div>
        <div id="charging-station-btns" className="flex gap-4 px-4 py-6">
          <button id="refresh-btn" className="border bg-[#242424] p-2" type="button" onClick={handleRefresh}>{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
          </svg>}
          </button>
          <button id="edit-variables-btn" className="border bg-[#242424] p-2" type="button">Edit Variables</button>
          <button id="upload-btn" className="border bg-[#242424] p-2" type="button">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>}
          </button>
          </div>
      </div>
      <div id="scenario-results-wrapper">
          {/* Scenario Results */}
          <div id="results-messages" className="">
            <div className="flex justify-between items-center pb-2">
              <h2 className="text-[#CCFF00] font-semibold">✨ Best Scenario Results</h2>
              <CaretButton onClick={handleMessages}  className={`border border-[#C8E972] text-[#C8E972] rounded-full pl-2 pr-2 ml-80 transform transition-transform ${showMessages ? 'rotate-180' : 'rotate-0'}`}/>
              </div>
              {showMessages && (
                <div className="space-y-2">

                {messages.map((m, idx) => (
                  <div className="text-[#C8E972] border border-[#5A5A5A] p-3 text-sm rounded-md text-eggshell" key={idx}>
                  <span>{m}</span>
                  <button type="button">...</button>
                  </div>
              ))}
              </div>
              )}

          </div>

          {/* KPI Header Row */}
          <div className="">
            <div id="graphs-heading" className="border flex justify-between items-center mt-10">
              <div className="">
                <h3 className="font-semibold text-2xl ml-4">Graphs</h3>
              </div>
              <div id="kpi-heading" className="border flex justify-between">
                  <h2 className="font-semibold text-2xl text-[#FDFDFD] mr-40">Key Performance Indicators</h2>
                  <button type="button" className=" border border-[#5A5A5A] text-white text-sm rounded-md ">Variables+</button>
              </div>

              </div>
            </div>

          {/* Graphs and KPI Cards Row className="bg-[#161618] text-white px-8 py-4 "*/}
          <div id="card-wrapper" className="flex gap-4">
            {/* Graphs Section */}
              {/* <h3 className="font-semibold text-2xl mb-4">Graphs</h3> */}
            <div className="w-[504px] h-[761px] p-4 rounded-[16px] border-[#424242]">
              <div className="bg-[#222324] rounded-md h-full flex items-center justify-center text-sm text-[#AAAAAA] border border-[#424242]">Graph Card</div>
              </div>

            {/* KPI Cards Section */}
            <div id="kpi-cards" className="w-[453px] h-[502px] p-4 border-1 border-[#424242] rounded-[16px] grid grid-cols-2 gap-4">
              {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((label, idx) => (
                <div
                key={idx}
                className="bg-[#222324] w-[210px] h-[215px] p-4 border border-[#424242] rounded-[5px] flex items-center justify-center"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
