import { NavLink } from "react-router-dom";
import "../css/notfound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404 - Page Not Found !</h1>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
}
