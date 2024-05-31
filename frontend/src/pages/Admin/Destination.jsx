import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Link } from 'react-router-dom';
import { getDestination } from '../../api/destination';

function DestinationRow({ destination }) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {destination.name}
            </th>
            <td className="px-6 py-4">
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
            </td>
        </tr>
    );
}

function DestinationTable() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDestinations() {
            try {
                const response = await getDestination();
                if (!response) {
                    throw new Error('Network response was not ok');
                }
                setDestinations(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchDestinations();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <AdminLayout>
            <div className="relative overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Destinations</h2>
                    <Link to="/admin/createDestination" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                        Create Destination
                    </Link>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Destination Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {destinations.length === 0 ? (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td colSpan="2" className="px-6 py-4 text-center text-gray-900 dark:text-white">
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            destinations.map((destination, index) => (
                                <DestinationRow key={index} destination={destination} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}

export default DestinationTable;
