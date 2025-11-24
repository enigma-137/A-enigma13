"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm<FormInputs>();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = (data: FormInputs) => {
    const emailData: Record<string, string> = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send('service_wuhybx9', 'template_q9j0h9n', emailData, 'YCUm9fAeK35hme2YR')
      .then(() => {
        setSubmitted(true);
        toast.success('Message sent successfully!');
        reset();
        setStep(1);
      })
      .catch(() => {
        toast.error('Error sending message. Please try again later.');
      });
  };

  const handleKeyDown = async (event: React.KeyboardEvent, field: keyof FormInputs) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const isValid = await trigger(field);
      if (isValid) {
        setStep((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center font-sans p-4">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full p-8 rounded-lg shadow-lg"
      >
        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isClient && (
                    <div className="text-xl font-mono mb-4">
                      <Typewriter
                        words={["Please enter your name"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </div>
                  )}
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-primary/10 border border-primary/50 rounded-lg"
                    onKeyDown={(event) => handleKeyDown(event, 'name')}
                    autoFocus
                  />
                  {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
                  <p className="text-xs text-gray-400 mt-2">Press Enter to continue</p>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isClient && (
                    <div className="text-xl font-mono mb-4">
                      <Typewriter
                        words={["Now please enter your email"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </div>
                  )}
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-primary/10 border border-primary/50 rounded-lg"
                    onKeyDown={(event) => handleKeyDown(event, 'email')}
                    autoFocus
                  />
                  {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                  <p className="text-xs text-gray-400 mt-2">Press Enter to continue</p>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isClient && (
                    <div className="text-xl font-mono mb-4">
                      <Typewriter
                        words={["Now enter your message"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </div>
                  )}
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters long',
                      },
                    })}
                    placeholder="Your Message"
                    className="w-full p-3 bg-primary/10 border border-primary/50 rounded-lg h-32"
                    autoFocus
                  />
                  {errors.message && <p className="text-red-500 mt-2">{errors.message.message}</p>}
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-black dark:bg-gray-200 text-white dark:text-gray-900 p-3 rounded-lg mt-6"
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        ) : (
          <h3 className="text-2xl text-center">
            Thank you for reaching out! 😊 We'll get back to you soon.
          </h3>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
