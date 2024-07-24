import { useNavigate } from "react-router-dom";

export function DishesList({ data, title, tags, type }) {
  const historyPush = useNavigate();

  return (
    <>
      <h1>{title}</h1>
      {tags.map((tag, index) => (
        <div key={index}>{tag}</div>
      ))}
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => historyPush(`/dishes/${type}/${item.title}`)}
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
