import Image from "next/image";
import Header from "./components/Header";
import FirstView from "./components/FirstView";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">

      <Header />
      <FirstView />
    </main>
  );
}
