import React from 'react';
import { useForm } from 'react-hook-form';
import AdminLayout from './AdminLayout';
import { addRegion } from '../../api/region';
import { notification } from "antd"

function RegionForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
         try {
        const response = await addRegion(data);
        notification.success({message:"Region added succesfully"})
    } catch (error) {
        notification.error({message:"Error to add region"})
        console.error('Failed to add region:', error.message);
        
    }
    };

    return (
        <AdminLayout>
            <div className="mx-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl mb-4 font-semibold text-gray-800">Add Region</h2>
                    <div className="mb-4">
                        <label htmlFor="regionName" className="block text-gray-700 font-medium mb-2">Region Name</label>
                        <input
                            type="text"
                            id="regionName"
                            className={`w-full border ${errors.regionName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            placeholder="Enter region name"
                            {...register('name', { required: true })}
                        />
                        {errors.regionName && <span className="text-red-500">Region Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="regionDescription" className="block text-gray-700 font-medium mb-2">Region Description</label>
                        <input
                            type="text"
                            id="regionDescription"
                            className={`w-full border ${errors.regionDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            placeholder="Enter region description"
                            {...register('regionDescription', { required: true })}
                        />
                        {errors.regionDescription && <span className="text-red-500">Region Description is required</span>}
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Add Region</button>
                </form>
            </div>
        </AdminLayout>
    );
}

export default RegionForm;
