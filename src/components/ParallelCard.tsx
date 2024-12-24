import React from 'react';

export default function ParallelCard(
  {children}: { children: React.ReactNode }
) {

  const s = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    padding: "20vw",
    margin: "5vw",
  }

  return (
    // children is what you put inside: the pages for dashboard to achieve parallel routing.
    <>
      <div style={s}>
        {children}
      </div>
    </>
  );
}
