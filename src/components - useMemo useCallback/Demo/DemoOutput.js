import React from 'react'

const DemoOutput = (props) => {
	console.log("DEMO")
return ( <p> {props.show ? 'JESTEM POTĘGĄ' : ""} </p>)

}

export default React.memo(DemoOutput)