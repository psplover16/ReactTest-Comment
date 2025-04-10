import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div>404</div>
      <div>
        <Link to="/login">to="/login"</Link>
      </div>
      <div>
        <Link to="/login?name=123">to="/login?name=123"</Link>
      </div>
      <div>
        <Link to="/login/王大同">to="/login/王大同"</Link>
      </div>
      <div>
        <Link to="/login/王大同/男姓?name=456">
          到登入頁，網址為/name/王大同/男性，並攜帶參數
        </Link>
      </div>
    </div>
  );
}
