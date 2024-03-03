import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center text-center p-24 font-sarif">
      <div className="z-10  items-center flex-col flex bg-gray-300 p-6 border shadow-xl rounded-md border-pink-950">
        <h1 className=" text-2xl font-bold">ผู้ชาย ขายน้ำ💦</h1>
        <Image src="/chayen.png" alt="chayen" width={200} height={90}/>

        <form className="flex flex-col gap-3 m-3 items-center">
          <input type="text" placeholder="ชื่อ" className="  max-w-56 min-w-52 w-52  p-1 rounded-sm"></input>
          <input type="text" placeholder="เบอร์โทร" className=" max-w-56 min-w-52 w-52 p-1 rounded-sm"></input>
          <textarea placeholder="ที่อยู่" className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-sm"></textarea>
          <input type="submit" value="ส่ง" className="border w-12 h-8 border-amber-800 bg-amber-700 text-white rounded-md"></input>
        </form>
      </div>
    </main>
  );
}
