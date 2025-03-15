import './Home_style.css'
import React from 'react';
import {Data} from './SliderImage.js';
import {Card} from './Cards.jsx';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import { useState } from 'react';
import {Questions} from './QuestionList.js';
import {Contents} from './Content.js';


function Home() {
  const sliderLeft=()=>{
    let slider=document.getElementById('scroll')
    let scrollAmount=1040
    if (window.innerWidth<640){
      scrollAmount=440
    }
    else if(window.innerWidth<1024){
      scrollAmount=640
    }
    slider.scrollLeft=slider.scrollLeft-scrollAmount;
  };
  const sliderRight=()=>{
    let slider=document.getElementById('scroll')
    let scrollAmount=1040
    if (window.innerWidth<640){
      scrollAmount=440
    }
    else if(window.innerWidth<1024){
      scrollAmount=640
    }
    slider.scrollLeft=slider.scrollLeft+scrollAmount;
  };
  let [showq,setshowq]=useState(null)
  const description=(value)=>{
    setshowq(showq===value?null:value)
  }
  return (
    <div className="App">
      <section id='section' className='w-[100%] h-[100%]' style={{backgroundImage:'url("https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg")'}}>
      {/* Banner section */}
      <div className='w-[100%] h-[100%] bg-[rgba(7,7,7,0.7)] '>
        <header className="max-w-[1170px] mx-auto sm:px-[0px] px-1">
          <div className='grid sm:grid-cols-2 grid-cols-[30%_auto] p-2 items-center relative '>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="120" height="120" viewBox="0 0 48 48">
              <path fill="#f55376" d="M5,18c0.7,0,1.3,0,2,0c0,4.1,0,8.1,0,12.2c-0.8,0.1-1.6,0.2-2.3,0.3C3.7,28,2,23.7,2,23.7 s0,4.3,0,7.1c0.4,0-0.2,0-2,0.3c0-4.3,0-8.7,0-13c0.8,0,2,0,2,0l3,7.3C5,25.4,5,20.8,5,18z M14.7,20c0-0.6,0-1.4,0-2 c-1.9,0-3.8,0-5.7,0c0,4,0,8,0,12c1.9-0.2,3.8-0.4,5.7-0.6c0-0.6,0-1.4,0-2c-1.2,0.1-2.4,0.1-3.7,0.4c0-1.1,0-1.7,0-2.8 c0.9,0,2.1,0,3,0c0-0.6,0-1.4,0-2c-0.9,0-2.1,0-3,0c0-1.1,0-1.9,0-3C11.6,20.1,14.2,20.1,14.7,20z M16,20c0.1,0,1.9,0,2,0 c0,3.2,0,6,0,9.2c0.7,0,1.3,0,2-0.1c0-3.2,0-5.9,0-9.1c0.7,0,1.3,0,2,0c0-0.6,0-1.4,0-2c-2.1,0-3.9,0-6,0C16,18.6,16,19.4,16,20z M28.6,18c-1.9,0-3.7,0-5.6,0c0,3.8,0,7.2,0,11c0.2,0,0.4,0,0.6,0c0.4,0,0.9,0,1.4,0c0-1.6,0-2.4,0-4c0.1,0,2.4,0,2.7,0 c0-0.6,0-1.4,0-2c-0.3,0-2.6,0-2.7,0c0-1,0-2,0-3c0.2,0,3.1,0,3.6,0C28.6,19.5,28.6,18.6,28.6,18z M32,27.5c0-3.3,0-6.2,0-9.5 c-0.7,0-1.3,0-2,0c0,3.8,0,7.4,0,11.2c1.8,0.1,3.6,0.2,5.4,0.4c0-0.6,0-1.3,0-1.9C34.3,27.6,33.1,27.5,32,27.5z M37,29.7 c0.7,0.1,1.3,0.1,2,0.2c0-4,0-7.9,0-11.9c-0.7,0-1.3,0-2,0C37,22,37,25.8,37,29.7z M45.4,24.2c0.9-2,1.7-4,2.6-6.1 c-0.7,0-1.5,0-2.2,0c-0.5,1.3-0.9,2.2-1.4,3.4c-0.5-1.3-0.8-2.2-1.3-3.4c-0.7,0-1.5,0-2.2,0c0.8,2,1.5,4,2.4,6.1 c-0.9,2-1.7,4-2.6,6c0.7,0.1,1.4,0.2,2.1,0.3c0.5-1.3,1-2.2,1.5-3.5c0.5,1.4,1,2.4,1.5,3.8c0.7,0.1,1.6,0.2,2.3,0.3 C47.1,28.7,46.2,26.3,45.4,24.2z"></path>
              </svg>
            </figure>
            <div className='flex justify-end gap-[10px]'>
              <div className='relative'>
                <svg className='text-white absolute top-[10px] left-[7px]' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                <select className='bg-black border-[1px] border-white text-white sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'>
                  <option value="">English</option>
                  <option value="">Hindi</option>
                </select>
              </div>
              <button className='bg-[#f44336] rounded-[5px] text-white px-[10px] hover:bg-[rgb(198,9,20)] duration-300'>Sign in</button>
            </div>
          </div>
        </header>
        <div className='max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-[white]'>
          <h1 className=' sm:text-[50px] text-[35px] font-bold'>Unlimited movies, TV shows and more</h1>
          <h3 className='sm:text-[22px] text-[17px] sm:py-[15px] py-[10px]'>Starts at ₹149. Cancel at any time.</h3>
          <h4 className='sm:text-[19px] text-[14px] sm:py-[12px] py-[10px]'>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className='max-w-[700px] mx-auto'>
            <form className='grid sm:grid-cols-[70%_auto] grid-cols-1 gap-2 sm:px-[10px] px-[30px]'>
              <input type='email'placeholder='Email address' className=' border-[1px] border-[#5e5f5f] bg-[rgba(0,0,0,0.4)] pl-[20px] h-[50px] rounded-md'/>
              <button type='submit' className='bg-[#dc0913] rounded-md text-[23px] sm:py-[0px] py-[6px] hover:bg-[rgb(198,9,20)] duration-300'>Get started &gt;</button>
            </form>
          </div>
        </div>
      </div>
      {/* Banner end section */}

      {/* Content start section */}
        <div className="w-[100%] h-[100%] border-t-[5px] bg-gradient-to-b from-[#262525] to-[#000] border-t-[rgb(198,9,20)] rounded-t-[50%_20px]">
          {/* Horizontal slider start section */}
          <div className='text-[white] w-[100%] sm:py-[100px] py-[70px]  sm:px-[60px] px-[30px]'>
            <h2 className='sm:text-[30px] text-[25px] lg:px-[80px] sm:px-[25px] px-4'>Trending Now</h2>
            <div className='relative flex justify-center items-center lg:px-[115px] sm:px-[60px] px-[10px] mt-[15px] max-w-[100%]'>
            <MdChevronLeft className='opacity-50 shadow-lg w-[50px] h-[160px] cursor-pointer hover:opacity-100' onClick={sliderLeft}/>
              <div id="scroll" className='flex w-full overflow-x-scroll scroll-smooth gap-4'>
                {Data.map((v)=>{
                  return (
                    <img key={v.id} src={v.image} alt="Not found" className='w-[220px] cursor-pointer rounded hover:scale-105 ease-in-out duration-1000'/> 
                  )
                })}
              </div>
            <MdChevronRight className='opacity-50 shadow-lg w-[50px] h-[160px] cursor-pointer hover:opacity-100' onClick={sliderRight}/>
            </div>
          </div>
          {/* Horizontal slider end section */}

          {/* Cards section */}
          <div>
              <h2 className='text-[white] sm:text-[30px] text-[25px] lg:px-[135px] sm:px-[75px] px-4'>More reasons to join</h2>
              <div className='max-w-[100%] lg:px-[140px] sm:px-[85px] px-[20px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-2 mt-4'>
                {Card.map((p)=>{
                  return(
                    <div key={p.id} className='sm:w-[300px] w-[100%] sm:h-[300px] h-[200px] bg-gradient-to-br from-[#192144] to-[#3b192a]  rounded-3xl p-4'>
                    <h2 className='text-[white] text-[25px] text-bold subpixel-antialiased'>{p.title}</h2>
                    <p className='text-[white] mt-[10px] text-[17px] text-bold'>{p.desc}</p>  
                    {p.svg}
                  </div>
                )
                })}
              </div>
          </div>
          {/* Cards end section */}
          
          {/* Descrition section */}
          <div className='mt-[100px]'>
              <h2 className='text-[white] sm:text-[30px] text-[25px] lg:px-[135px] sm:px-[75px] px-4'>Frequently Asked Questions</h2>
              <div className='max-w-[100%] lg:px-[150px] sm:px-[85px] px-[45px] mt-[20px]'>
                {Questions.map((v)=>{
                  return(
                    <div>
                      <div className='max-w-[100%] h-[80px] bg-[#2D2D2D] text-[white] flex justify-between items-center  px-[25px] cursor-pointer mb-2 hover:bg-[#414040]' key={v.id}  onClick={()=>description(v.id)}>
                        <p className='text-[25px] font-sans'>{v.title}</p>
                        <button className='btn text-[50px] font-serif border-none'>{(showq===(v.id))?'×':'+'}</button>
                      </div>
                      <div className={`max-w-[100%] bg-[#2D2D2D] mt-1 mb-1 ${showq===(v.id)?'visible':'hidden'}`}>
                        <p className='text-[25px] font-sans p-5 text-[white]'>{v.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
          </div>
          {/* Description end section */}

          {/* Signup section */}
          <div className='max-w-[900px] mx-auto mt-[50px]'>
            <p className='text-[white] text-center sm:text-[22px] text-[17px] mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='grid sm:grid-cols-[70%_auto] grid-cols-1 gap-2 sm:px-[10px] px-[30px]'>
              <input type='email'placeholder='Email address' className=' border-[1px] border-[#5e5f5f] text-[white] bg-[rgba(0,0,0,0.4)] pl-[20px] h-[50px] rounded-md'/>
              <button type='submit' className='bg-[#dc0913] rounded-md text-[23px] sm:py-[0px] py-[6px] hover:bg-[rgb(198,9,20)] duration-300'>Get started &gt;</button>
            </form>
          </div>
          {/* Signup end section */}
          
          {/* Footer section */}
          <div className='max-w-[100%] lg:px-[150px] px-7 mt-[60px]'>
            <p className='text-[white]'>Questions? Call 000-800-919-1743</p>
            <div className='max-w-[100%] mt-[40px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
              {Contents.map((value)=>{
                return(
                <p className='text-[#c6c3c3] underline decoration-solid leading-loose' key={value.id}>{value.title}</p>
                )
              })}
            </div>
            <div className='relative mt-[60px]'>
                <svg className='text-white absolute top-[10px] left-[7px]' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                <select className='bg-[#1d1d1d] border-[1px] border-white text-white sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'>
                  <option value="">English</option>
                  <option value="">Hindi</option>
                </select>
              </div>
              <p className='text-[#c6c3c3] mt-[30px] pb-[50px]'>Netflix India</p>
            
          </div>
          {/* Footer end section */}

        </div>
      {/* Content end section */}
      </section>
    </div>
  );
}

export default Home;

