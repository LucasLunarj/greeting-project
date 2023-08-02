export const Page = () => {
  const current = new Date();
  const time: string = current.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const timeValue = time.split(".");
  let currentPeriod;
  const currentMinute: number | string = current.getMinutes();
  console.log(
    timeValue,
    time.split(".")[0],
    current.getMinutes(),
    +currentMinute
  );

  if (parseInt(time) >= 0 && parseInt(time) <= 12 && +currentMinute > 0) {
    currentPeriod = "Bom Dia";
  } else if (
    parseInt(time) >= 12 &&
    parseInt(time) < 18 &&
    +currentMinute > 0
  ) {
    currentPeriod = "Boa Tarde";
  } else if (parseInt(time) >= 18 && parseInt(time) <= 23) {
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
