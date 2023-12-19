"use client"

import Statisticboard from './components/Statisticboard'
import colors from "../colors"
import React,{useState} from 'react'
import DatePicker from './components/DatePicker'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarIcon } from 'lucide-react'
import DarkModeToggle from './components/DarkModeToggle'
//import { Input } from "@/components/ui/input"
//import { Label } from "@/components/ui/label"

 

export default function Home() {
  const [startdate, setStartDate] = useState<Date>()
  const [enddate, setEndDate] = useState<Date>()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex min-h-screen flex-col items-center justify-centerd w-full relative">
        <div className="z-50 max-w-5xl w-full mb-12  items-center font-mono text-sm lg:flex">
          <div className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-autos  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="flex  mr-6 ">

          <DarkModeToggle/>
          </div>

            WinLo&nbsp;
            <code className="font-mono font-bold">Chart</code>
            

      <div className="flex  ml-4 md:hidden">
      <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Date</Button> */}
        <CalendarIcon className="ml-6 h-6 w-8 cursor-pointer" />
      </DialogTrigger> 
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Date Range</DialogTitle>
          <DialogDescription>
            Make changes to the Date here. Click Search when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="flex flex-col w-full items-center mb-8 space-y-4 md:flex ">
            <div className="flex items-center space-x-4">
              <p className="flex items-left font-bold font-mono">From</p>
            <DatePicker startdate={startdate} setStartDate={setStartDate}/>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <p className="flex items-left ml-4 font-bold font-mono">To</p>
            <DatePicker startdate={enddate} setStartDate={setEndDate}/>
            </div>
            </div>
        </div>
        <DialogFooter>
          <Button type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

          </div>
    </div>
        </div>

        <div className="absolute top-0 animate-blob animation-delay-4000 mix-blend-multiply filter blur-2xl  bg-yellow-200 -left-4 w-72 h-72 rounded-full -z-10"></div>

        <div className="absolute animate-blob animation-delay-3000 top-0 mix-blend-multiply filter blur-2xl  bg-indigo-800 -right-4 w-72 h-72 rounded-full -z-10"></div>

        <div className="absolute animate-blob animation-delay-2000 mix-blend-multiply filter blur-2xl left-20 bg-pink-800 -bottom-8 w-72 h-72 rounded-full -z-10"></div>

        <div className="flex flex-col md:flex-row-reverse items-center h-full w-full justify-center">
          <Statisticboard />

          <div className="flex flex-col  h-full w-full md:w-[50%] dark:bg-slate-900 rounded-lg md:py-6 items-center justify-center md:mr-4 mt-4 space-y-1">
            
            <div className="flex flex-col w-full items-center mb-8 space-y-4 hidden md:flex ">
            <div className="flex items-center space-x-4">
              <p className="flex items-left font-bold font-mono">From</p>
            <DatePicker startdate={startdate} setStartDate={setStartDate}/>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <p className="flex items-left ml-4 font-bold font-mono">To</p>
            <DatePicker startdate={enddate} setStartDate={setEndDate}/>
            </div>
            </div>    
            <p className="flex text-xl font-mono font-bold">Most played Numbers</p>

            <div className="flex w-full items-center h-24 rounded-full bg-blue-900d shadow-lg overflow-hidden">
             
                  <div className="flex overflow-x-scroll  hide-scroll-bar py-2 h-full items-center">

                    <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10  ">
                    {colors.map((col,i)=>(
                      <div key={col} className={` ${colors[Math.floor(Math.random()*5)]} shadow-xl inline-block  border-2 mx-auto border-black  text-white  rounded-full flex  items-center justify-center  h-14 w-14 md:w-12 md:h-12`}>
                      <p className="text-2xl">{i}</p>
                     </div>

                    ))}
                     

                </div>

              </div>
            </div>

            <p className="flex text-xl font-mono font-bold">Unplayed Numbers</p>
            <div className="flex w-full items-center h-24 rounded-full bg-yellow-900k shadow-lg overflow-hidden ">

              <div className="flex overflow-x-scroll  hide-scroll-bar py-2 h-full items-center ">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10   ">

              {colors.map((col,i)=>(
              <div key={col} className={` ${colors[Math.floor(Math.random()*5)]} shadow-xl border-2 mx-auto border-black  text-white  rounded-full flex  items-center justify-center  h-14 w-14 md:w-12 md:h-12`}>
                  <p className="text-2xl">{i}</p>
              </div>
              ))}
              

            </div>
            </div>
            </div>


          </div>
        </div>
      </div>
    </main>
  )
}
