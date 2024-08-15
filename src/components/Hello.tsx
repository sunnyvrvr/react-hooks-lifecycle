import { useState, ReactNode } from "react";

export default function Hello({
  name, 
  point,
  children,
} : {
  name?: string;
  point?: number;
  children: ReactNode;
}) {
  const [x, setX] = useState(0);

  return (
    <>
      <h1>Hello, {name} ({point} + {x})</h1>
      {children}
      <button onClick = {() => setX((p) => p + 1)}>plus</button>
    </>
  );
}