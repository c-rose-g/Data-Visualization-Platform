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
    <div className="bg-[#161618] text-white pr-8 pl-8 pt-10 pb-10">
      <div id="charging-station-section" className="flex justify-between pb-8">
        <div className="flex items-center">
          <div className="ml-1">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg>}</div>
          <h2 className="ml-2 font-roobert font-bold text-[30px]">Charging Station</h2>
        </div>
        <div id="charging-station-btns" className="flex gap-3">
          <button id="refresh-btn" className="border bg-[#242424] border-[#5a5a5a] rounded-md shadow-[1px_1px_0_rbg(0,0,0)] shadow-black p-2" type="button" onClick={handleRefresh}>{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
          </svg>}
          </button>
          <button id="edit-variables-btn" className="font-roobert border bg-[#242424] border-[#5a5a5a] rounded-md shadow-[1px_1px_0_rbg(0,0,0)] shadow-black p-2 text-[12px]" type="button">Edit Variables</button>
          <button id="upload-btn" className="border bg-[#242424] border-[#5a5a5a] rounded-md shadow-[1px_1px_0_rbg(0,0,0)] shadow-black p-2" type="button">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#B9B9B9]">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>}
          </button>
          </div>
      </div>
      <div id="scenario-results-wrapper">
          {/* Scenario Results */}
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
              <CaretButton onClick={handleMessages}  className={`transform transition-transform ${showMessages ? 'rotate-180' : 'rotate-0'}`}/>
              </div>
              {showMessages && (
                <div className="">

                {messages.map((m, idx) => (
                  <div className="flex justify-between border text-[#C9FF3B] border-[#C8E972] rounded-md bg-[#1a1b18] p-4 items-end mb-3" key={idx}>
                    <div className="text-[12px]">{m}</div>
                    <button className="text-[14px] font-bold" type="button">...</button>
                  </div>
              ))}
              </div>
              )}

          </div>

          {/* KPI Header Row */}

            <div id="graphs-heading" className="flex justify-between mt-10 ">
              <div className="">
                <h3 className="font-semibold text-2xl -ml-1">Graphs</h3>
              </div>
              <div id="kpi-heading" className="flex items-center pb-2">
                  <h2 className="font-roobert text-2xl text-[#FDFDFD] mr-14">Key Performance Indicators</h2>
                  <div className="flex ">
                    <button type="button" className="flex items-center border border-[#5A5A5A] text-white text-sm rounded-md ml-10 p-1">Variables
                      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 ">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>}
                    </button>

                  </div>
              </div>
            </div>

            {/* Graphs Section */}
          <div id="card-wrapper" className="flex h-[502px] gap-4">
            <div className="w-[660px] bg-[#222324] rounded-md h-full flex border border-[#424242]">
              <div className="">Graph Card Content</div>
            </div>

            {/* KPI Cards Section */}
            <div id="kpi-cards" className="grid grid-cols-2 grid-rows-2 gap-7">
              {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((label, idx) => (
                <div className="grid ">
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
