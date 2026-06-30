function Footer() {
  return (
    <footer className="w-full h-fit p-2 flex flex-row justify-between items-center">
      <ul className="flex flex-row items-end gap-2 ml-4">
        <li className="text-purple-500 text-2xl drop-shadow-[0_0_5px_rgba(168,85,247,01)] leading-none">
          •
        </li>
        <li>
          <a href="#" className="text-(--p-color) font-semibold text-md">
            FocusFlow © 2026
          </a>
        </li>
      </ul>

      {/* sociais */}
      <ul className="flex md:flex-row flex-col gap-4 text-(--p-color) mr-4">
        <li>
          <a href="#">privacidade</a>
        </li>
        <li>
          <a href="#">termos</a>
        </li>
        <li>
          <a href="https://github.com/SBrunoli/FocusFlow-App/commits?author=SBrunoli">
            github
          </a>
        </li>
        <li>
          <a href="#">twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
