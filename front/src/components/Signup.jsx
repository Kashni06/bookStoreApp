import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import { useForm } from 'react-hook-form';
import Login from './Login';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(true); // Control modal visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = (data) => {
    console.log(data);
    // Optionally, you can close the modal after form submission
    setIsModalOpen(false);
    // Navigate to home page after signup
    navigate('/');  // This will redirect to the homepage
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');  // Redirect to homepage when modal is closed
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          {/* Modal Box */}
          {isModalOpen && (
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Close button */}
                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={closeModal} // Close the modal and navigate to homepage
                >
                  ✕
                </button>

                <h3 className="font-bold text-lg">Signup</h3>

                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Fullname"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register('name', { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-sm text-red-500">This field is required</span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register('email', { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">This field is required</span>
                  )}
                </div>

                {/* Password */}
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="password" // Password field type should be 'password'
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register('password', { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">This field is required</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-around mt-4">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                  >
                    Signup
                  </button>
                  <p className="text-xl">
                    Already have an account? 
                    <button
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() => setIsModalOpen(false)} // Open login modal
                    >
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Login */}
      {isModalOpen && <Login closeModal={closeModal} />}
    </>
  );
}

export default Signup;
