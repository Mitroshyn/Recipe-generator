import { Data } from "../components/Data";

export function DishesList({ data, title, type }) {
  return (
    <>
      <div className="">
        <div className="flex flex-col pb-4">
          <h1 className="text-4xl ml-4">{title}</h1>
        </div>

        <Data data={data} type={type} />
      </div>
    </>
  );
}
