import { useState } from "react";

const Square = ({ value, onSquareClick, style }) => {
  //   const [value, setValue] = useState(null);

  //   const handleClick = () => {
  //     setValue("X");
  //   };

  return (
    <button className="square" onClick={onSquareClick} style={style}>
      {value}
    </button>
  );
};

export default Square;
