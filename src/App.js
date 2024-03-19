import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './contextApi/AppContext'; // app-context
import Blog from './components/Blog';
import Buttons from './components/Buttons';
function App() {
  const {fetchPost} = useContext(AppContext)
  useEffect(()=>{
    fetchPost();
  },[]);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full text-center border shadow-md py-2 fixed top-0 bg-white'><h1 className='text-3xl font-semibold uppercase'>Blog Page Using Context Api</h1></div>
      <div className='mt-1'><Blog/></div>
      <div><Buttons/></div>
    </div>
  );
}

export default App;
