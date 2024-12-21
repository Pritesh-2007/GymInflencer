import React from 'react'
import './Personalizeform.css';
import footerimg from '../assets/gymI1-preview.png';
import { FaInstagram, FaLinkedin, FaPlus, FaRegEnvelope, FaStar, FaTwitter } from "react-icons/fa6";

export default function () {
  return (
    <div className='personalformdiv'>
    <div class="container">
    <h1>Personalized Workout Plan Form</h1>
    <form className='formdesign'>
      <h2>1. Fitness Goals</h2>
      <div class="checkbox-group">
        <label><input type="checkbox" name="fitness-goals" value="weight-loss"/> Weight Loss</label>
        <label><input type="checkbox" name="fitness-goals" value="muscle-gain"/> Muscle Gain</label>
        <label><input type="checkbox" name="fitness-goals" value="strength"/> Strength</label>
        <label><input type="checkbox" name="fitness-goals" value="flexibility"/> Flexibility</label>
        <label><input type="checkbox" name="fitness-goals" value="general-fitness"/> General Fitness</label>
        <label><input type="checkbox" name="fitness-goals" value="endurance"/> Endurance</label>
      </div>
      <h2>Specific Areas of Focus</h2>
      <div class="checkbox-group">
        <label><input type="checkbox" name="areas-of-focus" value="upper-body"/> Upper Body</label>
        <label><input type="checkbox" name="areas-of-focus" value="lower-body"/> Lower Body</label>
        <label><input type="checkbox" name="areas-of-focus" value="core"/> Core</label>
        <label><input type="checkbox" name="areas-of-focus" value="full-body"/> Full Body</label>
      </div>
      <h2>2. Current Fitness Level</h2>
      <label for="fitness-level">Fitness Level:</label>
      <select id="fitness-level" name="fitness-level">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <h2>Exercise Experience</h2>
      <div class="checkbox-group">
        <label><input type="checkbox" name="exercise-experience" value="cardio-machines"/> Cardio Machines</label>
        <label><input type="checkbox" name="exercise-experience" value="push-ups"/> Push-ups</label>
        <label><input type="checkbox" name="exercise-experience" value="squats"/> Squats</label>
        <label><input type="checkbox" name="exercise-experience" value="sit-ups"/> Sit-ups</label>
        <label><input type="checkbox" name="exercise-experience" value="cardio-classes"/> Cardio Classes</label>
        <label><input type="checkbox" name="exercise-experience" value="yoga"/> Yoga</label>
      </div>
      <h2>3. Physical Measurements and Health Info</h2>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age"/>
      <label for="height">Height (cm):</label>
      <input type="number" id="height" name="height"/>
      <label for="weight">Weight (kg):</label>
      <input type="number" id="weight" name="weight"/>
      <label for="health-conditions">Health Conditions:</label>
      <textarea id="health-conditions" name="health-conditions"></textarea>
      <h2>4. Workout Preferences</h2>
      <div class="checkbox-group">
        <label><input type="checkbox" name="workout-preferences" value="gym"/> Gym</label>
        <label><input type="checkbox" name="workout-preferences" value="home"/> Home</label>
        <label><input type="checkbox" name="workout-preferences" value="outdoor"/> Outdoor</label>
        <label><input type="checkbox" name="workout-preferences" value="group-classes"/> Group Classes</label>
      </div>
      <h2>5. Schedule and Time Availability</h2>
      <label for="availability">Availability:</label>
      <textarea id="availability" name="availability"></textarea>
      <button type="submit" class="submit-btn">Submit</button>
    </form>
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
  )
}
