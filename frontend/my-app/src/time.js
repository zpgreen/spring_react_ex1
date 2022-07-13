import React from "react"

function TimerComponent(){
	const [time,setTime] = React.useState(0);
	console.log("Component 업데이트!!!");
	// function updateTime(){
	React.useEffect(()=>{
		setTime(time+1);
	},[]);
		
	// }
	return(
		<div>
			<h3>{time}초</h3>
			<button >UPUPUP</button>
		</div>
	)
}
export default TimerComponent;