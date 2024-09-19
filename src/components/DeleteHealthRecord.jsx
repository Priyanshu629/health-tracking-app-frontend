import { deleteHealthRecord } from "../utils/fetchData"


const DeleteHealthRecord = ({isOpen,setIsOpen,id}) => {

   
   
    
  return (
    <dialog open={isOpen}  className={`max-sm:w-[90%] max-sm:h-[150px] p-2 bg-gray-600 text-white rounded-md border-2 border-red-500 absolute  top-[20%]`}>
      <h2 className="font-bold ">Do you really want to delete this record ? </h2>
      <div className="w-[100%] flex justify-between p-2">
        <button onClick={()=>deleteHealthRecord(id)} className="p-2 bg-red-500 text-white rounded-md">Yes</button>
        <button onClick={()=>setIsOpen(false)} className="p-2 bg-green-600 text-white rounded-md">No</button>
       
      </div>
    </dialog>
  )
}

export default DeleteHealthRecord
