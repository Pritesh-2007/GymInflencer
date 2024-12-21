import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WorkoutPlan from './Components/WorkoutPlan.jsx'
import Home from './Components/Home.jsx'
import DietPlan from './Components/DietPlan.jsx'
import PersonalizeWorkForm from './Components/PersonalizeWorkForm.jsx'
import Dietform from './Components/Dietform.jsx'
const approuter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true,
        path:"/",
        element:<Home/>
      },
      {
        path:'/workoutplan',
        element:<WorkoutPlan/>
      }
      ,{
        path:"/dietplan",
        element:<DietPlan/>
      },
      {
        path:"/personalizeform",
        element:<PersonalizeWorkForm/>
      }
      ,
      {
        path:"/dietform",
        element:<Dietform/>
      }
    ]

}]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter}>

    </RouterProvider>
  </StrictMode>,
)
