function ButtonDashboard(props: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`text-slate-50 w-full bg-[#3f4e67] hover:bg-[#a855f7] duration-300 p-2 inline-40 text-left cursor-pointer ${props.className || ""}`}
    >
      {props.icon}
      {props.children}
    </button>
  );
}

export default ButtonDashboard;
