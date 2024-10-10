import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
// "use client"

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
// import Typewriter from 'react-typewriter-effect';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { motion } from 'framer-motion';

// interface FormInputs {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
//   const [showEmailInput, setShowEmailInput] = useState(false);
//   const [showMessageInput, setShowMessageInput] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const onSubmit = (data: FormInputs) => {
//     const emailData: Record<string, string> = {
//       name: data.name,
//       email: data.email,
//       message: data.message
//     };

//     emailjs.send(
//       'service_wuhybx9',
//       'template_q9j0h9n',
//       emailData, 
//       'YCUm9fAeK35hme2YR'
//     )
//     .then(() => {
//       setSubmitted(true);
//       toast.success('Message sent successfully!');
//       reset();  
//     })
//     .catch(() => {
//       toast.error('Error sending message. Please try again later.');
//     });
//   };

//   const handleKeyDown = (event: React.KeyboardEvent, nextStep: () => void) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       nextStep();
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-200 p-4">
//       <ToastContainer />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-lg"
//       >
//         {!submitted ? (
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Name Input Step */}
//             <Typewriter
//               textStyle={{
//                 fontFamily: 'monospace',
//                 fontSize: '24px',
//                 color: '#ffffff',
//               }}
//               startDelay={200}
//               cursorColor="white"
//               text="What is your name?"
//               typeSpeed={70}
//             />
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mt-4"
//             >
//               <input
//                 {...register('name', { required: 'Name is required' })}
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 bg-gray-700 border-none rounded-lg"
//                 onKeyDown={(event) => handleKeyDown(event, () => setShowEmailInput(true))}
//               />
//               {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//             </motion.div>

//             {showEmailInput && (
//               <>
//                 <Typewriter
//                   textStyle={{
//                     fontFamily: 'monospace',
//                     fontSize: '24px',
//                     color: '#ffffff',
//                   }}
//                   startDelay={500}
//                   cursorColor="white"
//                   text="What is your email?"
//                   typeSpeed={70}
//                 />
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="mt-4"
//                 >
//                   <input
//                     {...register('email', {
//                       required: 'Email is required',
//                       pattern: {
//                         value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                         message: 'Invalid email address'
//                       }
//                     })}
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-3 bg-gray-700 border-none rounded-lg"
//                     onKeyDown={(event) => handleKeyDown(event, () => setShowMessageInput(true))}
//                   />
//                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                 </motion.div>
//               </>
//             )}

//             {showMessageInput && (
//               <>
//                 <Typewriter
//                   textStyle={{
//                     fontFamily: 'monospace',
//                     fontSize: '24px',
//                     color: '#ffffff',
//                   }}
//                   startDelay={500}
//                   cursorColor="white"
//                   text=" Your Message?"
//                   typeSpeed={70}
//                 />
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="mt-4"
//                 >
//                   <textarea
//                     {...register('message', {
//                       required: 'Message is required',
//                       minLength: {
//                         value: 10,
//                         message: 'Message should be at least 10 characters long'
//                       }
//                     })}
//                     placeholder="Your Message"
//                     className="w-full p-3 bg-gray-700 border-none rounded-lg h-32"
//                   />
//                   {errors.message && <p className="text-red-500">{errors.message.message}</p>}
//                 </motion.div>

//                 {/* Submit Button (only show after all inputs are completed) */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"
//                   className="w-full bg-sky-600 text-white p-3 rounded-lg mt-6"
//                 >
//                   Send Message
//                 </motion.button>
//               </>
//             )}
//           </form>
//         ) : (
//           <h3 className="text-2xl text-center">
//             Thank you for reaching out! 😊 We'll get back to you soon.
//           </h3>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ContactForm;
