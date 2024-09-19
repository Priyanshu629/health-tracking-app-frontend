import { Link } from "react-router-dom";

const HealthRecord = ({ _id, date,heartRate,bloodPressure ,bodyTemperature }) => {
  
 
  
  return (
    <div className='w-[300px]  font-bold border-2 border-green-500 rounded-md p-2 flex flex-col cursor-pointer hover:border-yellow-700 italic mx-2 max-sm:my-3'>
      <span className='m-2'>Date : {date} </span>
      <span className='m-2'>Heart Rate : {heartRate} </span>
      <span className='m-2'>Blood Pressure : {bloodPressure}</span>
      <span className='m-2'>Body Temperature : {bodyTemperature}</span>
      <Link to={`/health-record/details/${_id}`} className='p-2 rounded-md bg-blue-400 m-2'>See Details</Link>
    </div>
  )
}

export default HealthRecord
