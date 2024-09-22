import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Data } from '../components/Data';
import { Tabs } from '../components/Tabs';
import {PopularDishes} from '../components/PopularDishes';
export function DishesList({ data, title, type}) {
  const historyPush = useNavigate();

  
    const [activeTab,setActiveTab] = useState('');
  
  const handleTabClick =(tab)=>{
    console.log('Clicked tab:', tab);
    setActiveTab(tab);

    if (tab=== 'popular'){
      historyPush('/');
    }
    else if(tab=== 'new'){
      historyPush('/newRecipes')
    }
  }

  

  return (
    <>
      <div className="">
        <div className="flex flex-col pb-4">
          <h1 className="text-4xl ml-4">{title}</h1>
          </div>
          
        <span onClick={()=> handleTabClick('popular')} className={`cursor-pointer bg-amber-300 ml-4 text-xl ${activeTab === 'popular' ? 'bg-green-500 text-white' : ''}`}>Популярные</span>
        <span onClick={()=>handleTabClick('new')} className={`cursor-pointer bg-amber-300 ml-4 text-xl ${activeTab === 'new' ? 'bg-green-500 text-white' : ''}`}>Новые</span>


          
          {/* <Tabs/> */}

        

          

        <Data data={data} type={type}/>
        {/* <PopularDishes data={data} type={type}/> */}
      </div>
    </>
  );
}
