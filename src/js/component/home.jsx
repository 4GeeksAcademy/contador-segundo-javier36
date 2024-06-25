import React, { useEffect, useState } from "react";
import { SecondsCounter } from "./SecondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({segundos}) => {
       
	const {timer,setTimer}= useState (0)

    useEffect(()=>{

		setTimeout(value=> value+1)

	}, 1000)


	return (
		<div className="d-flex justify-content-center fs-1 border-5 " >
	    <SecondsCounter digito={<i class="fa-solid fa-clock"></i>
}/>
		<SecondsCounter digito={Math.floor((segundos/10000)%10000)}/>
		<SecondsCounter digito={Math.floor((segundos/1000)%1000)}/>
		<SecondsCounter digito={Math.floor((segundos/100)%100)}/>
		<SecondsCounter digito={Math.floor((segundos/10)%10)}/>
        <SecondsCounter digito={Math.floor(segundos%10)}/>

		
		</div>
	);
};

export default Home;
