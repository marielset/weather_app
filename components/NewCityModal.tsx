import { useRouter } from "next/navigation";
import React, { useState } from 'react';

export const AddCityModal = ({ isOpen, onClose }:
    { isOpen: any;
    onClose: any;}) => {
        const [city, setCity] = useState("");
    const router = useRouter()
  
    const onSubmit = async () => {
        setCity("");
        onClose();
      router.refresh();
    }
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-600 text-white relative border border-gray-700 rounded-lg w-96 p-4">
          <button className="absolute top-2 right-2 text-white" onClick={onClose}>x</button>
          <h3 className="text-xl font-bold mb-4">Add A New City</h3>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">City:<span className="text-red-500">*</span></label>
                <input 
                type="text" 
                className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
            </div>
            
            <button type="submit" className="bg-gray-900 text-white rounded p-2">Add City</button>
          </form>
        </div>
      </div>
    );
  };