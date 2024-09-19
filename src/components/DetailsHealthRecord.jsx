import { Link, useParams } from "react-router-dom"
import { getHealthRecord } from "../utils/fetchData"
import { useState, useEffect } from "react"
import { getBloodPressureMessage, getBodyTemperatureMessage, getHeartRateMessage } from "../utils/utilityFunction"
import DeleteHealthRecord from "./DeleteHealthRecord"

const DetailsHealthRecord = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [healthRecord, setHealthRecords] = useState(null)
  const { id } = useParams()

  // fetching data
  const getData = async (id) => {
    const response = await getHealthRecord(id)


    setHealthRecords(response)
  }

  useEffect(() => {
    getData(id)
  }, [])



  return (
    <div className=' my-2 p-2'>
      <h1 className='text-center text-xl font-bold  '>Your Health details</h1>
      <p className="text-center text-green-600 font-semibold">({healthRecord?.date})</p>
      <section className="w-[100%] sm:w-[90%] mx-auto font-bold italic  flex flex-col border-2 p-3 border-gray-600 rounded-md">
        <div>
        <span className="text-xl ">Heart Rate : {healthRecord?.heartRate}</span><br />
        <p className="my-2 text-orange-500">({getHeartRateMessage(healthRecord?.heartRate)})</p>
        </div>
        <div>
        <span className="text-xl"> Blood Pressure: {healthRecord?.bloodPressure}{" "}</span><br />
       <p className="my-2 text-orange-500"> ({getBloodPressureMessage(healthRecord?.bloodPressure)})</p>
        </div>
        
        <div>
        <span className="text-xl">
          Body Temperature: {healthRecord?.bodyTemperature}{" "}</span><br />
         <p className="my-2 text-orange-500"> ({getBodyTemperatureMessage(healthRecord?.bodyTemperature)})</p>
        
        </div>
      <div className="edit-delete my-3">
        <Link to={`/health-record/edit/${id}`}  className="mx-2 bg-slate-700 text-white p-2 rounded-md">Edit Your Record</Link>

        <button onClick={()=>setIsOpen(true)} className="mx-2 max-sm:my-4 bg-red-600 text-white p-2 rounded-md">Delete Your Record</button>

        {/* delete dialog box */}
        <DeleteHealthRecord id={id} isOpen={isOpen} setIsOpen={setIsOpen}/>

      </div>
      </section>
    </div>
  )
}

export default DetailsHealthRecord
