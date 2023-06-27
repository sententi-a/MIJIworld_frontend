import { Logo } from "@components/common";

export default function PageFallback() {
  return (
    <div
      style={{
        backgroundColor: "#E2E2F5",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Logo />
    </div>
  );
}
