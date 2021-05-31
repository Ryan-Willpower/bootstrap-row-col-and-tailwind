import { ExampleColumn } from "../components/ExampleColumn";

export default function IndexPage() {
  const useBootstrap = false; // no-op

  if (useBootstrap) {
    // ถ้าใช้ Bootstrap จะเป็นแบบนี้ row และ column
    return (
      <div className="row">
        <ExampleColumn index="1" css="col-4" />
        <ExampleColumn index="2" css="col-4 mx-1" />
        <ExampleColumn index="3" css="col-4" />
      </div>
    );
  }

  // เราใช้ Tailwind จะเป็นแบบนี้แทน
  // ข้อสังเกตุคือไม่มี row และ column แล้ว
  // คุม col ผ่าน div ด้านนอกเอา
  return (
    <div className="grid grid-cols-3 gap-1">
      <ExampleColumn index="1" />
      <ExampleColumn index="2" />
      <ExampleColumn index="3" />
    </div>
  );
}
