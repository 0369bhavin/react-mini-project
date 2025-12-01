function ColorBox({color}) {
  return (
    <div style={{
      backgroundColor:color,
    }} className="h-80 w-80 flex items-center justify-center m-10 border-2">
      <div className="text-white text-sm font-bold ">{color}</div>
    </div>
  );
}

export default ColorBox;
