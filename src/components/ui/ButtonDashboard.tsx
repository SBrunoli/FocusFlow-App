function ButtonDashboard(props: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={`text-(--text-color) w-full bg-(--main-color) hover:bg-(--primary-opacity) duration-300 p-2 inline-40 text-left cursor-pointer rounded-xl ${props.className || ""}`}
    >
      {props.icon}
      {props.children}
    </button>
  );
}

export default ButtonDashboard;
