import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl w-full h-16 flex justify-between items-center mx-auto px-6">
        <div className="text-white">
          <Link to="/">LOGO</Link>
        </div>
        <div className="max-w-[130px] w-full">
          <ul className="flex justify-between items-center text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
