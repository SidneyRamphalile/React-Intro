import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponents';
import FunctionComponent from './components/FunctionComponent';


function App() {
  const author = 'rk';

  const [name, setName] = useState("DT");
  return (
    <div className="App">
      
       <p>Class Component:</p>
      <ClassComponent/>
      <br/>

      <p>Function Component:</p>
      {/* <FunctionComponent name='DevTown' age={20} author={author}/> */}
      <FunctionComponent name={name} age={20} author={author} setName={setName}/>

    </div>
  );
}

export default App;
