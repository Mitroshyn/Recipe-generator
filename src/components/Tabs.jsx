import React from "react";
import { MAIN_TABS } from "../constants/mainTabs";

export function Tabs({ activeTab, onActiveTabChange }) {
  const handleTabClick = (tab) => {
    console.log("Clicked tab:", tab);
    onActiveTabChange(tab);
  };
  return (
    <div>
      {MAIN_TABS.map((tab, index) => {
        return (
          <span
            onClick={() => handleTabClick(tab.key)}
            className={`cursor-pointer bg-amber-300 ml-4 text-xl ${
              activeTab === tab.key ? "bg-green-500 text-white" : ""
            }`}
            key={index}
          >
            {tab.label}
          </span>
        );
      })}
    </div>
  );
}
