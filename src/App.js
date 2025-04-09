import { Link } from "react-router-dom";
import Comment from "./comment/Comment";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/login">到登入頁</Link>
      </div>
      <div>
        <Link to="/login?name=123">到登入頁，攜帶name=123</Link>
      </div>
      <div>
        <Link to="/login/王大同">到登入頁，網址為/name/王大同</Link>
      </div>
      <div>
        <Link to="/login/王大同/男姓?name=456">
          到登入頁，網址為/name/王大同/男性，並攜帶參數
        </Link>
      </div>
      <div>
        <Link to="/login/王大同/男姓/board?name=456">
          login/王大同/男姓/board?name=456
        </Link>
      </div>
      {/*  */}
      <div>這是APP</div>
      <Comment params="我是params">
        <div className="text-red">我是children</div>
      </Comment>
    </div>
  );
}

export default App;
