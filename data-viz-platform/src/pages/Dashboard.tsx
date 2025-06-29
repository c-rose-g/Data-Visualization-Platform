import {useState} from 'react'
import CaretButton from '../components/CaretButton'
import RefreshButton from "../components/RefreshButton"
import UploadButton from "../components/UploadButton"
import EditVariablesButton from "../components/EditVariablesButton"
import EditVariablesPanel from "../components/EditVariablesPanel"
import GraphChart from "../components/GraphChart"
import KpiGrid from "../components/KpiGrid"
import { graphData } from "../data/GraphData"

function Dashboard() {

  const [showMessages, setShowMessages] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const messages = ["The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles", "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles."];

  const handleRefresh = () =>{
    window.location.reload();
  };

  const handleUpload = () =>{
    // upload logic
  }

  const handleMessages = () => {
    setShowMessages(((prev:boolean) => !prev))
  }


  return (
    <>
    {/*Dashboard top header*/}
    <div className="bg-[#161618] text-white pr-20 pl-20 rounded-md mt-20">
      <div id="charging-station-wrapper" className="flex justify-between ">
        <div className="flex items-center">
          <div className="ml-1">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg>}</div>
          <h2 className="ml-2 font-roobert font-bold text-[30px]">Charging Station</h2>
        </div>
        <div id="charging-station-btns" className="flex gap-3">
          <RefreshButton onClick={handleRefresh}/>
          <EditVariablesButton onClick={() =>setShowPanel(true)}/>
          <EditVariablesPanel
          isOpen={showPanel}
          onClose={() =>setShowPanel(false)}
          />
          <UploadButton onClick={handleUpload}/>
          </div>
      </div>

      {/* Scenario Results */}
      <div id="scenario-results-wrapper" className="mt-20">
          <div id="results-messages" className="">
            <div className="flex justify-between items-start mb-5">
              <div className=" flex items-center text-[#DCFF7FFD] ">
                <div className="ml-1 mr-2">
                  {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z" clipRule="evenodd" />
                  </svg>}
                  </div>
                  <h2 className="font-roobert text-[20px] ">Best Scenario Results</h2>
              </div>
              <CaretButton onClick={handleMessages}  className={`pl-2 pr-2  pt-1 pb-1 border border-[#C8E972] text-[#C8E972] ml-80  hover:bg-gray-700 rounded-full transform transition-transform   ${showMessages ? 'rotate-180' : 'rotate-0'}`}/>
              </div>
              {showMessages && (
                messages.map((m, idx) => (
                  <div className="flex justify-between border text-[#C9FF3B] border-[#C8E972] rounded-md bg-[#1a1b18] p-4 items-end mb-10" key={idx}>
                    <div className="text-[12px]">{m}</div>
                    <button className="text-[14px] font-bold" type="button">...</button>
                  </div>
                )))}
          </div>
          {/* Graphs and KPI header */}
          <div id="subheading" className=" flex justify-between mt-40">
              <div className="">
                <h3 className="font-semibold text-2xl ">Graphs</h3>
              </div>
              <div id="kpi-heading" className="flex items-center mr-24">
                  <h2 className="font-roobert text-2xl text-[#FDFDFD] ">Key Performance Indicators</h2>
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
            <div id='card-wrapper' className="flex justify-between mt-8 mb-50 pb-20 items-end">

              {/* Graph column */}
              <div className="">
                <GraphChart data={graphData} />
              </div>

              {/* kpi card */}
                <KpiGrid />
            </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
