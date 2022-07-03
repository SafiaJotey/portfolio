import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  const [error, setError] = useState('');
  const form = useRef();
  const {
    register,

    formState: { errors },
    reset,
  } = useForm();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bafd4re',
        'template_8r7yvc8',
        form.current,
        'SoERtjLjt-mVRccNn'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          setError(error.text);
        }
      );
    // Alert('Successfully!', 'Your message is sent successfully!', 'success');
    reset();
  };
  return (
    <div className="bg-dark overflow-hidden  p-5 ">
      <div className="row container-md">
        <div className="col-md-6">
          <p className="text-light text-justify my-5">
            I am Always ready to be a part of creative ideas. Finding a great
            opportunity to join a Creative Developer team where I can prove my
            abilities with my passion.Feel free to reach out me.
          </p>

          <div className="d-flex  justify-content-center align-items-center">
            <a
              href="http://www.linkedin.com/in/safiajotey"
              className="text-decoration-none text-light m-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-light fs-3 m-3" />
            </a>
            <a
              href="https://github.com/SafiaJotey"
              className="text-decoration-none text-light m-2"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-light fs-3 m-3" />
            </a>
            <a
              href="https://www.facebook.com/safiajotey"
              className="text-decoration-none text-light"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <AiFillFacebook className="text-light fs-3 m-3" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <form className="w-100   ps-md-5" ref={form} onSubmit={sendEmail}>
            <input
              className=" w-100  bg-transparent px-5  border-2 border-primary py-2  rounded my-1"
              {...register('user_name', {
                required: 'Name is Required',
              })}
              name="user_name"
              placeholder="Your Name"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}

            <input
              className=" w-100  bg-transparent px-5  border-2 border-primary py-2  rounded my-1"
              {...register('subject', {
                required: 'subject is Required',
              })}
              name="subject"
              placeholder="subject"
            />
            {errors.subject && (
              <small className="text-danger">{errors.subject.message}</small>
            )}

            <input
              className=" w-100  bg-transparent px-5  border-2 border-primary py-2  rounded my-2"
              type="email"
              {...register('user_email', {
                required: 'Email is Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              name="user_email"
              placeholder="Your Email "
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}

            <div className="col-span-2">
              <textarea
                className=" w-100  bg-transparent px-5  border-2 border-primary py-2  rounded my-1 "
                {...register('message', {
                  required: 'Message is Required',
                  minLength: {
                    value: 10,
                    message: 'Minimum Required length is 10',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Maximum allowed length is 50 ',
                  },
                })}
                placeholder="Write your message"
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>

            <div className="d-flex  justify-content-center align-items-center">
              {' '}
              <input
                className="bg-primary py-2 border-0 roundrd px-5 text-light rounded-2 mx-2"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex  justify-content-center align-items-center text-gray mt-5 text-center">
        All rights are preserved | SAFIA AHMED @2022
      </div>
    </div>
  );
};

export default Footer;
