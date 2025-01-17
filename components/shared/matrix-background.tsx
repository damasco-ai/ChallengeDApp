"use client";
import React, { useEffect, useState } from "react";

const MatrixEffect: React.FC = () => {
  const [matrixBg, setMatrixBg] = useState<string[]>([]);

  useEffect(() => {
    const chars = "DAMASCO$MASCO0123456789";
    const newMatrix = Array.from({ length: 50 }, () =>
      Array.from(
        { length: Math.floor(Math.random() * 20) + 5 },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("")
    );
    setMatrixBg(newMatrix);
  }, []);

  return (
    <>
      <div className="absolute inset-0 left-0 top-44 w-full h-96 opacity-10 pointer-events-none select-none text-primary">
        {matrixBg.map((line, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs"
            style={{
              left: `${(i / matrixBg.length) * 100}%`,
              top: -20,
              animation: `matrix ${Math.random() * 2 + 1}s linear ${
                Math.random() * 2
              }s infinite`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes matrix {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(1000%);
          }
        }
      `}</style>
    </>
  );
};

export default MatrixEffect;
