import FixedCard from "@/pages/fixedCard";
import { ComponentType, ReactNode } from "react";
import Navbar from "../navbar";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children,title }) => (
  <div className="bg-[url('/resources/background.webp')]  bg-cover bg-center w-screen h-screen">
    {/* <FixedCard /> */}
    <div className="flex justify-center ">
      <section className="pl-5 flex justify-between w-1/2 h-auto bg-white rounded-10">
        <h1 className="w-1/3 h-11 text-3xl">{title}</h1>
        <div className="w-2/3">
          <Navbar />
        </div>
      </section>
      {children}
    </div>
  </div>
);

export default Layout;
