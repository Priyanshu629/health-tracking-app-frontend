import { useEffect, useState } from 'react';
import { getHealthRecords } from '../utils/fetchData';
import HealthRecord from './HealthRecord';
import { Link } from 'react-router-dom';
import { formatDate, handleFilter } from '../utils/utilityFunction';

const ListHealthRecord = () => {
    const [healthRecords, setHealthRecords] = useState(null);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchDate, setSearchDate] = useState("");

    const getData = async () => {
        const response = await getHealthRecords();
        setHealthRecords(response);
        setFilteredRecords(response);
    };

    const filter = (e) => {
        const selectedOption = e.target.value;
        let recordsToFilter = healthRecords;

        // If there's a search date, filter by date first
        if (searchDate) {
            recordsToFilter = healthRecords.filter(record => formatDate(record.date) === searchDate);
        }

        const filteredRecord = handleFilter(selectedOption, recordsToFilter);
        setFilteredRecords(filteredRecord);
    };
    

    useEffect(() => {
        getData();
    }, []);

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSearchDate(date);

        if (date) {
            const recordsByDate = healthRecords.filter(record => formatDate(record.date) === date);
            setFilteredRecords(recordsByDate);
        } else {
            setFilteredRecords(healthRecords); // Reset to all records if no date is selected
        }
    };

    return (
        <main className='w-[100%] max-sm:mt-10'>
            <div className="cta w-[90%] mx-2 sm:w-[60%] my-4 text-white flex flex-wrap items-center justify-between">
                <label htmlFor='date' className='text-black font-bold flex flex-wrap max-sm:w-[90%]'>
                    Search by date:
                    <input 
                        onChange={handleDateChange} 
                        id='date' 
                        type="date" 
                        className='border-2 text-black ' 
                    />
                    <select onChange={filter} className='text-black border-2 border-violet-600 sm:mx-4 max-sm:my-3'>
                        <option value="no-filter">Filter by Heart Rate</option>
                        <option value="less than equal 60">Less than or equal to 60 bpm</option>
                        <option value="between 60 to 100">Between 60 to 100 bpm</option>
                        <option value="more than equal 100">More than or equal to 100 bpm</option>
                    </select>
                </label>
                <div className='max-sm:my-6'>
                    <Link to="/health-record/add" className='p-2 mx-2 rounded-md bg-yellow-700 my-2'>Add New Record +</Link>
                </div>
            </div>

            <h1 className='text-center text-xl my-3 p-1'>List of Added Health Records</h1>

            {filteredRecords.length !== 0 ? (
                <p className='text-green-600 font-bold text-center'>{filteredRecords.length} record(s) found</p>
            ) : (
                <p className='text-red-600 font-bold text-center'>No records found</p>
            )}

            <section className='w-[95%] mx-auto p-2 '>
                <div className='flex flex-wrap w-[100%]'>
                    {filteredRecords.filter(record => {
                        if (searchDate === "") return true;
                        return formatDate(record.date) === searchDate;
                    }).map((record, index) => (
                        <HealthRecord key={index} {...record} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ListHealthRecord;
