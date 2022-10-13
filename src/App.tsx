import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen items-center justify-center flex flex-col">
      <h1 className='font-bold text-2xl bg-cyan-500'>Hello World</h1>
      <button className="bg-violet-500 font-medium px-4 py-2 rounded text-white hover:bg-violet-600">Enviar</button>
    </div>
  )
};
