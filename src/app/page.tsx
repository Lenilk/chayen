"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectAmount, setSelectAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectAdr, setSelectAdr] = useState(0);
  const [domitory, setDomitory] = useState("หอมีนกร 1");
  const buildinglist = [
    "อาคารวิทยบริการ",
    "อาคาร ฉ.",
    "อาคารเรียนรวมและปฏิบัติการ",
    "ตึกคณะวิศวกรรมศาสตร์และเทคโนโลยี",
    "โรงอาหาร",
    "อาคารปฏิบัติการคณะวิศวกรรมศาสตร์และเทคโนโลยี",
  ];
  const [building, setBuilding] = useState(buildinglist[0]);
  const [otherPlace, setOtherPlace] = useState("");
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [more, setMore] = useState(4);
  const cannotSummit = destination.length < 5 || name.length < 3 || amount == 0;
  if (Number.isNaN(amount)) {
    setMore(4);
  }
  if (more > 20) {
    setMore(20);
  } else if (more < 4) {
    setMore(4);
  }
  // เมื่อมีการกรอกใช่ช่อง more แต่ว่าไปเลือก option 1 แก้ว 2 แก้ว 3 แก้ว ก็รีเซ็ตจำนวนนั้น
  function canSummitstyle() {
    if (cannotSummit) {
      return "bg-gray-100 text-gray-800";
    } else {
      return "bg-amber-700 text-white";
    }
  }
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
  return (
    <main className="h-lvh flex items-center justify-center text-center p-24 font-sarif">
      <div className="z-10  items-center flex-col flex bg-gray-300 p-6 border shadow-xl rounded-md border-pink-950 overflow-hidden">
        <h1 className=" text-2xl font-bold">ผู้ชาย ขายน้ำ💦</h1>
        <div>
          <Image src="/chayen.png" alt="chayen" width={200} height={90} />
          <p>แก้วละ 10 บาท</p>
        </div>
        <div className=" relative w-max flex-col gap-2 flex mt-2">
          <div className="flex flex-row gap-3 justify-center *:p-2 *:border *:rounded-2xl  *:border-amber-700 ">
            {[1, 2, 3].map((index) => (
              <button
                key={index}
                className={OnclickAmountBtn(index)}
                onClick={() => {
                  setSelectAmount(index);
                  setAmount(index);
                }}
              >
                {index} แก้ว
              </button>
            ))}
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <button
              className={`${OnclickAmountBtn(
                4
              )} p-2 border  rounded-2xl border-amber-700`}
              onClick={() => {
                setSelectAmount(4);
                setAmount(more);
              }}
            >
              more
            </button>
            <input
              className=" w-28 rounded-md p-1 border cursor-default "
              disabled={selectAmount != 4}
              type="number"
              onChange={(e) => {
                let value = Number.parseInt(e.target.value);
                setMore(value);
                setAmount(value);
              }}
              value={more}
              min={4}
              max={20}
            ></input>
          </div>
        </div>
        <form className="flex flex-col gap-2 m-3 items-center">
          <input
            value={name}
            name="user"
            type="text"
            placeholder="คุณชื่ออะไร"
            className="  max-w-56 min-w-52 w-52  p-1 rounded-md"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <div className="gap-2 flex flex-col">
            <p>Where are you?</p>
            <div className="grid grid-cols-3 gap-2 mb-2 *:border  *:border-amber-700 *:rounded-lg *:p-1">
              {["สนามบาส", "โดมกีฬา", "หอใน", "อาคาร", "อื่นๆ"].map(
                (place, index) => (
                  <button
                    key={`${place} ${index}`}
                    type="button"
                    name="address"
                    value={place}
                    className={`${OnclickAdrBtn(index + 1)}`}
                    onClick={() => {
                      setSelectAdr(index + 1);
                      switch (index) {
                        case 2:
                          setDestination(domitory);
                          break;
                        case 3:
                          setDestination(building);
                          break;
                        case 4:
                          setDestination(otherPlace);
                          break;
                        default:
                          setDestination(place);
                      }
                    }}
                  >
                    {place}
                  </button>
                )
              )}
            </div>
            <div className="items-center flex flex-col">
              {selectAdr == 3 ? (
                <select
                  value={domitory}
                  onChange={(e) => {
                    setDomitory(e.target.value);
                    setDestination(e.target.value);
                  }}
                  className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-md"
                >
                  {[1, 2, 3, 4].map((index) => (
                    <option key={`หอมีนกร ${index}`} value={`หอมีนกร ${index}`}>
                      หอมีนกร {index}
                    </option>
                  ))}
                  {[1, 2, 3, 4].map((index) => (
                    <option
                      key={`หอศรีตรัง ${index}`}
                      value={`หอศรีตรัง ${index}`}
                    >
                      หอศรีตรัง {index}
                    </option>
                  ))}
                </select>
              ) : (
                <></>
              )}
              {selectAdr == 4 ? (
                <select
                  value={building}
                  onChange={(e) => {
                    let value = e.target.value;
                    setBuilding(value);
                    setDestination(value);
                  }}
                  className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-md"
                >
                  {buildinglist.map((place, index) => (
                    <option key={place} value={place} className=" w-52">
                      {place}
                    </option>
                  ))}
                </select>
              ) : (
                <></>
              )}
              {selectAdr == 5 ? (
                <textarea
                  value={otherPlace}
                  name="address"
                  placeholder="ที่อยู่"
                  className="resize-none max-w-56 min-w-52 w-52 p-1 rounded-md"
                  onChange={(e) => {
                    let value = e.target.value;
                    setOtherPlace(value);
                    setDestination(value);
                  }}
                ></textarea>
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* <h1 className=" w-52 truncate">Destination : {destination}</h1>
          <h1 className=" w-52 truncate">Name : {name}</h1>
          <h1 className="w-52 truncate">Amount : {amount}</h1> */}
          <button
            type="button"
            className={`border w-12 h-8 border-amber-800 ${canSummitstyle()}  rounded-md`}
            disabled={cannotSummit}
            onClick={() => console.log("click")}
          >
            ส่ง
          </button>
        </form>
      </div>
    </main>
  );
}
