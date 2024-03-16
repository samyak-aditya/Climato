import React from 'react'
import './dashboard.css'
import {ArrowUpRight} from 'phosphor-react'
import { Link } from 'react-router-dom'


export const Dashboard = () => {
  return (
    <div class="grid-container">
    <div className="grid-item1"></div>
    <Link to='/leaderboard'><div className="grid-item2"><p className='leader' style={{position: "absolute",zIndex: '5'}}>LeaderBoards <ArrowUpRight size={32} /></p> </div></Link>
    <div className="grid-item3">3</div>
    <div className="grid-item4">4</div>
    </div>
  )
}
