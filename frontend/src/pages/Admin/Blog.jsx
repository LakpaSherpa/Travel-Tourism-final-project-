import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { getBlog } from '../../api/blog'

// BlogTable component to render the table
function BlogTable({ blogs }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Author</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-gray-50 dark:bg-gray-800 dark:border-gray-700"}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{blog.title}</td>
              <td className="px-6 py-4">{blog.author}</td>
              <td className="px-6 py-4">{blog.date}</td>
              <td className="px-6 py-4">
                {/* Action buttons (e.g., Edit, Delete) */}
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlog();
        setBlogs(response.data); // Assuming the API response contains the blog data in `data`
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <AdminLayout>
      <div className="mx-auto p-4">
        {/* Add Blog button */}
        <div className="flex justify-between mb-4">
          <Link to="/admin/CreateBlog" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add Blog
          </Link>
        </div>

        {/* Loading and Error States */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <BlogTable blogs={blogs} />
        )}
      </div>
    </AdminLayout>
  );
}

export default Blog;
