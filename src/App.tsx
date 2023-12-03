import {  GridAnimDemo } from "./components/AnimDemo";
import { Footer, Hero, Navbar, SmokyAddon } from "./components/UI";

export default function App() {
  return (
    <div className="relative bg-gray-50 flex flex-col gap-10">

      <Navbar />
      <SmokyAddon />
      <Hero />

      <GridAnimDemo />
      <Footer />
  </div>
  );
}
