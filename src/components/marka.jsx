import axios from "axios";
import { useState, useEffect } from "react";

function Marka() {
  const [marka, setMarka] = useState();

  const MarkaData = async () => {
    try {
      const res = await axios.get("https://api.boom-avto.co/avto/marka/");
      console.log(res.data);
      setMarka(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    MarkaData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-[28px] font-black leading-[34px] mt-[100px] mb-[30px]">Выберите марку авто</h2>
      <div className="grid grid-cols-6 gap-5">
        {marka &&
          marka.map((item) => (
            <div className="h-[168px] w-[216px] p-5 border-2 flex flex-col items-center content-center justify-center " key={item.id}>
              <img className="w-max mb-[28px] text-[16px] leading-[20px] font-medium " src={item.logo} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Marka;
