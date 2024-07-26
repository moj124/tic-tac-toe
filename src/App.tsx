import Board from './components/Board';

export default function App() {
  return (
    <div className="h-screen flex flex-col sm:flex-row gap-5 bg-dark-blue">
      <main className='flex flex-col m-auto'>
        <h1 className='text-4xl text-gray-200'>Tic Tac Toe</h1>
        <hr className='mt-4 mb-10 bg-dark-line'/>
        <Board/>
      </main>
    </div>
  )
}
