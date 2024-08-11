import FixedCard from "@/pages/fixedCard";
import { ComponentType } from "react";
import Navbar from "../navbar";

interface LayoutProps {
  title: string;
  Component: ComponentType;
}

const Layout: React.FC<LayoutProps> = ({ title, Component }) => (
  <div className="bg-[url('/resources/background.webp')]  bg-cover bg-center w-screen h-screen">
    {/* <FixedCard /> */}
    <div className="flex justify-between w-2/3 h-auto bg-white rounded-10">
      <h1 className="w-1/3 h-10">wwwww</h1>
      <div className="w-2/3">
        <Navbar />
      </div>
    </div>
  </div>
);

export default Layout;
