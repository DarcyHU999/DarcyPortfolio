import FixedCard from "@/pages/fixedCard";
import { ReactNode } from "react";
import Navbar from "../navbar";

interface LayoutProps {
  title: string;
  children: ReactNode;
}
interface TitleBarProps {
  title: string; // 定义 title 为字符串类型
}

// TitleBar 组件
const TitleBar: React.FC<TitleBarProps> = ({ title }) => (
  <div className="flex justify-between">
    <h1 className="mt-5 w-1/3 h-11 text-2xl">{title}</h1>
    <div className="w-2/3">
      <Navbar />
    </div>
  </div>
);

// BlueLine 组件
const BlueLine = () => (
  <div className="h-1 w-16 rounded-full bg-blue-700"></div>
);

// Layout 组件
const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div className="bg-[url('/resources/background.webp')] bg-cover bg-center w-screen h-screen">
    <div className="flex justify-center pt-80">
      <section className="ml-5 pl-10 flex flex-col w-1/2 h-auto bg-white rounded-10">
        <TitleBar title={title} />
        <div className="h-10 pb-5">
          <BlueLine />
        </div>
        {children}
      </section>
    </div>
  </div>
);

export default Layout;
