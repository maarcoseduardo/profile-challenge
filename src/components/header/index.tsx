export function Header() {
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl w-full h-16 flex justify-between items-center mx-auto px-6 bg-gray-600">
        <div className="text-white">
          <a href="/">LOGO</a>
        </div>
        <div className="max-w-[130px] w-full">
          <ul className="flex justify-between items-center text-white">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
