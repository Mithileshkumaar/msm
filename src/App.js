import logo from './logo.svg';
import './App.css';
import Chat from './components/chat/Chat';
import List from './components/list/List';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div className="App">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
