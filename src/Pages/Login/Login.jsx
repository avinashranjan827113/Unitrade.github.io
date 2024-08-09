import Template from "../../components/Template";
const Login=({setIsLoggedIn} ) =>{
  return (
    <div>
      <Template
       formtype="login"
       setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
}

export default Login;