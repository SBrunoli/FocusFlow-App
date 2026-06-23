function Navbar() {
  return (
    <nav className="flex flex-row justify-around items-center p-4">
      <ul className="flex flex-row items-end gap-2">
        <li className="text-purple-500 text-4xl drop-shadow-[0_0_10px_rgba(168,85,247,1)] leading-none">
          •
        </li>
        <li>
          <a href="#" className="text-white font-bold text-2xl">
            FocusFlow
          </a>
        </li>
      </ul>

      <ul className="flex flex-row gap-7 text--zinc-300 text-lg font-semibold">
        <li>
          <a href="" className=" hover:text-white duration-300">
            funcionalidades
          </a>
        </li>
        <li>
          <a href="" className=" hover:text-white duration-300">
            preços
          </a>
        </li>
        <li>
          <a href="" className=" hover:text-white duration-300">
            blog
          </a>
        </li>
        <li>
          <a href="" className=" hover:text-white duration-300">
            login
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <button className="border border-white rounded-xl text-white px-4 py-2 cursor-pointer hover:border-zinc-400 hover:bg-zinc-600 duration-300 hover:scale-98">
            Começar grátis
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
