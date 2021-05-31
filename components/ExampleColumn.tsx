import React from "react";

// ไม่จำเป็นต้องสนใจ
export const ExampleColumn: React.FC<{ index: string; css?: string }> = ({
  index,
  css
}) => {
  switch (Number(index)) {
    case 1:
      return <div className={`border rounded bg-yellow-100 ${css}`}>col 1</div>;
    case 2:
      return <div className={`border rounded bg-green-200 ${css}`}>col 2</div>;
    case 3:
      return <div className={`border rounded bg-blue-200 ${css}`}>col 3</div>;
    default:
      return <div className={`border rounded ${css}`}>col {index}</div>;
  }
};
