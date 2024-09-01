import FileUpload from "./components/FileUpload";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <main className="flex bg-background overflow-y-auto h-screen">
      <Sidebar />

      <div className="flex flex-col justify-center p-10">
        <FileUpload />
      </div>
    </main>
  );
}
