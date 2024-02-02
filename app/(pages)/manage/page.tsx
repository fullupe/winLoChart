"use client"
import ListGames from "@/app/components/ListGames";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {useAddResult} from "../../hooks/useAddResult"

const BallForm = () => {

  const{add_Result}=useAddResult()

  const [gameType, setGameType] = useState<string>('')

  const [ball1, setBall1] = useState("0")
  const [ball2, setBall2] = useState("0")
  const [ball3, setBall3] = useState("0")
  const [ball4, setBall4] = useState("0")
  const [ball5, setBall5] = useState("0")
  const [ball6, setBall6] = useState("0")
  const [ball7, setBall7] = useState("0")
  const [ball8, setBall8] = useState("0")
  const [ball9, setBall9] = useState("0")
  const [ball10, setBall10] = useState("0")
  const [ball11, setBall11] = useState("0")
  const [ball12, setBall12] = useState("0")

  const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault()

   const request = {
    result_id:uuidv4(),
     game_type:gameType,
     num_1:ball1,
     num_2:ball2,
     num_3:ball3,
     num_4:ball4,
     num_5:ball5,
     num_6:ball6,
     num_7:ball7,
     num_8:ball8,
     num_9:ball9,
     num_10:ball10,
     num_11:ball11,
     num_12:ball12,
     createdAt:new Date()
   }

   //console.log(request)

   add_Result(request)

  //  toast('Record Added!', {
  //   toastId: 'success',
  //   icon: '🚀',
  // });


   setBall1("0")
   setBall2("0")
   setBall3("0")
   setBall4("0")
   setBall5("0")
   setBall6("0")
   setBall7("0")
   setBall8("0")
   setBall9("0")
   setBall10("0")
   setBall11("0")
   setBall12("0")
   setGameType("")
  }

  const ghanaGames = gameType == "MONDAY SPECIAL" || 
  gameType == "VAG MONDAY" || 
  gameType == "VAG TUESDAY" ||
  gameType == "VAG WEDNESDAY" ||
  gameType == "VAG THURSDAY" ||
  gameType == "VAG FRIDAY" ||
  gameType == "VAG SATURDAY"||

  gameType == "LUCKY TUESDAY"||
  gameType == "MID WEEK GH"||
  gameType == "FORTUNE"||
  gameType == "BONANZA"||
  gameType == "NATIONAL"||
  gameType == "BLESSED SUNDAY"
  

    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md h-screen">
        <ToastContainer/>
        <div className="flex  flex-col items-center  justify-center py-2 mb-4 w-full">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="selectedBall">
          Select Game Type
        </label>
        <ListGames gameType={gameType} setGameType={setGameType}/>

        </div>
       
  
        <div className="flex -mx-2 mb-4 rounded-2xl items-center  pt-2 bg-yellow-600">
          {/* First Line */}
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 1
            </label>
            <input
              id="ball1"
              name="ball1"
              type="text"
              //min="0"
              value={ball1}
              onChange={(e)=>setBall1(e.target.value)}
              maxLength={2} 
              className="w-12 p-2 border rounded-full h-12 text-center "
              autoFocus
            />
          </div>

          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball2">
              Ball 2
            </label>
            <input
              id="ball2"
              name="ball2"
              type="text"
              value={ball2}
              onChange={(e)=>setBall2(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 3
            </label>
            <input
              id="ball3"
              name="ball3"
              type="text"
              value={ball3}
              onChange={(e)=>setBall3(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 4
            </label>
            <input
              id="ball4"
              name="ball4"
              type="text"
              value={ball4}
              onChange={(e)=>setBall4(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 5
            </label>
            <input
              id="ball5"
              name="ball4"
              type="text"
              value={ball5}
              onChange={(e)=>setBall5(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>

        </div>


        {/* ball6-7 */}

        <div className="flex flex-wrap  -mx-2 mb-4 bg-red-100 rounded-2xl justify-center items-center pt-2">
          {/* First Line */}
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 6
            </label>
            <input
              id="ball6"
              name="ball6"
              type="text"
              value={ball6}
              onChange={(e)=>setBall6(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              autoFocus
              disabled={ghanaGames}
              
            />
          </div>

          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 7
            </label>
            <input
              id="ball7"
              name="ball7"
              type="text"
              value={ball7}
              onChange={(e)=>setBall7(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              disabled={ghanaGames}
            />
          </div>
          
          </div>



            {/* ball 8 to 12 */}

        <div className="flex flex-wrapd -mx-2 mb-4 rounded-2xl pt-2 bg-yellow-600">
         
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 8
            </label>
            <input
              id="ball8"
              name="ball8"
              type="text"
              value={ball8}
              onChange={(e)=>setBall8(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              disabled={ghanaGames}
            />
          </div>

          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 9
            </label>
            <input
              id="ball9"
              name="ball9"
              type="text"
              value={ball9}
              onChange={(e)=>setBall9(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              disabled={ghanaGames}
            />
          </div>
          
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 10
            </label>
            <input
              id="ball10"
              name="ball10"
              type="text"
              maxLength={2 ?? undefined} 
              value={ball10}
              onChange={(e)=>setBall10(e.target.value)}
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              disabled={ghanaGames}
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 11
            </label>
            <input
              id="ball11"
              name="ball11"
              type="text"
              value={ball11}
              onChange={(e)=>setBall11(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              disabled={ghanaGames}
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 12
            </label>
            <input
              id="ball2"
              name="ball12"
              type="text"
              value={ball12}
              onChange={(e)=>setBall12(e.target.value)}
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center disabled:bg-red-400"
              disabled={ghanaGames}
            />
          </div>

        </div>

        <div className="w-full flex justify-end">
        <button
        disabled={!gameType || ball1.length < 2 || ball2.length < 2 || ball3.length < 2 || ball4.length < 2 || ball5.length < 2}
          type="submit"
          onClick={handleSubmit}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
         {
           !gameType ? "select game" : "Submit"
         } 
        </button>

        </div>
      </div>
    );
  };
  
  export default BallForm;




