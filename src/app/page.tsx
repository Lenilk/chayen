"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let [selectAmount, setSelectAmount] = useState(0);
  const [amount, setAmount] = useState(4);
  let [selectAdr, setSelectAdr] = useState(0);
  if (Number.isNaN(amount)) {
    setAmount(4);
  }
  if (amount > 20) {
    setAmount(20);
  } else if (amount < 4) {
    setAmount(4);
  }
  // เมื่อมีการกรอกใช่ช่อง more แต่ว่าไปเลือก option 1 แก้ว 2 แก้ว 3 แก้ว ก็รีเซ็ตจำนวนนั้น
  if (amount != 4 && selectAmount != 4) {
    setAmount(4);
  }
  // function ClickingAmountBtn(value: number) {
  //   if (selectAmount == 0 && selectOldAmount == 0) {
  //     setSelectAmount(value);
  //     return true;
  //   }
  //   else {
  //     console.log("Clicking")
  //     setSelectOldAmount(selectAmount);
  //     setSelectAmount(value);
  //     if (selectAmount == selectOldAmount) {
  //       setSelectAmount(0);
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // }
  // function ClickingAmountBtn(value: number) {
  //   setSelectOldAmount(selectAmount);
  //   setSelectAmount(value);
  //   console.log(`selectAmount:${selectAmount}`);
  //   console.log(`selectOldAmount:${selectOldAmount}`);
  //   if(selectAmount==0){
  //     setSelectAmount(value);
  //     return;
  //   }
  //    if (selectAmount != selectOldAmount) {
  //     setSelectOldAmount(selectAmount);
  //     setSelectAmount(value);
  //     return;
  //   } else {
  //     setSelectOldAmount(selectAmount);
  //     setSelectAmount(0)
  //     return;
  //   }

  // }
  function OnclickAmountBtn(value: number) {
    if (selectAmount == value) {
      return "bg-amber-400";
    } else {
      return "bg-gray-100";
    }
  }
  function OnclickAdrBtn(value: number) {
    if (selectAdr == value) {
      return "bg-amber-400";
    } else {
      return "bg-gray-100";
    }
  }
  // useEffect(() => {
  //   console.log(amount);

  // })
  return (
    <main className="h-lvh flex items-center justify-center text-center p-24 font-sarif">
      <div className="z-10  items-center flex-col flex bg-gray-300 p-6 border shadow-xl rounded-md border-pink-950">
        <h1 className=" text-2xl font-bold">ผู้ชาย ขายน้ำ💦</h1>
        <div>
        <Image src="/chayen.png" alt="chayen" width={200} height={90} />
        <p>แก้วละ 10 บาท</p>
        </div>
        <div className=" relative w-max flex-col gap-2 flex mt-2">
          <div className="flex flex-row gap-3 justify-center *:p-2 *:border *:rounded-2xl  *:border-amber-700 ">
            <button
              className={OnclickAmountBtn(1)}
              onClick={() => setSelectAmount(1)}
            >
              1 แก้ว
            </button>
            <button
              onClick={() => setSelectAmount(2)}
              className={OnclickAmountBtn(2)}
            >
              2 แก้ว
            </button>
            <button
              onClick={() => setSelectAmount(3)}
              className={OnclickAmountBtn(3)}
            >
              3 แก้ว
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <button
              className={`${OnclickAmountBtn(
                4
              )} p-2 border  rounded-2xl border-amber-700`}
              onClick={() => setSelectAmount(4)}
            >
              more
            </button>
            <input
              className=" w-28 rounded-md p-1 border cursor-default "
              disabled={selectAmount != 4}
              type="number"
              onChange={(e) => {
                setAmount(Number.parseInt(e.target.value));
              }}
              value={amount}
              min={4}
              max={20}
            ></input>
          </div>
        </div>
        <form className="flex flex-col gap-2 m-3 items-center" >
          <input
            name="user"
            type="text"
            placeholder="ชื่อ"
            className="  max-w-56 min-w-52 w-52  p-1 rounded-md"
          ></input>
          <div className="gap-2 flex flex-col">
            <p>Where are you?</p>
            <div className="grid grid-cols-3 gap-2 mb-2 *:border  *:border-amber-700 *:rounded-lg">
              {["สนามบาส", "โดมกีฬา", "หอใน", "อาคาร", "อื่นๆ"].map(
                (place, index) => (
                  <button
                    type="button"
                    name="address"
                    value={place}
                    className={`${OnclickAdrBtn(index + 1)}`}
                    onClick={() => setSelectAdr(index + 1)}
                  >
                    {place}
                  </button>
                )
              )}
            </div>

            {selectAdr == 3 ? (
              <textarea
                name="address"
                placeholder="หอไหน"
                className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-md"
              ></textarea>
            ) : (
              <></>
            )}
            {selectAdr == 4 ? (
              <textarea
                name="address"
                placeholder="อาคารไหน"
                className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-md"
              ></textarea>
            ) : (
              <></>
            )}
            {selectAdr == 5 ? (
              <textarea
                name="address"
                placeholder="ที่อยู่"
                className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-md"
              ></textarea>
            ) : (
              <></>
            )}
          </div>
          <button
            className="border w-12 h-8 border-amber-800 bg-amber-700 text-white rounded-md"
          >
            ส่ง
          </button>
        </form>
      </div>
    </main>
  );
}
