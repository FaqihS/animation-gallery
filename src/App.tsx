import {  GridAnimDemo } from "./components/AnimDemo";
import { Footer, Hero, Navbar, SmokyAddon } from "./components/UI";

export default function App() {
  return (
    <div className="relative  overflow-x-clip bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col gap-10">
      <Navbar />
      <SmokyAddon />
      <SmokyAddon position="bottom" />
      <Hero />
      <GridAnimDemo />
      <Footer />
  </div>
  );
}
