import Random from './components/Random';
import './App.css';
import Tag from './components/Tag';
function App() {
  return (
    <div className='background w-screen flex flex-col relative items-center min-h-screen'>
      <h1 className='bg-white border-2 px-6 py-4 m-12 rounded-full text-center font-bold text-[32px] w-11/12'>RANDOM GIFS</h1>
      <div className='w-11/12 flex flex-col items-center gap-6 '>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
