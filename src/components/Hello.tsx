import { ReactNode, useState } from 'react';
export default function Hello({
    name,
    point,
    children,
  }: {
    name?: string;
    point?: number;
    children: ReactNode;
  }) {
    const [x, setX] = useState(10);
  
    return (
      <>
        <h2>
          Hello, {name} ({point}+{x})
        </h2>
        {children}
        <button onClick={() => setX((p) => p + 1)}>plus</button>
      </>
    );
  }