import { useMemo, useState } from "react";
import { Data } from "../components/Data";
import { Tabs } from "../components/Tabs";
import { MAIN_TABS } from "../constants/mainTabs";

export function Main() {
  const [activeTab, setActiveTab] = useState(MAIN_TABS[0].key);

  const currentTabData = useMemo(() => {
    return MAIN_TABS.find((tab) => tab.key === activeTab);
  }, [activeTab]);
  return (
    <>
      <div>
        <h1 className="text-4xl pb-4 ml-4">{currentTabData?.title || ""}</h1>
        <Tabs activeTab={activeTab} onActiveTabChange={setActiveTab} />
        <Data
          data={currentTabData?.data || []}
          type={currentTabData?.type || ""}
        />
      </div>
    </>
  );
}
