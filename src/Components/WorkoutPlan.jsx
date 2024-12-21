import React from 'react'
import './WorkoutPlan.css'
import footerimg from '../assets/gymI1-preview.png';
import pepolelevel from '../assets/pepolelevel.jpg';

import { FaInstagram, FaLinkedin, FaPlus, FaRegEnvelope, FaStar, FaTwitter } from "react-icons/fa6";
import { RiUserStarLine } from 'react-icons/ri'
export default function WorkoutPlan() {
  return (
   <>
   <div className='wp-box'>
        <div className='wp-inner1'>
            <div className='wp-top'>
                <div className='heading'>What is the workout plan</div>
                <div>
                    the diet plan is structured appprocah to nutrition designed  to help you achive specific fitness
                     goals ,wether its weight loss ,muscle gain ,or improving overall health,at Gymfluencer we belive that ,proper nutrition is the cornerstone of a succesfull fitness journey.
                </div>
            </div>
            <div className='wp-mid'>
                <div className='heading'>What we offer</div>
                <div className='starusers'>
                    <div className='divcell'>
                        <div className='sherif'><RiUserStarLine/></div>
                        <div>Professional guidance</div>
                    </div>
                    <div className='divcell'>
                    <div className='sherif'><RiUserStarLine/></div>
                    <div>customized work plan</div>
                    </div>
                    <div className='divcell'>
                    <div className='sherif'><RiUserStarLine/></div>
                    <div>Holistic approach</div>
                    </div>
                </div>
            </div>
            <div className='wp-end'>
                <div className='heading' >select your workout plan</div>
                <div>choose a workout plan thats fits your goals
                    wether its building strenth,loosing weight or staying active find the perfect plan foe you .
                </div>
            </div>
        </div>
        <div className='imagepan'>
            <img src={pepolelevel} width={"100%"}/>
        </div>
        <div className='form-bg'>
        <div className='kickstart-form'>
            <div className='kickL'>
                <div className='heading'>kickstart your fitness journey with gymfluencer</div>
                <div className='someinfo'>Experience all gymfluencer khas to offer with free trial 
                    Explore our world class ameneties.personalised diet plans and professionla trainig progrma absolutel free!
                </div>
                <hr/>
                <div className='kickfooter'>
                <img src={footerimg}/>
                </div>
            </div>
            <div className='kickR'>
            <div class="container">
     <form>
    <label for="fname"> Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="phome">Phone number</label>

   <input type="text" id="phone" name="phone" placeholder="Your phone."/>
   <label for="email">Email</label>

    <input type="email" id="email" name="email" placeholder="eg. xyz@domain.com "/>

   <label for="services">Services</label>
    <select id="service" name="services">
      <option value="Personalized diet plan">Personalized diet plan</option>
      <option value="Personal Trainer">Personal Trainer</option>
      <option value="Physio if injured">Physio if injured</option>
    </select>

    <label for="branches">Branches</label>
    <select id="branches" name="branches">
      <option value="Mumbai">Mumbai</option>
      <option value="Indore">Indore</option>
      <option value="Surat">Surat</option>
    </select>


    <input type="submit" value="Submit"/>

  </form>
            </div>
            </div>
        </div>
        </div>
           <div className='footermainworkout'>
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
   </>
  )
}
