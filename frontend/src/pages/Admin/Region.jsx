import React, { useState, useEffect } from 'react';
import { getRegion } from '../../api/region';
import AdminLayout from './AdminLayout';
import { Link } from 'react-router-dom';

function RegionRow({ region }) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {region.name}
            </th>
            <td className="px-6 py-4">
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
            </td>
        </tr>
    );
}

function RegionTable() {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRegions() {
            try {
                const response = await getRegion();
                if (!response) {
                    throw new Error('Network response was not ok');
                }
                setRegions(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchRegions();
    }, []);

    

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <AdminLayout>
            <div className="relative overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Regions</h2>
                    <Link to="/admin/createRegion" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                        Create Region
                    </Link>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Region Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {regions.map((region, index) => (
                            <RegionRow key={index} region={region} />
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}

export default RegionTable;
