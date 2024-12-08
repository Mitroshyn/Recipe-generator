import { Data } from "../components/Data";

export function DishesList({ data, title, type }) {
  return (
    <>
      <div className="">
        <h1 className="text-2xl xs:text-4xl ml-4">{title}</h1>

        <Data data={data} type={type} />
      </div>
    </>
  );
}
