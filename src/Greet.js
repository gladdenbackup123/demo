import Exit from "./Exit";
function Greet(props) {
    const isLoggedIn = true;

    return (
      <div>
        <h2>Hello {props.name}!</h2>
        {/* <Exit/> */}
      </div>

      //  <div>
      //   {isLoggedIn ? <p>Hello User!</p> : <p>Please login to continue.</p>}
      //  </div>
    );
  }
   
export default Greet;
  