import emailjs from '@emailjs/browser';
import { Alert } from 'bootstrap';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
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
        'service_mq9g747',
        'template_8r7yvc8',
        form.current,
        'SoERtjLjt-mVRccNn'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Alert('Successfully!', 'Your message is sent successfully!', 'success');
    reset();
  };
  return (
    <div className="bg-dark overflow-hidden  p-5 ">
      <div className="row container-md">
        <div className="col-md-6">
          <p className="text-light text-justify my-5">
            I am Always ready to be a part of a creative ideas. Finding a great
            opportunity to join a Creative Developer team where I can prove my
            abilities with my passion by providing and contributing my
            potential. Learning new things also reflect on my skills which helps
            to bring the organization to a new level. Feel free to reach out me.
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
              className=" w-100  bg-gray-100 px-5 outline-none border-2 py-2 focus:border-primary  rounded my-1"
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
              className=" w-100 mb-0 md:mb-5 lg:mb-0 outline-none border-2 bg-gray-100 focus:border-primary px-5 rounded py-2 my-1 "
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
                className=" w-100 bg-gray-100 py-5 px-5 outline-none border-2 focus:border-primary my-2 "
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

            <input
              className="formBtn  px-6 md:w-2/6   py-2 text-white mx-auto lg:ml-0 rounded-md f"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
      <div className="d-flex  justify-content-center align-items-center text-gray">
        All rights are preserved | SAFIA AHMED @2022
      </div>
    </div>
  );
};

export default Footer;
