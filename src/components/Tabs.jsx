import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


export function Tabs (){
   const historyPush = useNavigate();
   const [activeTab,setActiveTab] = useState('');
  
   const HandleTabClick =(tab)=>{


      

     console.log('Clicked tab:', tab);
     setActiveTab(tab);
 
     if (tab=== 'popular'){
       historyPush('/');
     }
     else if(tab=== 'new'){
       historyPush('/newRecipes')
     }
   }
   return <div>
      <span onClick={()=> HandleTabClick('popular')} className={`cursor-pointer bg-amber-300 ml-4 text-xl ${activeTab === 'popular' ? 'bg-green-500 text-white' : ''}`}>Популярные</span>
      <span onClick={()=>HandleTabClick('new')} className={`cursor-pointer bg-amber-300 ml-4 text-xl ${activeTab === 'new' ? 'bg-green-500 text-white' : ''}`}>Новые</span>
   </div>
};