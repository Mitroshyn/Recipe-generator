import { Data } from "../components/Data";
import { Tabs } from "../components/Tabs";

export function Main({ data, type, title }) {
  return (
    <>
      <div>
        <h1 className="text-4xl pb-4 ml-4">{title}</h1>
        <Tabs />
        <Data data={data} type={type} />;
      </div>
    </>
  );
}
