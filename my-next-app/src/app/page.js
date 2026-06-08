import Image from "next/image";
import Header from "./components/Header/page";

export default function Home() {
  return (
    <div>
      <h2 className="text-5xl text-center font-bold">Next JS!!!!</h2>
      <Header />
      <Image
        src="/random.jpg"
        alt="vercel img"
        width={300}
        height={300}
      ></Image>
    </div>
  );
}
