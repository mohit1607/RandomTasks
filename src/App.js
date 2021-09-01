import { useState , useEffect} from 'react';
import './App.css';


const App = () => {


  const [currData, setCurrData] = useState("");
  const [Data, setData] = useState([]);            //Hooks are pretty simpler
  const [click,setClick] = useState(false);



 

  const add = () => {
    
    setClick(!click);
    
  }

  useEffect(() => {
    const getData = async()=> {
      try{
       const res = await fetch("https://www.boredapi.com/api/activity");
       const data = await res.json();
       console.log(data.activity);
       setCurrData(data.activity);
      }catch(err){
        console.log(err);
      }
     };
    
     getData();

     setData((old) =>{
      return [...old,  currData];
    })
    console.log(Data)
     

  }, [click])

  

  return (
    <>
    <div className="container">
    <h3>Random activity if you  are Bored</h3>
    {
      Data.map(
      (curr,ind) => {
        if(ind >= 1){
          return <h4>{`${ind}-->${curr}`}</h4>
        }
      }
    )
    }
    
    </div>

    <div className="btn">
      <button className="b" onClick ={add}>Click for suggestions</button>
    </div>
    </>
  );
}

export default App;
