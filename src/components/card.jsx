import { SiSpeedtest } from "react-icons/si";
import { BsFuelPump } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [card, setCard] = useState();
  const [page, setPage] = useState(2);

  const CardData = async () => {
    try {
      const res = await axios.get("https://api.boom-avto.co/avto/");
      console.log(res.data.results);
      setCard(res.data.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    CardData();
  }, []);

  const LoadMore = async () => {
    try {
      const res = await axios.get(
        `https://api.boom-avto.co/avto/?page=${page}`
      );
      setCard([...card,...res.data.results]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-3 gap-3">
          {card &&
            card.map((item, index) => (
              <div
                key={index}
                className="card shadow-2xl p-[25px] mt-[35px] flex-col items-center"
              >
                <img
                  src={item.avto_image[0].image}
                  alt="img"
                  className="w-full"
                />
                <div className="info ">
                  <h2 className="text-[18px] leading-5 font-semibold mt-[23px] ">
                    {item.model_avto.name}
                  </h2>
                  <p className="text-[15px] mb-[22px]">{item.name}</p>
                </div>
                <div className="frame flex gap-[5px] mb-[27px]">
                  <div className="icon flex items-center gap-[5px] text-[14px] leading-[14px] border-[1px] p-[15px] shadow-sm rounded-[5px]">
                    <SiSpeedtest />
                    <p>{item.probeg} км</p>
                  </div>
                  <div className="icon flex items-center gap-[10px] text-[14px] leading-[14px] border-[1px] p-[15px] shadow-sm rounded-[5px]">
                    <BsFuelPump />
                    <p>{item.type_fuel.name}</p>
                  </div>
                  <div className="icon flex items-center gap-[10px] text-[14px] leading-[14px] border-[1px] p-[15px] shadow-sm rounded-[5px]">
                    <FaRegCalendarAlt />
                    <p>{item.year} год</p>
                  </div>
                </div>
                <div className="price flex justify-between  items-center">
                  <h3 className="text-[23px] leading-[30px] font-bold ">
                    {item.price_dollor}$
                  </h3>
                  <p className="flex items-end gap-[10px] text-[14px] leading-[16.44px] font-semibold">
                    Подробнее
                    <MdArrowOutward />
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-7 flex content-center justify-end">
          <button onClick={LoadMore} className="flex-shrink-0 text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg mt-10 sm:mt-0">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
