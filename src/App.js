import { useState } from 'react';
import './App.css';
import ClassComponent from './pages/ClassComponents';
import FunctionComponent from './pages/FunctionComponent';
import {Routes, Route} from 'react-router-dom';
// HOC Layout
import BaseHoc from './hoc/BaseHoc';

function App() {
  const author = 'rk';

  const [name, setName] = useState("DT");
  return (
    <Routes>
      <Route
        path="/" element={<BaseHoc><ClassComponent /></BaseHoc>}/>
      <Route
        path="/functional-component"
        element={
          <FunctionComponent
            name={name}
            age={10}
            author={author}
            setName={setName}
          />
        }
      />
    </Routes>
  );
}

export default App;

  // <p>Class Component:</p>
  //     <ClassComponent/>
  //     <br/>

  //     <p>Function Component:</p>
  //     {/* <FunctionComponent name='DevTown' age={20} author={author}/> */}
  //     <FunctionComponent name={name} age={20} author={author} setName={setName}/>