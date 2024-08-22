import FixedCard from "@/components/fixedCard";
import { ReactNode } from "react";
import Navbar from "../navbar";

interface LayoutProps {
  title: string;
  children: ReactNode;
}
interface TitleBarProps {
  title: string; 
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => (
  <div className="flex justify-between">
    <h1 className="mt-5 w-1/2 h-15 text-5xl">{title}</h1>
    <div className="w-full xl:w-1/2">
      <Navbar />
    </div>
  </div>
);

const BlueLine = () => (
  <div className="h-1 w-16 mt-3 rounded-full bg-blue-700"></div>
);

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div className="relative bg-[url('/resources/background.webp')] bg-cover bg-center w-full h-full min-h-screen min-w-screen flex flex-col items-center xl:flex-row xl:items-start">
    <div className="xl:sticky xl:top-0 ml-5 flex justify-center xl:justify-start w-2/3 xl:w-3/10 mt-5">
      <FixedCard />
    </div>
    <div className="flex justify-start xl:w-2/3">
      <section className="mx-5 my-5 pl-10 flex flex-col w-full  h-auto bg-white rounded-10">
        <TitleBar title={title} />
        <BlueLine />
        <section className="flex xl:flex-row flex-col pb-10">
          {children}
        </section>
      </section>
    </div>
  </div>
);

export default Layout;
