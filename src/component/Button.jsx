function Button({Setselectedcolor, children, color }) {
  function setcolor(){
Setselectedcolor(color)
  }
  return (
    <button onClick={setcolor}
      style={{
backgroundColor: color,
padding: "10px 20px",
 borderRadius: "8px",
 border:"none"
      }}
    >
      {children}
    </button>
  );
}

export default Button;