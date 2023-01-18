import { differenceInSeconds } from "date-fns"
import { createContext, ReactNode, useState, useReducer, useEffect } from "react"
import {  addNewCycleAction, InterruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions"
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
    task: string
    minutesAmount: number
}



interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId:string | null
    amoutSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed:(seconds:number) => void
    CreateNewCycle: (data:CreateCycleData) => void
    InterruptCurrentCycle:() => void
  }

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProvideProps{
    children: ReactNode
}



export function CyclesContextProvider({ children }:CyclesContextProvideProps){
    const [cyclesState, dispatch] = useReducer(CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    }, 
    )
    const {cycles, activeCycleId} = cyclesState
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)


    const [amoutSecondsPassed, setAmoutSecondsPassed,] = useState(() => {
      if (activeCycle ){
        return differenceInSeconds(
          new Date(), 
          new Date(activeCycle.startDate))
      }

      return 0
    })
    function setSecondsPassed(seconds:number){
      setAmoutSecondsPassed(seconds)
    }

    function markCurrentCycleAsFinished() {
      dispatch(markCurrentCycleAsFinishedAction())
     }
    
      
      function CreateNewCycle(data: CreateCycleData ) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
          id,
          task: data.task,
          minutesAmount: data.minutesAmount,
          startDate: new Date(),
        }

        dispatch(addNewCycleAction(newCycle))

        setAmoutSecondsPassed(0)

      }

      function InterruptCurrentCycle(){
        dispatch(InterruptCurrentCycleAction())
      }

    return (
        <CyclesContext.Provider 
        value ={{
            cycles,
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amoutSecondsPassed,
            setSecondsPassed,
            CreateNewCycle,
            InterruptCurrentCycle
            }}>
                {children}
        </CyclesContext.Provider>
    )
}
