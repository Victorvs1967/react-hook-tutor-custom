import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h4>React Hook Tutor</h4>
      </header>
      <main className="App-main">
        <DocTitleOne />
        <DocTitleTwo />
      </main>
      <footer className="App-footer">by Nabenbu</footer>
    </div>
  );
}

export default App;
