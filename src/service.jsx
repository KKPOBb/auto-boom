import key from '../src/imgs/key.png'
import message from "../src/imgs/message.png"
import serv from "../src/imgs/serv.png"
import autocar from "../src/imgs/autocar.png"

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around py-10 px-5 gap-6">
      {/* First Card */}
      <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg max-w-xs">
        <img src={key} alt="a Korean Flag" className="w-16 h-16 mb-4"/>
        <h3 className="text-lg font-semibold mb-2">Работаем под ключ</h3>
        <p className="text-gray-600">У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков.</p>
      </div>

      {/* Second Card */}
      <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg max-w-xs">
        <img src={message} className="text-4xl mb-2" alt="a " />
        <h3 className="text-lg font-semibold mb-2">Онлайн-чат 24/7</h3>
        <p className="text-gray-600">Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором.</p>
      </div>

      {/* Third Card */}
      <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg max-w-xs">
        <img src={serv} alt="a " />
        <h3 className="text-lg font-semibold mb-2">Упрощенный выбор авто</h3>
        <p className="text-gray-600">Мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным.</p>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg max-w-xs">
        <img src={autocar} alt="a " />
        <h3 className="text-lg font-semibold mb-2">Доставка</h3>
        <p className="text-gray-600">Поставка в любой регион РФ, прямая связь без посредников.</p>
      </div>
    </div>
  );
};

export default Service;
