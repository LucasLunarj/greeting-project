export const Page = () => {
  const current = new Date();
  const time: string = current.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const timeValue = parseFloat(time).toFixed(2);
  let currentPeriod;
  const currentMinute: number | string = current.getMinutes();
  console.log(timeValue, time, current.getMinutes(), parseInt(currentMinute));

  if (parseInt(time) >= 6 && parseInt(time) <= 12) {
    currentPeriod = "Bom Dia";
  } else if (parseInt(time) >= 12 && parseInt(time) <= 18) {
    currentPeriod = "Boa Tarde";
  } else {
    currentPeriod = "Boa Noite";
  }

  return (
    <div className=" container mx-auto">
      <div>
        <h1 className="text-8xl text-white text-center ">{time}</h1>
        <p className="text-white text-center text-xl">{currentPeriod}</p>
      </div>
    </div>
  );
};
