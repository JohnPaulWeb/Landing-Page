import Image from "next/image";
import Header from "./components/Header";
import FirstView from "./components/FirstView";
import BrandStory from "./components/BrandStory";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">

      <Header />
      <FirstView />
      <BrandStory />
      <Features />
    </main>
  );
}
