import sfondo from './image/sfondo.png';
import GalactusText from './components/Text';
import GalactusImage from './components/Image';

function App() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center px-4" style={{ backgroundImage: `url(${sfondo})` }}>
      <GalactusText/>
      <GalactusImage/>
    </div>
  );
}

export default App;