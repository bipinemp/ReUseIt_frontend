// "use client";
import LineChart from "../components/LineChart";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { ImCart } from "react-icons/im";

function page() {
  const cards = [
    {
      name: "Revenue",
      value: "53000",
      plus: "3",
      icon: <GiReceiveMoney fontSize={25} />,
    },
    {
      name: "Users",
      value: "2300",
      plus: "4",
      icon: <FaUsers fontSize={25} />,
    },
    {
      name: "Revenue",
      value: "2231",
      plus: "5",
      icon: <ImCart fontSize={25} />,
    },
  ];

  return (
    <div className=" w-normal pt-9">
      <h1 className="h1">Home</h1>
      <section className="flex justify-between mt-9">
        {cards.map((item) => {
          let price = Number(item.value).toLocaleString("en-US");

          return (
            <div
              key={item.name}
              className="flex gap-10 bg-mode-extralight py-4 px-5 shadow-lg items-center rounded-lg cursor-pointer"
            >
              <div className="flex flex-col  justify-between text-text-secondary">
                <p>{item.name}</p>
                <div className="flex gap-1 items-center">
                  <h1 className="font-bold text-xl text-text-default">
                    {price}
                  </h1>
                  <h1 className="text-fivenery font-bold">+{item.plus}%</h1>
                </div>
              </div>
              <span className="shadow-md p-3 rounded-lg  text-white bg-gradient-to-tl from-primary to-fournery">
                {item.icon}
              </span>
            </div>
          );
        })}
      </section>
      <LineChart />
    </div>
  );
}

export default page;
