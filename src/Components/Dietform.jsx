import React from 'react'
import './Dietform.css';
import footerimg from '../assets/gymI1-preview.png';
import { FaInstagram, FaLinkedin, FaPlus, FaRegEnvelope, FaStar, FaTwitter } from "react-icons/fa6";

export default function() {
  return (
    <div>
        <div className='personaldietform'>
        <div class="form-container">
    <h1>PERSONALIZED DIET PLAN FORM</h1>
    <form>
      <h3>PERSONAL DETAILS</h3>
      <label for="age">Age</label>
      <input type="number" id="age" name="age"/>
      
      <label for="gender">Gender</label>
      <select id="gender" name="gender">
        <option value="select">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      
      <label for="height">Height</label>
      <input type="text" id="height" name="height" placeholder="Eg: 170 cm"/>
      
      <label for="weight">Weight</label>
      <input type="text" id="weight" name="weight" placeholder="Eg: 70 kg"/>
      
      <label for="activity-level">Activity Level</label>
      <select id="activity-level" name="activity-level">
        <option value="select">Select</option>
      </select>
      
      <h3>DIETARY GOALS</h3>
      <label for="goal">Goal</label>
      <select id="goal" name="goal">
        <option value="select">Select</option>
      </select>
      
      <label for="specific-goal">Specific Goal</label>
      <input type="text" id="specific-goal" name="specific-goal" placeholder="Eg: Weight loss, Muscle gain, Improve digestion..."/>
      
      <h3>DIETARY PREFERENCES AND RESTRICTIONS</h3>
      <label for="diet-type">Diet Type</label>
      <select id="diet-type" name="diet-type">
        <option value="select">Select</option>
      </select>
      
      <label for="food-allergies">Food Allergies or Intolerances</label>
      <input type="text" id="food-allergies" name="food-allergies" placeholder="Eg: Nuts, Dairy, Gluten..."/>
      
      <label for="disliked-foods">Foods you Dislike</label>
      <input type="text" id="disliked-foods" name="disliked-foods" placeholder="Eg: Mushrooms, Seafood, Spicy foods..."/>
      
      <h3>HEALTH INFORMATION</h3>
      <label for="medical-conditions">Medical Conditions</label>
      <input type="text" id="medical-conditions" name="medical-conditions" placeholder="Eg: Diabetes"/>
      
      <label for="nutritional-needs">Nutritional Needs</label>
      <input type="text" id="nutritional-needs" name="nutritional-needs" placeholder="Eg: High protein, Low sodium"/>
      
      <h3>MEAL AND LIFESTYLE PREFERENCES</h3>
      <label for="meals-per-day">Meals Per Day</label>
      <input type="text" id="meals-per-day" name="meals-per-day" placeholder="Eg: 3"/>
      
      <label for="cooking-habits">Cooking Habits</label>
      <input type="text" id="cooking-habits" name="cooking-habits" placeholder="Eg: Quick meals, Meal prepping, Homemade recipes..."/>
      
      <label for="budget-considerations">Budget Considerations</label>
      <input type="text" id="budget-considerations" name="budget-considerations" placeholder="Eg: $50 per week, Affordable meals, Low-cost ingredients..."/>
      
      <h3>CURRENT EATING HABITS</h3>
      <label for="typical-daily-diet">Typical Daily Diet</label>
      <input type="text" id="typical-daily-diet" name="typical-daily-diet" placeholder="Eg: Breakfast - Eggs, Lunch - Salad, Dinner - Grilled Chicken..."/>
      
      <label for="frequency-eating-out">Frequency of Eating Out</label>
      <input type="text" id="frequency-eating-out" name="frequency-eating-out" placeholder="Eg: 2 times a week, Occasionally, Once a month..."/>
      
      <button type="submit">Submit</button>
    </form>
        </div>
        </div>
                                <div className='footermaindiet'>
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
  )
}
