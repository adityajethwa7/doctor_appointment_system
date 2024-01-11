//import React from 'react'
import heroimg1 from "../assets/assets/images/hero-img01.png";
import heroimg02 from "../assets/assets/images/hero-img02.png";
import heroimg03 from "../assets/assets/images/hero-img03.png";
import icon01 from "../assets/assets/images/icon01.png";
import icon02 from "../assets/assets/images/icon02.png";
import icon03 from "../assets/assets/images/icon03.png";
import About from "../component/about/About";
import { Link } from "react-router-dom";
import featureImg from "../assets/assets/images/feature-img.png";
import videoIcon from "../assets/assets/images/video-icon.png";
import { BsArrowRight } from "react-icons/bs";
import faqImg from '../assets/assets/images/faq-img.png'
import ServiceList from "../component/Services/ServiceList";
import avatarIcon from "../assets/assets/images/avatar-icon.png";
import "./home.css";
import DoctorList from '../component/doctors/DoctorList';
import FaqList from "../component/faq/FaqList";
import Testimonials from "../component/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We Help Patients to live a Healthy and Longer Life.
                </h1>
                <br />
                <p>
                  Surgeries are long and tedious and a hospital must know the
                  schedule of surgeries, to avoid overbooking and ensure
                  availability of the required surgeons, other doctors and
                  operation theatre staff. A hospital would be able to send
                  operation schedules, test results, and other details to
                  patients/next of kin, while also sending reminders to the
                  presiding surgeon and other staff required for a procedure.
                </p>
                <button className="btn">Request Appointment</button>
              </div>
              <div>
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
 text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para">Years of Experiance</p>
                  </div>
                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
 text-headingColor">
                      10
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para">Years of Experiance</p>
                  </div>
                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
 text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para">patient satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroimg1} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroimg02} alt="" className="w-full mb-[30px]" />
                <img src={heroimg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing The Best Medical Services
            </h2>
            <p className="text__para text-center">
              World-Class Care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid:cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div>
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[300] mt-6 text-center">
                  World-class care for everyone. Our health <br />
                  System offers unmatched, expert health care. from the lab to
                  the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
    mt-[30px] mx-auto flex items-center justify-center group hover:bg-black
    hover:border-none">
                  {/* <BsArrowRight/>
    {/* </Link> */}
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find Location
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health <br />
                  System offers unmatched, expert health care. from the lab to
                  the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
    mt-[30px] mx-auto flex items-center justify-center group hover:bg-black
    hover:border-none">
                  {/* <BsArrowRight/>
    {/* </Link> */}
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. 3 Our health
                  <br /> System offers unmatched, expert health care. from the
                  lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
    mt-[30px] mx-auto flex items-center justify-center group hover:bg-black
    hover:border-none">
                  {/* <BsArrowRight/>
    {/* </Link> */}
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex item-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime.{" "}
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.schedule the appointment directly.
                </li>
                <li className="text__para">
                  2.Search your physician here,and contact their office.
                </li>
                <li className="text__para">
                  3.View our physician who are accepting new patients,use the
                  online scheduling to select an appointment time.
                </li>
              </ul>
              <button className="button" onClick={<Link to="/" />}>
                Learn More
              </button>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0"></div>
            <img src={featureImg} className="w-3/4" alt=" " />

            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:button-[100px] md:left-5 z-20 p-2  pb-3 lg:pt-4 mg:px-4 lg:pb-[26px] rounded-[10px] ">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                    10:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt="" />
                </span>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ====service section=====*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health System offers unmatched,
              expert health care.
            </p>
          </div>
        </div>
      </section>
      {/* ========feature section end======== */}
      {/* ========our great doctors =========*/}
      <section>
        <div className="container"></div>
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health System offers unmatched,
              expert health care.
            </p>
          </div>

        <DoctorList/>
      </section>
      {/* ========our great doctors =========*/}
      
 <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div>
             <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w;1/2">
              <h2 className="heading">Most questions by our beloved patients</h2>
            <FaqList/>
            </div>
          </div>
        </div>
      </section>
 <section>
 <div className="container"></div>
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient Say</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonials/>
          
 </section>
    </>
  );
};

export default Home;
