import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { addBooking } from "../../api/booking";
import { notification } from "antd";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await addBooking(data);
      // Reset the form after successful submission
      reset();
      // Show success notification
      notification.success({
        message: "Booking added successfully",
        duration: 3,
      });
      // Close the popup
      setOrderPopup(false);
    } catch (error) {
      // Show error notification
      notification.error({
        message: "Failed to add booking",
        description: error.message,
        duration: 3,
      });
      console.error("Failed to add booking:", error.message);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`w-full rounded-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4`}
                  {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500">Name is required</span>}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full rounded-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4`}
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className={`w-full rounded-full border ${errors.address ? 'border-red-500' : 'border-gray-300'} dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4`}
                  {...register('address', { required: true })}
                />
                {errors.address && <span className="text-red-500">Address is required</span>}

                <div className="flex justify-center">
                  <button
                    type="submit" // Ensure button type is set to "submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
