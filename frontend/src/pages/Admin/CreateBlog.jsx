import React from 'react';
import AdminLayout from './AdminLayout';
import { useForm } from 'react-hook-form';
import { addBlog } from '../../api/blog'

function CreateBlog() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const onSubmit = async (data) => {
    data.author = "admin"
    setLoading(true);
    setError('');
    
    try {
      const response = await addBlog(data);
      console.log('Blog created successfully:', response.data);
      reset(); // Reset form fields
    } catch (error) {
      setError(error.message);
      console.error('Failed to create blog:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 font-semibold text-gray-800">Create Blog</h2>
          {error && <div className="mb-4 text-red-600">{error}</div>}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title:</label>
            <input
              type="text"
              id="title"
              {...register('title', { required: 'Title is required' })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description:</label>
            <textarea
              id="description"
              {...register('content', { required: 'content is required' })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image URL:</label>
            <input
              type="text"
              id="image"
              {...register('image', { required: 'Image URL is required' })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">Tags:</label>
            <input
              type="text"
              id="tags"
              {...register('tags', { required: 'Tags are required' })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default CreateBlog;
