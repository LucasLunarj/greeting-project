export const Page = () => {
  const current = new Date();
  const time: string = current.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(time);

  return (
    <div className=" container mx-auto bg-slate-500">
      <div>
        <h1 className="text-8xl text-white">{time}</h1>
      </div>
    </div>
  );
};
