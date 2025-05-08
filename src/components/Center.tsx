import { ReactNode } from "react";

export default function Center({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
