import TopHeader from '../../components/TopHeader/TopHeader'
import NavBar from '../../components/Navbar/Navbar'
import Image from '../../assets/Image.svg';
import "./contactpage.css"
import Footer2 from '../../components/Footer/Footer2';

import emailjs from '@emailjs/browser';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';





const Contact = () => {
  const form = useRef()
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      from_name: '', //user name
      to_name: '', //email id of the admin
      subject: '', // subject of email
      reply_to: '',
      form_company: '', // user email
      message: '',// message of email
      form_phone: '',
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .required('* Name field is required'),
      subject: Yup.string()
        .required('* Subject field is required'),
      reply_to: Yup.string().email('Invalid email address')
        .required('* Email field is required'),
      message: Yup.string().required('* Message field is required'),

      form_phone: Yup.string().matches(phoneRegExp, 'Phone Number is not Valid').required('* phone field is required'),
      form_company: Yup.string().required('* company field is required')
    }),
  });
  const sendEmail = (e) => {
    // Email JS code will go here
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          '6ss9c49PrS_sCHrRw',
          'service_f666n4e',
          'template_z2kni7j',
          form.current,
        ).then(
          result => console.log(result.text),
          error => console.log(error.text),
          alert("message send sucessfully")
        )
    }
    catch {
      () => {
        console.log(ErrorMessage)
      }
    }
  }
  return (

    <div className='relative'>
      <TopHeader />
      <NavBar />
      <header className='headerContact'>
        <div className="upper" style={{ backgroundImage: `url(${Image})` }}>
          <div className=' p-5 sm:p-8 '>
            <h1 className='text-white font-semibold text-[20px] sm:text-[32px] mt-6 headerContact w-auto sm:w-[703px] mx-auto  text-center' >
              Get in touch & let us know how we can help</h1>
          </div>
          <div className="socioIcon flex  flex-col-reverse justify-center sm:flex sm:flex-row w-auto sm:w-[754px] mx-auto ">
            <div className="whatsapp flex flex-wrap mr-10">
              <img className='sm:h-[28px] sm:w-[28px] h-[20px] w-[20px] hidden sm:block ' src="./Vector.svg" alt="logo" />
              <p className='text-white font-medium  ml-4 hidden sm:block text-[16px] sm:text-[18px]' style={{ lineHeight: "30.3px" }}><a href="whatsapp.com">Chat With US</a></p>
            </div>
            <div className="phone  mx-auto sm:mx-0   flex flex-wrap ">
              <img className=' ml-10 sm:ml-0 mb-0 mt-2 sm:mt-0 sm:h-[38px] sm:w-[28px] h-[20px] w-[20px]' src="./Vector (1).svg" alt="logo" />
              <p className='text-white font-medium  ml-3 mx-auto mr-10 text-[16px] sm:text-[18px]' style={{ lineHeight: "33.3px" }}> +91 9560190710</p>
            </div>
            <div className="mail flex mx-auto sm:mx-0 mb-5">
              <img className='sm:mb-1 mb-0 mt-2 sm:mt-0 sm:h-[36px] sm:w-[26px] h-[20px] w-[20px]' src="./Vector (2).svg" alt="logo" />
              <p className='text-white ml-4 font-medium  text-[16px] sm:text-[18px]'style={{ lineHeight: "33.3px" }}>utpal@molequle.biz</p>
            </div>
          </div>
        </div>
      </header>
      <div className='sm:h-[28rem] h-screen mb-0 sm:mb-32'></div>
      <Footer2 />
      <div>

        <form className='absolute left-0 right-0 mx-auto top-80 sm:mt-12 mt-6 sm:w-[1198px] w-[343px] h-auto   bg-white rounded-xl shadow' onSubmit={sendEmail} ref={form}>
          <div className="text-gray-700  " >
            <div className="container px-5 sm:px-12 py-12  mx-auto" >
              <div className=" mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-auto sm:w-1/2 " >
                    <div className="relative " >
                      <div className='flex'>
                      <label htmlFor="form_name" className="leading-7  text-sm text-black font-bold ">
                        Full Name*
                      </label>
                      <div className={ `expandable ${formik.touched.from_name && formik.errors.from_name ? 'show' : ''}`} style={{marginLeft:"20px" , color:"red"}}>
                        {formik.errors.from_name}
                      </div>
                      </div>
                      <input

                        id="username"
                        onChange={formik.handleChange}
                        value={formik.values.from_name}
                        type="text"
                        name="from_name"
                        placeholder='jhon david'
                        className="sm:w-full mt-5 rounded-2xl h-16 border font-normal border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out w-[319px]"
                      />
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-auto">
                    <div className="relative">
                      <div className='flex'>
                      <label
                        htmlFor="to_name"
                        className="leading-7 text-sm text-gray-600 font-bold"
                      >
                        Email*
                      </label>
                      <div className={`expandable ${formik.touched.to_name && formik.errors.to_name ? 'show' : ''}`} style={{marginLeft:"20px" , color:"red"}}>
                        {formik.errors.to_name}
                      </div>
                      </div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.to_name}
                        type="email"
                        id="to_name"
                        name="to_name"
                        placeholder='example@youremail.com'
                        className="sm:w-full mt-5 rounded-2xl h-16 border font-normal border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out w-[319px]"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-auto sm:w-1/2 mt-5">
                    <div className="relative">
                      <div className='flex'>
                      <label htmlFor="Phone_NUmber" className="leading-7 text-sm font-bold text-gray-600">
                        Phone Number*
                      </label>
                      <div className={`expandable ${formik.touched.form_phone && formik.errors.form_phone ? 'show' : ''}`} style={{marginLeft:"20px" , color:"red"}}>
                        {formik.errors.form_phone}
                      </div>
                      </div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.form_phone}
                        type="number"
                        id="form_phone"
                        name="form_phone"
                        placeholder='your phone number'
                        className="sm:w-full mt-5 h-16 rounded-2xl font-normal border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out w-[319px]"
                      />
                    </div>
                  </div>
                  <div className="p-2  w-auto sm:w-1/2 mt-5 ">
                    <div className="relative">
                      <div className='flex'>
                      <label
                        htmlFor="subject"
                        className="leading-7 text-sm font-bold text-gray-600"
                      >
                        Company Name*
                      </label>
                      <div className={`expandable ${formik.touched.subject && formik.errors.subject ? 'show' : ''}`} style={{marginLeft:"20px" , color:"red"}}>
                        {formik.errors.subject}
                      </div>
                      </div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                        type="Text"
                        id="subject"
                        name="subject"
                        placeholder='your company name'
                        className="sm:w-full mt-5 h-16 font-normal rounded-2xl border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out w-[319px]"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full mt-5">
                    <div className="relative">
                      <div className='flex'>
                      <label
                        htmlFor="Messages"
                        className="leading-7 text-sm font-bold text-gray-600"
                      >
                        Message*
                      </label>
                      <div className={`expandable ${formik.touched.message && formik.errors.message ? 'show' : ''}`} style={{marginLeft:"20px" , color:"red"}}>
                        {formik.errors.message}
                      </div>
                      </div>
                      <textarea
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        id="message"
                        name="message"
                        placeholder='Hello there,I would like to talk about how to...'
                        className="w-full mt-5 h-64 rounded-2xl border border-gray-300 focus:border-purple-500  text-base outline-none font-normal text-gray-700 py-5 px-6 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2">
                    <button type="submit" className="mt-4 text-white bg-purple-600 border-0 text-sm  py-2 px-[1rem] sm:px-8 focus:outline-none hover:bg-purple-800 sm:h-[68.59px]  sm:text-base rounded-lg font-medium float-left sm:w-[195px] w-[141px] h-[56px]">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact