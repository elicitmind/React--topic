import React, {Fragment} from "react";

const Wrapper = (props) => {
  return props.children;
};

function Test2() {
	<Fragment>
		APP
	</Fragment>
}


function Test1() {
return <>
			APP
			</>
}

function Test() {
	return <React.Fragment>
          APP
       </React.Fragment>
}

export default Wrapper;
export {Test, Test1, Test2}
