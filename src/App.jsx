import sfondo from './image/sfondo.png';
import GalactusText from './components/Text';
import GalactusImage from './components/Image';

function App() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center px-4" style={{ backgroundImage: `url(${sfondo})` }}>
      <GalactusText className="font-extrabold leading-none text-center text-[80px] md:text-[220px] max-w-full break-words overflow-hidden" />
      <GalactusImage className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain mt-4 md:mt-0" />
    </div>
  );
}

export default App;