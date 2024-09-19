import { useEffect, useState } from 'react'
import { getHealthRecords } from '../utils/fetchData'
import HealthRecord from './HealthRecord'
import { Link } from 'react-router-dom'
import { formatDate, handleFilter } from '../utils/utilityFunction'

const ListHealthRecord = () => {
    const [healthRecords, setHealthRecords] = useState(null)
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchDate, setSearchDate] = useState("")

    const getData = async () => {
        const response = await getHealthRecords()
        setHealthRecords(response)
        setFilteredRecords(response)

    }

    const filter = (e) => {
        const selectedOption = e.target.value
        const filteredRecord = handleFilter(selectedOption, healthRecords)
        setFilteredRecords(filteredRecord)
    }


    useEffect(() => {
        getData()
        
    }, [])


    return (
        <main className=' w-[100%]  max-sm:mt-10'>

            <div className="cta w-[90%]  mx-2 sm:w-[60%] my-4 text-white flex flex-wrap items-center justify-between">

                <label htmlFor='date' className='text-black font-bold flex  flex-wrap max-sm:w-[90%]'>Search by date:
                    <input onChange={(e) => setSearchDate(e.target.value)} id='date' type="date" className='border-2 text-black ' />
                    <select onChange={filter} className='text-black border-2 border-violet-600 sm:mx-4 max-sm:my-3'>
                        <option value="no-filter">Filter by Heart Rate</option>
                        <option value="less than equal 60">
                            Less than equal to 60 bpm
                        </option>
                        <option value="between 60 to 100">
                            Between 60 to 100 bpm
                        </option>
                        <option value="more than equal 100">
                            More than equal 100 bpm
                        </option>
                    </select>
                </label>
                <div className='max-sm:my-6 '>

                    <Link to="/health-record/add" className='p-2 mx-2 rounded-md bg-yellow-700  my-2'>Add New Record +</Link>
                </div>
            </div>


            <h1 className='text-center text-xl my-3 p-1'>List of Added Health Records</h1>
            <section className='w-[95%] mx-auto  p-2 flex flex-wrap'>
                { filteredRecords && (
                    <>
                        {filteredRecords.filter(record => {
                            if (searchDate === "") return true;
                            return formatDate(record.date) === searchDate;
                        }).length === 0 && searchDate !== "" && alert("No records found")}

                        {filteredRecords.filter(record => {
                            if (searchDate === "") return true;
                            return formatDate(record.date) === searchDate;
                        }).map((record, index) => (
                            <HealthRecord key={index} {...record} />
                        ))}
                    </>
                )}
            </section>

        </main>
    )
}

export default ListHealthRecord
