import {
  Link,
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 解構數組，並返回第一個值給params
  const params = useParams();
  const location = useLocation();

  const checkRoutes = () => {
    console.log(searchParams);
    console.log(searchParams.get("name"));
    console.log(params);
    console.log(params.id);
    console.log(location);
  };

  return (
    <div>
      <div onClick={checkRoutes}>console.log路由資料</div>
      <Link to="/home">到首頁</Link>
      <button onClick={() => navigate("/home")}>到首頁</button>
      <button onClick={() => navigate("/home?name=123")}>
        到首頁，攜帶name=123
      </button>
      {/* 嵌套 二級路由 */}
      <Outlet />
    </div>
  );
}
