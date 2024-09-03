import { useNavigate } from "react-router-dom";

export function DishesList({ data, title, tags, type }) {
  const historyPush = useNavigate();

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center pb-4">
          <h1 className="text-4xl">{title}</h1>
          {tags.map((tag, index) => (
            <div className="" key={index}>{tag}</div>
          ))}
        </div>
        <div className="flex flex-wrap justify-evenly">
          {data.map((item, index) => (
            <div
              className="w-2/5 p-4 cursor-pointer hover:bg-blue-200 mt-1"
              key={index}
              onClick={() => historyPush(`/dishes/${type}/${item.title}`)}
            >
              <img className="w-28 h-24" src={item.image} alt={item.title} />
              <h2 className="">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
