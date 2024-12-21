import React from 'react'
import './Home.css';
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import { FaInstagram, FaLinkedin, FaPlus, FaRegEnvelope, FaStar, FaTwitter } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { LuEarth } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { RiEmojiStickerLine } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import footerimg from '../assets/gymI1-preview.png';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const marqueeLRef = useRef(null);
  const marqueeRRef=useRef(null);
  const marqueeRef=useRef(null);
  const rollingimg=useRef(null);
  useGSAP(()=>{
    gsap.to('.rolling img',{
      scrollTrigger: {
        trigger:'.rolling',
        start: 'top center', 
        end: 'bottom center',
       },
      duration:2,
      y:"-610",
      delay:1,
      stagger:2,
      repeat:5,
    })
  })
  useGSAP(()=>{
    gsap.from('.content11 .moto',{
      duration:2,
      y:"-30",
      scale:'0.8',
      delay:1,
      repeat:-1,
      yoyo:true

    })
  })
  useGSAP(()=>{
    gsap.from('.video_div',{
      scrollTrigger: {
        trigger:'.video_div',
        start: 'top center', 
        end: 'bottom center',
         scrub: true, 
       },
      duration:2,
      rotateX:'160deg',
      scale:'0.8',
      delay:1,
    })
  })
  useGSAP(()=>{
    gsap.from('.b1 .b12',{
      scrollTrigger: {
         trigger:'.b1 .b12',
         start: 'top center', 
         end: 'bottom center',
          scrub: true, 
        },
      duration:2,
      y:"-50",
      scale:'0.5',
      delay:1,
    })
  })
  useGSAP(()=>{
    gsap.to('.card-container .card',{
      scrollTrigger: {
         trigger:'.card-container',
        },
      translateX:'-310%',
      duration:2,
      repeat: -1, // Infinite loop
      yoyo:true,
      ease: 'power1.inOut',
      delay:2,
      stagger:2
    })
  })

  return (
    <>
    <div>
        <div className='homebox'>
            <div className='content1'>
                <div></div>
                <div className='content11'>
                    <div className='moto'>Track Your Fitness Journey</div>
                    <div className='miniexplain'>Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with ease.</div>
                </div>
            </div>
            <div className='banners'>
                <div className='movingbannerL' ref={marqueeLRef}>
                <div>Motivation</div>
                <div>/</div>
                <div>Progress</div>
                <div>/</div>
                <div>Fitness</div>
                <div>/</div>
                <div>Transformation</div>
                </div>
                <div className='movingbannerR' ref={marqueeRRef}>
                
                <div>Work</div>
                <div>/</div>
                <div>Progress</div>
                <div>/</div>
                <div>Community</div>
                <div>/</div>
                <div>Strength</div>
                
                </div>  
          </div>  
          <div className='fitnessbox2'>
            <div className='moto2'>Your Fitness Our Mission</div>
            <div className='desc1'>
            At GymFluencer, our mission is simple to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.
            </div>
          </div>
          <div className='mini_data'>
            <div className='b1'>
              <div className='b12'>
                <div>463</div>
                <div>K<FaPlus style={{fontSize:'30px'}}/></div>
              </div>
              <div className='b13'>Workouts logged and progress tracked every month</div>
            </div>
            <div className="divder"></div>
            <div className='b1'>
              <div className='b12'>
                <div>163</div>
                <div>K<FaPlus style={{fontSize:'30px'}}/></div>
              </div>
              <div className='b13'>Fitness enthusiasts connected through our platform</div>
            </div>
            <div className="divder"></div>
            <div className='b1'>
              <div className='b12'>
                <div>13</div>
                <div><FaPlus style={{fontSize:'30px'}}/></div>
              </div>
              <div className='b13'>Countries where GymFluencer is making an impact</div>
            </div>
          </div>
          <div className="video_div">
            <img height="100%" width="100%" src='https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png?scale-down-to=1024'/>
          </div>
          <div className='our_service'>
            <div className='serv_head'>
              Our Services
            </div>
            <div className='serv_content'>
            GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
            </div>
          </div>
          <div className='img-grid'>
            <div>
              <img src="https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png"/>
              <div className='img-text'>Track</div>
            </div>
            <div>
              <img src="https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png"/>
             <div className='img-text'>Analyze</div>
            </div>
            <div>
              <img src="https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png"/>
              <div className='img-text'>Train</div>

            </div>
            <div>
              <img src="https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg"/>
              <div className='img-text'>Connect</div>

            </div>
            <div>
              <img src="https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg"/>
              <div className='img-text'>Challenge</div>
            </div>
          </div>
          <div className='above-phone'>
           <div className='benefits'>
            <FaRegStar/>
            <div>Our Benefits</div>
           </div>
           <div className='benefit-detail'>
            <h1>Discover GymFluencer Benefits</h1>
            <div className='para'>
            <p>Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation</p> 
            </div>
          </div> 
          </div>
          <div className="phoneScreencontent">
            <div className='container1'>
            <Link to='/workoutplan' className='nav-link'>
              <div className="div1 classdeco">
              <div className='batch-icons'>
                <PiUsersBold/>
              </div>
              <div>
                <div className='headings'>Effortless Workout Logging</div>
                <div className='desc2'>Easily log your workouts and monitor your progress over time with our intuitive logging feature.
                </div>

              </div>
              </div>
              </Link>
              <Link to='/workoutplan' className='nav-link'>
              <div className="div1">
              <div className='batch-icons'>
                <LuEarth/>
              </div>
              <div>
                <div className='headings'>Accurate Rep Counting</div>
                <div className='desc2'>
                Count your reps accurately with our app, ensuring consistency and improved performance.
                </div>

              </div>
              </div>
              </Link>
            </div>
            <div className='container2'>
              <img src="https://framerusercontent.com/images/1UO4LCYbX6UQvXFCBXLY0dAOHU.png"/>
            </div>
            <div className='container3'>
            <Link to='/workoutplan' className='nav-link'>
            <div className="div1">
              <div className='batch-icons'>
                <BsStars/>
              </div>
              <div>
                <div className='headings'>Personalized Workout Plans</div>
                <div className='desc2'>
                AI-powered workout plans tailored to your fitness level, goals, and progress.                </div>
              </div>
              </div>
              </Link>
              <Link to='/dietplan' className='nav-link'>
              <div className="div1">
              <div className='batch-icons'>
                <RiEmojiStickerLine/>
              </div>
              <div>
                <div className='headings'>Calorie Calculation & Personalized Diet Plans</div>
                <div className='desc2'>
                Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness                 </div>
              </div>
            </div>
            </Link>
          </div>
          </div>
          {/* next section */}
          <div className='personalize-hub'>
          <div className='lefthub'>
            <div className='heading'>
            Your Personalized Fitness Hub
            </div>
            <div className='hubinfo'>
              <div>Personalized workout routines tailored to your goals and preferences</div>
              <div>Get expert guidance with virtual coaching sessions, available anytime, anywhere</div>
              <div>Track your fitness journey with detailed analytics, goal setting, and achievements.</div>
            </div>
          </div>
          <div className='righthub'>
            <div className='rolling' ref={rollingimg}>
              <img src="https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png"/>
              <img src="https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png"/>
              <img src="https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png"/>
            </div>
          </div>
          </div>
            <div className="marquee-container"> 
            <div className="marquee" ref={marqueeRef}> 
              <span>Workout Routines </span>
              <span>.</span>
               <span>Fitness Plans</span>
               <span>.</span>
                <span>Progress Tracking</span>
               </div> 
               </div>
               <div className="slidecontainer">
               <div class="slideshow">
                <button class="slide-btn slide-btn-1"></button>
                <button class="slide-btn slide-btn-2"></button>
                <button class="slide-btn slide-btn-3"></button>

                <div class="slideshow-wrapper">
                  <div className="slide">
                  <div className='slideL'>
                  <div className='slideLtop'>
                    <div className='userinfo'>
                      <div>Name:</div>
                      <div>Alex</div>
                    </div>
                    <div className='userinfo'>
                      <div>Age:</div>
                      <div>26</div>
                    </div>
                  </div>
                  <div className='l2'>
                  <div className='sl1'>
                    <div className='borderdiv'>9 Weeks</div>
                    <div>Before</div>
                    <div>After</div>
                  </div>
                  <div>
                    <div>Weight</div>
                    <div className='num'>84kg</div>
                    <div  className='num'> 75%</div>
                  </div>
                  <div>
                    <div>Body Fats</div>
                    <div  className='num'>27%</div>
                    <div  className='num'>15%</div>
                  </div>
                  </div>
                  </div>
                    <div class="slideR">
                      <div>
                        <img 
                        src="https://framerusercontent.com/images/C1L73jv5kSygRY7CLsvDz5CD8.png?scale-down-to=512"      
                        alt="Image 1"/>
                        <div>Before</div>
                        </div>
                        <div>
                        <img src="https://framerusercontent.com/images/6SCzegXOUU039IxoWekc8Npd0A.png?scale-down-to=512"/>
                        <div>After</div>
                        </div>

                    </div>
                  </div>
                  <div className="slide">
                  <div className='slideL'>
                  <div className='slideLtop'>
                    <div className='userinfo'>
                      <div>Name:</div>
                      <div>Kamal</div>
                    </div>
                    <div className='userinfo'>
                      <div>Age:</div>
                      <div>25</div>
                    </div>
                  </div>
                  <div className='l2'>
                  <div className='sl1'>
                    <div className='borderdiv'>9 Weeks</div>
                    <div>Before</div>
                    <div>After</div>
                  </div>
                  <div>
                    <div>Weight</div>
                    <div className='num'>85kg</div>
                    <div  className='num'> 74%</div>
                  </div>
                  <div>
                    <div>Body Fats</div>
                    <div  className='num'>35%</div>
                    <div  className='num'>15%</div>
                  </div>
                  </div>
                  </div>
                    <div class="slideR">
                      <div>
                        <img 
                        src="https://framerusercontent.com/images/1Qo2J0STBFnLSCmgXzgjSyQTF4.png?scale-down-to=1024"      
                        alt="Image 1"/>
                        <div>Before</div>
                        </div>
                        <div>
                        <img src="https://framerusercontent.com/images/BmR2bK2QlcPCdG2Y7zi5uwQweIo.png?scale-down-to=1024"/>
                        <div>After</div>
                        </div>

                    </div>
                  </div>
                  <div className="slide">
                  <div className='slideL'>
                  <div className='slideLtop'>
                    <div className='userinfo'>
                      <div>Name:</div>
                      <div>Raj</div>
                    </div>
                    <div className='userinfo'>
                      <div>Age:</div>
                      <div>28</div>
                    </div>
                  </div>
                  <div className='l2'>
                  <div className='sl1'>
                    <div className='borderdiv'>9 Weeks</div>
                    <div>Before</div>
                    <div>After</div>
                  </div>
                  <div>
                    <div>Weight</div>
                    <div className='num'>80kg</div>
                    <div  className='num'> 78%</div>
                  </div>
                  <div>
                    <div>Body Fats</div>
                    <div  className='num'>25%</div>
                    <div  className='num'>12%</div>
                  </div>
                  </div>
                  </div>
                    <div class="slideR">
                      <div>
                        <img 
                        src="https://framerusercontent.com/images/62A7xQmdViJaqb0zdQf0alCGBgE.png?scale-down-to=1024"      
                        alt="Image 1"/>
                        <div>Before</div>
                        </div>
                        <div>
                        <img src="https://framerusercontent.com/images/DfZVAWUharKP1TLVdrdGLWV1Y.png?scale-down-to=512"/>
                        <div>After</div>
                        </div>

                    </div>
                  </div>
                </div>
            </div>
          </div>  
          <div className='listen-pepoles'>
            <h1>What people say </h1>
            <div className='card-container'>
            <div className='card'>
              <div className='cardimg'>
              <img src="https://framerusercontent.com/images/AUrZKb58SZtY1pfePnYIGJ3feyQ.jpg?scale-down-to=1024" height="100%" width="100%"/>
              </div>
              <div className='cardright'>
                <div className='stars'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <div className='card-mid' >
                I love how user-friendly the app is. Logging workouts has never been easier!
                </div>
                <div className='card-bottom'>
               <div className='myname'> Michael Field</div> 
               <div className='designation'>-Software engineer</div> 
                </div>
              </div>
            </div>
            <div className='card'>
              <div>
              <img src="https://framerusercontent.com/images/2xpZXjM4AhwduCRhoAnVxztrfIk.jpg?scale-down-to=1024" height="100%" width="100%"/>
              </div>
              <div className='cardright'>
                <div className='stars'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <div className='card-mid' >
                I haveseen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!
                </div>
                <div className='card-bottom'>
               <div className='myname'>David Leo</div> 
               <div  className='designation'>-Designer</div> 
                </div>
              </div>
            </div>
            <div className='card'>
              <div>
              <img src="https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg?scale-down-to=1024" height="100%" width="100%"/>
              </div>
              <div className='cardright'>
                <div className='stars'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <div className='card-mid' >
                GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!                </div>
                <div className='card-bottom'>
               <div className='myname'>Angelina Jolie
               </div> 
               <div  className='designation'>-Model</div> 
                </div>
              </div>
            </div>
            
            </div>
          </div>


          <div className='mapandreview'>
          <div className='topdiv'>
            <div className='heads'>Find Your Nearest Gym</div>
            <div className='contents'>Easily discover gyms near your location to kickstart your fitness journey today!</div>
          </div>
          <div className='bottomdiv'>
            <div className='scrollcards'>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Physc Gym Nerul 24/7</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91 1234567890</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; Nerul, Navi Mumbai, Maharashtra, 400706</div>
                </div>
              </div>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/LsEJrnNgbBAk08pLHwNcDRF4oLo.jpeg?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Iron Fitness</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91 1234567890</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; Dombivali,Thane 400-002</div>
                </div>
              </div>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/LMf0H8b1MNKO0RwpkoYqfCtUaOg.jpeg?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Hydropower Fitness & Gym</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91-22-0001-0211</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; 28345 Industrial Blvd, Hayward, CA 94545</div>
                </div>
              </div>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/64IsefqJykeOf5kk2ETV1gkGQ.jpg?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Yuva Fitness</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91-22-0001-0211</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; Borivali Mumbai</div>
                </div>
              </div>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/LCCMMGLq0ltGKumFa9u0MHb5o.jpg?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Ozone The Gym</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91-22-0001-0211</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; 2043 S 3rd Dr, Phoenix, AZ 85003</div>
                </div>
              </div>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/PGAbUTA6vfEEZzEnxTdQDESoOU.png?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Ozone The Gym</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91-22-0001-0211</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; The Square Gym</div>
                </div>
              </div>
              <div className='gym-card'>
                <div className='gym-img'>
                  <img src="https://framerusercontent.com/images/DOzktr1SJvtZ2JWlN1robGanA.jpg?scale-down-to=512"/>
                </div>
                <div className='gym-detail'>
                  <div className='gym-name'>Arnolds Total Fitness</div>
                  <div className='moredetail'> <FiPhoneCall/> &nbsp;+91 1234567890</div>
                  <div className='moredetail'><MdLocationOn/>&nbsp; 1050 W Hampden Ave Ste 100</div>
                </div>
              </div>
            </div>
            <div className='maps'>
            <iframe src="https://maps.google.com/maps?q=19.0324383,73.0166829&amp;z=15&amp;output=embed" style={{height:'100%',width:'100%'}}></iframe>
            </div>
          </div>
          </div>
          <div className='footermain'>
            <div className='footersub1'>
              <div className='fimg'><img src={footerimg} height={"60%"} width={"60%"}/></div>
              <div className='fh1'>Where Fitness Meets Social Connection!</div>
              <div className='envelope'><FaRegEnvelope/>&nbsp;hello@gym.birlaventures.com</div>
            </div>
            <div className='footersub2'>
              <div>Home</div>
              <div>Workout Plan</div>
              <div>Diet Plan</div>
              <div>FAQ</div>
            </div>
            <hr/>
            <div className='footersub3'>
              <div>© 2024 GymFluencer. All rights reserved.</div>
              <div className='footicons'>
              <div><FaTwitter/></div>  
              <div><FaLinkedin/></div>  
              <div><FaInstagram/></div>  

              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
