import {useState} from 'react'
import CaretButton from '../components/CaretButton'
import RefreshButton from "../components/RefreshButton"
import UploadButton from "../components/UploadButton"
import EditVariablesButton from "../components/EditVariablesButton"
import EditVariablesPanel from "../components/EditVariablesPanel"

function Dashboard() {
  const [showMessages, setShowMessages] = useState(true)
  const [showPanel, setShowPanel] = useState(false)
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
    {/*Dashboard top header*/}
    <div className="bg-[#161618] text-white pr-8 pl-8 pt-10 pb-10">
      <div id="charging-station-wrapper" className="flex justify-between pb-8">
        <div className="flex items-center">
          <div className="ml-1">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg>}</div>
          <h2 className="ml-2 font-roobert font-bold text-[30px]">Charging Station</h2>
        </div>
        <div id="charging-station-btns" className="flex gap-3">
          <RefreshButton onClick={handleRefresh}/>
          <EditVariablesButton onClick={() => setShowPanel(showing => !showing)}/>
          <UploadButton onClick={handleUpload}/>
          </div>
      </div>

      {/* Scenario Results */}
      <div id="scenario-results-wrapper">
          <div id="results-messages" className="">
            <div className="flex justify-between items-start pb-4">
              <div className=" flex items-center text-[#DCFF7FFD] ">
                <div className="ml-1 mr-2">
                  {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z" clipRule="evenodd" />
                  </svg>}
                  </div>
                  <h2 className="font-roobert text-[20px] ">Best Scenario Results</h2>
              </div>
              <CaretButton onClick={handleMessages}  className={` ${showMessages ? 'rotate-180' : 'rotate-0'}`}/>
              </div>
              {showMessages && (
                messages.map((m, idx) => (
                  <div className="flex justify-between border text-[#C9FF3B] border-[#C8E972] rounded-md bg-[#1a1b18] p-4 items-end mb-3" key={idx}>
                    <div className="text-[12px]">{m}</div>
                    <button className="text-[14px] font-bold" type="button">...</button>
                  </div>
                )))}
          </div>
          {/* Graphs and KPI header */}
          <div id="subheading" className=" flex justify-between mt-10 ">
              <div className="">
                <h3 className="font-semibold text-2xl -ml-1">Graphs</h3>
              </div>
              <div id="kpi-heading" className="flex items-center pb-2">
                  <h2 className="font-roobert text-2xl text-[#FDFDFD] mr-10">Key Performance Indicators</h2>
                  <div className="flex -mr-2">
                    <button type="button" className="flex items-center border border-[#5A5A5A] text-white text-sm rounded-sm ml-6 p-1">Variables
                      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 ml-2">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>}
                    </button>

                  </div>
              </div>
            </div>
            {/* Graph content section */}
            <div id="card-wrapper" className="flex h-[502px] gap-4 justify-between">
            <div className="w-[660px] bg-[#222324] rounded-md h-full flex border border-[#424242] shadow-[5px_3px_5px_1px_rgb(10,10,12,.35)]">
              <div className="">Graph Card Content</div>
            </div>

            {/* KPI content section */}
            <div id="kpi-cards" className="grid grid-cols-2 grid-rows-2 gap-7">
              {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((label, idx) => (
                <div className="grid shadow-[5px_3px_5px_1px_rgb(10,10,12,.35)]">
                <div key={idx} className="bg-[#222324] border border-[#424242] rounded-md w-56">
                  {label}
                </div>
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
