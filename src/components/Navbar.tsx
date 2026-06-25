import Button from "./ui/Button";

function Navbar() {
  return (
    <nav className="flex flex-row justify-around items-center p-4 h-20 ">
      <ul className="flex flex-row items-end gap-2">
        <li className="text-purple-500 text-4xl drop-shadow-[0_0_5px_rgba(168,85,247,01)] leading-none">
          •
        </li>
        <li>
          <a href="#" className="text-white font-bold text-2xl">
            FocusFlow
          </a>
        </li>
      </ul>

      <ul className="flex flex-row gap-7 text-gray-500 text-lg font-semibold">
        <li>
          <a href="" className=" hover:text-(--text-color) duration-300">
            funcionalidades
          </a>
        </li>
        <li>
          <a href="" className=" hover:text-(--text-color) duration-300">
            preços
          </a>
        </li>
        <li>
          <a href="" className=" hover:text-(--text-color) duration-300">
            blog
          </a>
        </li>
        <li>
          <a href="" className=" hover:text-(--text-color) duration-300">
            login
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <Button children="Começar grátis" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
