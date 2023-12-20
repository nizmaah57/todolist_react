import './App.css';
import TaskList from './components/Task/TaskList';

function App() {
  return (
    <>
    <div className='bg-secondary'>
      <div className='container'>
          <h1 className='mb-4 text-center text-white'>Liste des tâches</h1>
          <div>
            <TaskList />
            </div>

        </div>
    </div>
    </>
  );
}

export default App;
