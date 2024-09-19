import { useState } from "react"
import { addHealthRecord } from "../utils/fetchData"


const AddHealthRecord = () => {
    const [date,setDate]=useState("")
    const [heartRate,setHeartRate]=useState("")
    const [bodyTemperature,setBodyTemperature]=useState("")
    const [bloodPressure,setBloodPressure]=useState("")
    return (
        <form onSubmit={(e)=>addHealthRecord(e,date,heartRate,bloodPressure,bodyTemperature)} className="w-[95%] sm:w-[60%] border-2 border-pink-500 rounded-md mx-auto my-4 flex flex-col ">
            <h1 className="text-center font-bold text-2xl">Add Health Record</h1>
            <p className="text-center text-red-600 italic">(fill all the details properly from your report or measurement)</p>
            <div className="mx-2 my-2 font-semibold">
                <span className="font-bold">Select Date : </span>
                <input type="date" className="mx-2 " onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className="mx-2 my-2 font-semibold">
                <span>Enter Heart Rate</span>
                <input type="text" className="add-input max-sm:w-[95%]" placeholder="only number eg : 69 " onChange={(e)=>setHeartRate(e.target.value)}/>
            </div>
            <div className="mx-2 my-2 font-semibold">
                <span>Enter Body Temperature</span>
                <input type="text" className="add-input max-sm:w-[95%]" placeholder="only number eg : 96.4 or 36.1" onChange={(e)=>setBodyTemperature(e.target.value)}/>
            </div>
            <div className="mx-2 my-2 font-semibold">
                <span>Enter Blood Pressure </span>
                <input type="text" className="add-input max-sm:w-[95%]" placeholder="eg: 120/80"
                onChange={(e)=>setBloodPressure(e.target.value)}/>
            </div>
            <button className=" my-3 p-2 rounded-md bg-green-900 text-white w-[50%] mx-auto">Submit</button>
        </form>
    )
}

export default AddHealthRecord
