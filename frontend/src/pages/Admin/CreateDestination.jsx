import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminLayout from './AdminLayout';
import { addDestination } from '../../api/destination';
import { getRegion } from '../../api/region';
import { uploadFile } from '../../api/upload';
import { notification } from "antd";

function DestinationForm() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [regions, setRegions] = useState([]);
    const [imageFile, setImageFile] = useState(null); 

    useEffect(() => {
        async function fetchRegions() {
            try {
                const response = await getRegion();
                setRegions(response.data);
            } catch (error) {
                console.error('Failed to fetch regions:', error.message);
            }
        }
        fetchRegions();
    }, []);

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        try {
            const { name, description, country, region, imageURL, price } = data;
            
      
          
            const formData = new FormData();
            formData.append('imageFile', imageFile);
            console.log(formData, "fd")
            const uploadResponse = await uploadFile(formData);
            console.log(uploadResponse, "up")

            const destinationData = {
                name,
                description,
                country,
                region,
                imageURL: uploadResponse.data.filename, // assuming the server returns the URL of the uploaded image
                price
            };

            const response = await addDestination(destinationData);
            notification.success({ message: "Destination added successfully" });
        } catch (error) {
            notification.error({ message: "Error adding destination" });
            console.error('Failed to add destination:', error.message);
        }
    };

    return (
        <AdminLayout>
            <div className="mx-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl mb-4 font-semibold text-gray-800">Add Destination</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Destination Name</label>
                        <input
                            type="text"
                            id="name"
                            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            placeholder="Enter destination name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-red-500">Destination Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Destination Description</label>
                        <input
                            type="text"
                            id="description"
                            className={`w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            placeholder="Enter destination description"
                            {...register('description', { required: true })}
                        />
                        {errors.description && <span className="text-red-500">Destination Description is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                        <input
                            type="text"
                            id="country"
                            className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            placeholder="Enter country"
                            {...register('country', { required: true })}
                        />
                        {errors.country && <span className="text-red-500">Country is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="regionId" className="block text-gray-700 font-medium mb-2">Region</label>
                        <select
                            id="regionId"
                            className={`w-full border ${errors.regionId ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            {...register('region', { required: true })}
                        >
                            <option value="">Select a region</option>
                            {regions.map((region) => (
                                <option key={region._id} value={region._id}>
                                    {region.name}
                                </option>
                            ))}
                        </select>
                        {errors.region && <span className="text-red-500">Region is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price</label>
                        <input
                            type="number"
                            id="price"
                            className={`w-full border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            placeholder="Enter price"
                            {...register('price', { required: true })}
                        />
                        {errors.price && <span className="text-red-500">Price is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image</label>
                        <input
                            type="file"
                            id="image"
                            className={`w-full border ${errors.imageURL ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400`}
                            {...register('imageFile', { required: true })}
                            onChange={handleFileChange}
                        />
                        {errors.imageURL && <span className="text-red-500">Image is required</span>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Add Destination</button>
                </form>
            </div>
        </AdminLayout>
    );
}

export default DestinationForm;
