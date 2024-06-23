import Image from "next/image";
import Bg_img from '@/public/images/Home-background.png'
export default function Home() {
  return <div className="h-screen">
    {/* bg img */}
    <Image src={Bg_img} alt="BackGround Img" className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.16] z-[-1] "/>
  </div>;
}
