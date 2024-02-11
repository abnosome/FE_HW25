
import User from "./components/User";
import Product from "./components/Product";
import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";



function App() {
   

  return (
    <div >
      Hello world
      <User name={"Yenni"} surname={"Wertenberg"} age={145} showAge={true}/>
      <User name={"Geralt"} surname={"Wertenberg"} age={147}showAge={false}/>
      
      <Product title={"book"} price={23} quantity={3}/>
      <Product title={"book"} price={23} quantity={3}/>

      <Header header={"Flowers"}/>
      <Image url="/media/main.jpg" />
      <br />
      <Button text={"I like this flowers"}/>
      <Student name={"Olga"} surname={"Ivanova"} marks={[4,5,2,3,4,5,1,5,5,4]} />

    </div>
  );
}

export default App;
