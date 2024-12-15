
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(true); 
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(false);
    navigate('/');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          {isModalOpen && (
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                  ✕
                </button>

                <h3 className="font-bold text-lg mb-6">Contact Us</h3>

                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="font-medium mb-2">Enter your Name</label>
                  <input id="name" type="text" placeholder="Your Full Name" className="w-full px-3 py-2 border rounded-md outline-none" {...register('name', { required: 'Name is required' })} />
                  {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="font-medium mb-2">Enter your Email Address</label>
                  <input id="email" type="email" placeholder="Your Email Address" className="w-full px-3 py-2 border rounded-md outline-none" {...register('email', { required: 'Email is required' })} />
                  {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col mb-6">
                  <label htmlFor="message" className="font-medium mb-2">Type your Message</label>
                  <textarea id="message" placeholder="Your Message" className="w-full px-3 py-2 border rounded-md outline-none" rows="5" {...register('message', { required: 'Message is required' })} />
                  {errors.message && <span className="text-sm text-red-500 mt-1">{errors.message.message}</span>}
                </div>

                <div className="flex justify-center mt-4">
                  <button type="submit" className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200">Send Message</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
