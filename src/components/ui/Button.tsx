function Button(props: { children: React.ReactNode }) {
  return (
    <button className="button button-primary border border-white rounded-xl text-white px-4 py-2 cursor-pointer hover:border-zinc-400 hover:bg-zinc-600 hover:scale-98 duration-300 flex items-center justify-center gap-2">
      {props.children}
    </button>
  );
}

export default Button;
