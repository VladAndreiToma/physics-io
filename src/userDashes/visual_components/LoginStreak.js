import { response } from "express";
import { useState, useEffect } from "react";

import {VictoryChart , VictoryTheme} from 'victory';

export default function LoginStreak(){
    const [streakData, setStreakData ] = useState([]);
    const [loading, setLoading] = useState(true);
    // i ll use loading for lazy loading component
    useEffect( ()=>{
        const fetchStreakData = async() =>{
            try{
                const response = await fetch('/login-streak');
                if(!response.ok)
                    throw new Error('Failed to fetch login data');
                const data = await response.json();
                setStreakData(data.streak);
            }catch(err){
                console.log(`Error fetching streak data ${err}`);
            }finally{
                setLoading(false); // stop lazy loading content finally achieved
            }
        };
        fetchStreakData();
    },[]);
    
    if( loading ) return <div>Streak Loading...</div>
    const loginStreakChartData = streakData.map((value,index)=>({x:`Day${index+1}`,y:value}));
    return(<div style={{width:'100%', height:'100%', display: "flex"}}>

    </div>);
}