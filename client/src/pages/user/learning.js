import React from 'react'
import LearnCard from '../../component/learningcard'
import garbageman from '../../assets/garbageman.png'
import './learning.css'
import BarComponent from '../../component/Barcomponent'

export const Learning = () => {
  return (
    <body>
        <div>
        <button class=" ml-10  border-4 border-white-600 hover:bg-blue-700 text-white font-bold py-2 l-10 px-4 rounded-3xl">
  Rewards
</button>
<button class="ml-10  border-4 bg-white text-black  hover:bg-blue-700 text-white font-bold py-2 l-10 px-4 rounded-3xl">
  Green Learning
</button>
<BarComponent />
</div>
         <div class="learn-container">
         
    <div className="learn-item1"><LearnCard read={'Green Learner'} image={garbageman} /></div>
    <div className="learn-item2"><LearnCard read={'Green Learner'} image={garbageman} /></div>
    <div className="learn-item3"><LearnCard read={'Green Learner'} image={garbageman} /></div>
    <div className="learn-item4"><LearnCard read={'Green Learner'} image={garbageman} /></div>
    <div className="learn-item4"><LearnCard read={'Green Learner'} image={garbageman} /></div>
    <div className="learn-item4"><LearnCard read={'Green Learner'} image={garbageman} /></div>
    </div>
    </body>

    
  )
}
