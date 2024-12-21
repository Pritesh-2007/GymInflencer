import React from 'react'
import './DietPlan.css'
import footerimg from '../assets/gymI1-preview.png';
import pepolelevel from '../assets/pepolelevel.jpg';

import { FaInstagram, FaLinkedin, FaPlus, FaRegEnvelope, FaStar, FaTwitter } from "react-icons/fa6";
import { RiUserStarLine } from 'react-icons/ri'
export default function DietPlan() {
  return (
   <>
   <div className='wp-box'>
        <div className='wp-inner1'>
            <div className='wp-top'>
                <div className='heading'>What is your Diet plan</div>
                <div>A Diet plan is structured approcah to nutrition designed to help you achive specific fitness goals  whether it is 
                    weight loss , muscle building or improving overall health at GymFluencer , we belive that proper nutrition is the cornerstone of succesfull fitness journey
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
                    <div>customized Diet plan</div>
                    </div>
                    <div className='divcell'>
                    <div className='sherif'><RiUserStarLine/></div>
                    <div>Holistic approach</div>
                    </div>
                </div>
            </div>
            <div className='wp-end'>
                <div className='heading' >Why choose Our  Diet plan?</div>
                <div style={{padding:'0px 20px'}}> 
                    At Gymfluencer,we provide expertely curetd diet plan 
                    tailored to your individual need and fitness goals out plan are desaigned by professionl nutritionists
                    and experts to ensure that you get optimal results
                </div>
            </div>
        </div>
        <div className='dietsuggetion'>
            <div className='divL'>
                <div className='imgcard'>
                    <img src="https://www.clipartkey.com/mpngs/m/23-231945_clip-art-healthy-food-clip-art-healthy-and.png"/>
                    <div className='textdiv'>
                        <div>Weight loss diet paln</div>
                        <div>description of weight loss diet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                    "https://img.mensxp.com/media/content/2017/Aug/does-sugar-from-fruit-make-you-fat800-1503393983.jpg"/>
                    <div className='textdiv'>
                        <div>Mucle Building diet paln</div>
                        <div>description of Muscle building diet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                    "https://s.yimg.com/uu/api/res/1.2/lJGPPTnmqgJgPfuMn2rC9g--~B/aD0zNzQ0O3c9NTYxNjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/cooking_light_565/6f93293b5c455352ab48e1fd3edd7802"/>
                    <div className='textdiv'>
                        <div>Endurance and performance based diet</div>
                        <div>description of Muscle building diet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                     "https://www.tash360.com/wp-content/uploads/2023/02/Fasting-11-1024x1024.png"  /> 
                    <div className='textdiv'>
                        <div>Intermittent Fasting diet plan</div>
                        <div>description of Muscle building diet plan</div>
                    </div>
                </div>
            </div>
            <div className='divR'>
            <div className='imgcard'>
                    <img src=
                    "https://www.cheshirefoodpantry.org/wp-content/uploads/2015/05/Diet_Girl_Choice1-1024x812.jpg"/> 
                    <div className='textdiv'>
                        <div>Personalzed diet plan</div>
                        <div>description of Personalizeddiet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                    "https://thumbs.dreamstime.com/b/beautiful-caucasian-woman-comparing-burger-healthy-red-apple-shock-face-looking-skeptical-sarcastic-surprised-open-226393458.jpg"  /> 
                    <div className='textdiv'>
                        <div>Cutting diet plan</div>
                        <div>description of cutting diet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                     "https://www.publichealthnotes.com/wp-content/uploads/2022/09/keto-diet-low-carb-concept-top-view.jpg"  /> 
                    <div className='textdiv'>
                        <div>Keto diet plan</div>
                        <div>description of keto diet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                    "https://th.bing.com/th/id/OIP.73PiizCPMdrXPaQivowJpgHaE8?rs=1&pid=ImgDetMain"/> 
                    <div className='textdiv'>
                        <div>Vegeterian/vegan diet plan</div>
                        <div>description of vegeterian/vegan diet plan</div>
                    </div>
                </div>
                <div className='imgcard'>
                    <img src=
                    "https://healthwire.pk/wp-content/uploads/2020/11/SS-Paleo-Diet-scaled.jpg"/> 
                    <div className='textdiv'>
                        <div>Paleo diet plan</div>
                        <div>description of vegeterian/vegan diet plan</div>
                    </div>
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
   </>
  )
}
