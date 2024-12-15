import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(true); // Control modal visibility

  const onSubmit = (data) => {
    console.log(data);
    // Optionally, you can close the modal after form submission
    setIsModalOpen(false);
  };

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box relative">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
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
                  type="password" // Changed from 'text' to 'password'
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;
