import Comment from './comment/Comment';

function App() {
  return (
    <div className="App">
      <div>這是APP</div>
      <Comment params="我是params">
        <div className="text-red">我是children</div>
      </Comment>
    </div>
  );
}

export default App;
