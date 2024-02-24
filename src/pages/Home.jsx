 import React from 'react';
 import heroImg01 from "../assets/images/hero-img01.png"
 import heroImg02 from "../assets/images/hero-img02.png"
 import heroImg03 from "../assets/images/hero-img03.png"
 import icon01 from "../assets/images/icon01.png"
 import icon02 from "../assets/images/icon02.png"
 import icon03 from "../assets/images/icon03.png"
 import featureImg from "../assets/images/feature-img.png"
 import videoIcon from "../assets/images/video-icon.png"
 import avatarIcon from "../assets/images/avatar-icon.png"
 import faqImg from "../assets/images/faq-img.png";
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About';
import Servicelist from '../components/Services/Servicelist';
import DoctorList from '../components/Doctors/doctorList';
import FaqList from '../components/faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

 const Home = () => {
    return <>
       {/*-------------------HERO SECTION---------------- */}
       <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'> 
               {/*-------------------HERO CONTENT--------------- */}
               <div>
                <div className='lg:w-[570px]'>
                    <h1 className='text-[36px] leading-[46px] text- headingColor font-[800] md:text-[60px]
                    md:leading-[70px]' >
                          We help patients live a healthy , longer life
                    </h1>
                    <p className='text__para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa 
                    leo, elementum vitae leo accumsan, ultrices imperdiet ligula. Aliquam 
                    erat volutpat. Praesent vitae ligula nibh. Donec posuere, velit eu auctor 
                    imperdiet, magna massa convallis nisl, at vehicula urna felis ac massa. 
                    Donec cursus cursus leo, eu fermentum neque semper et. Suspendisse at 
                    blandit magna, vitae dapibus dolor. 
                    </p>

                <button className='btn'>Consult Now </button>
                </div>

               {/*-------------------HERO COUNTER-------------- */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center
                gap-5 lg:gap-[30px]'>
                 <div>
                  {/** leading is the line height of the text. Line height is the vertical space between lines of text.
                   * screens with the large that is (lg) it adjusts the text size to 44 pixels.
                   * For large screens, it adjusts the line height to 54 pixels.
                   * This sets the font weight to 700, which is often a bold or semi-bold style.
                   */}
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]     
                  text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of expirence</p>
                 </div>

                 <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]     
                  text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinics Location</p>
                 </div>

                 <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]     
                  text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfication </p>
                 </div>


                </div>

               </div>
                     {/*-------------------HERO CONTENT--------------- */}
            <div className='flex gap-[30px] justify-end'>
               <div>
                  <img className='w-full' src={heroImg01} alt='' />
               </div>
               <div className='mt-[30px]'>
                  <img src={heroImg02} className='w-full mb-[20px]' alt='' /> 
                  {/* <img src={heroImg03} className='w-full' /> */}
               </div>
            </div>
         </div>
        </div>
       </section>

  {/*-------------------HERO SECTION END ---------------- */}
  <section>
   <div className='container'>
      <div className='lg:w-[470px] mx-auto'>
         <h2 className='heading text-center text-headingColor'>Providing the best medical services </h2>
         <p className='text__para text-center'>World-class care for everyone. Our health system offers 
         unmatched, expert health care.
         </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]  mt-[30px] lg:mt-[55px]'>

          <div className='py-[30px] px-5'>
             <div className='flex items-center justify-center'> 
                <img src={icon01} alt='' />
             </div>

              <div className='mt-[30px]'>
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                   Find a Doctor
                 </h2>
                 <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>
                       World-class care for everyone. Our health system offers unmatched, expert health care.
                 </p>

                 <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid 
                 border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                 hover:border-none'>
                      <BsArrowRight className='group-hover:text-whitew-6 h-5'/>
                 </Link>
              </div>
          </div>

          <div className='py-[30px] px-5'>
             <div className='flex items-center justify-center'> 
                <img src={icon02} alt='' />
             </div>

              <div className='mt-[30px]'>
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                   Find a Location
                 </h2>
                 <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>
                       World-class care for everyone. Our health system offers unmatched, expert health care.
                 </p>

                 <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid 
                 border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                 hover:border-none'>
                      <BsArrowRight className='group-hover:text-whitew-6 h-5'/>
                 </Link>
              </div>
          </div>

          <div className='py-[30px] px-5'>
             <div className='flex items-center justify-center'> 
                <img src={icon03} alt='' />
             </div>

              <div className='mt-[30px]'>
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                   Book Appointment 
                 </h2>
                 <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>
                       World-class care for everyone. Our health system offers unmatched, expert health care.
                 </p>

                 
              </div>
          </div>
      </div>
   </div>
  </section>

   <About/>
     {/*-------------------Serivices SECTION ---------------- */}
     <section>
      <div className='container'>
         <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our medical Serivices </h2>
            <p className='text__para text-center'>
               World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
         </div>


         <Servicelist/>
      </div>
     </section>


       {/*-------------------FEATURES SECTION START ---------------- */}

      <section>
         <div className='container'>
            <div className='flex items-center justify-between flex-col lg:flex-row'>

               {/*-------------------FEATURE  content ---------------- */}
             
             <div className='xl:w-[670px]'>
               <h2 className='heading'>
                  Get Virtual Treatment
               </h2>
               <ul className='pl-4'>

                  <li className='text__para'>
                     1. Schedule the Appointment
                  </li>

                  <li className='text__para'>
                     2. search for your physician here, and contact their office.
                  </li>

                  <li className='text__para'>
                      3. View your physicians who are accpeting new patients, use 
                      the online scheduling tool to select an appointment time.
                  </li>
               </ul>
               <Link to='/'>
                  <button className='btn'>Know More</button>
               </Link>
             </div>
          {/*-------------------FEATURE img ---------------- */}
             <div className='realtive z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
               <img src={featureImg} className='w-3/4'   alt='' />

               <div className='w-[150px] lg:w-[248px] bg-white relative bottom-[150px] ml-[50px] left-0 
               md:bottom-[100px] md:left-5 z-10 top-0  p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]  '>

              <div className='flex items-center justify-between '>
              <div className='flex items-center gap-[6px] lg:gap-3 '>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                  Tue, 24
               </p>
               <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 `text-textColor font-[400] '>
                  10:00Am
               </p>
              </div>
               <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center 
               bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] '>
                  <img src={ videoIcon} alt='' />
               </span>
               </div>
               
               <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
               leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full '>
                     Consultation
               </div>
               
                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] '>
                  <img src={avatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                  text-headingColor'>
                     Wayne Collins
                  </h4>
                </div>
               </div>
             </div>
            </div>
          </div>
      </section>

       {/*-------------------FEATURES SECTION END ---------------- */}

          {/*-------------------OUR GREAT DOCTORS ---------------- */}

           <section>
            <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Doctors  </h2>
            <p className='text__para text-center'>
               World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
         </div>

         <DoctorList/>
            </div>
           </section>

             {/*-------------------OUr Doctoes END ---------------- */}

         {/*-------------------faq section Start ---------------- */}
         
         <section>
            <div className='container'>
               <div className='flex justify-between gap-[50px]  lg:gap-0 '>
                  <div className='w-1/2 hidden md:block'>
                     <img src={faqImg} />
                  </div>

                  <div className='w-full md:w-1/2 '>
                        <h2 className='heading '>
                           Most questions by our beloved patients
                        </h2>
                  
                  <FaqList/>
                  </div>
               </div>
            </div>
         </section>

         {/*-------------------faq section END ---------------- */}

       {/*-------------------TESTIMONIAL START ---------------- */}

      <section>
         <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
               <h2 className='heading text-center'>What Our Patients Say</h2>
               <p className='text__para text-center'>
               World-class care for everyone. Our health system offers unmatched, expert health care.
               </p>
            </div>
            <Testimonial/>
         </div>
      </section>

       {/*-------------------TESTIMONIAL END ---------------- */}
             
    </>
 }
 
 export default Home;
 



 