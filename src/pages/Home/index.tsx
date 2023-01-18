import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookForm/resolvers/zod'
import * as zod from 'zod'
import {
  HomeContainer,
  StartCountdawnButton,
  StopCountdawnButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Countdown } from './components/Countdown'
import { useContext } from 'react'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no minimo 1 minutos')
    .max(60, 'o ciclo precisa ser no maximo 60 minutos'),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const{activeCycle, CreateNewCycle, InterruptCurrentCycle } = useContext(CyclesContext)
  

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    CreateNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle
        )} action="">
      <FormProvider {...newCycleForm}>
        <NewCycleForm />
        </FormProvider>
        <Countdown />
        
        
        {activeCycle ? (
          <StopCountdawnButton onClick={InterruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdawnButton>
        ) : (
          <StartCountdawnButton disabled={isSubmitDisabled} type="submit">
            <Play size={24}/>
            Começa
          </StartCountdawnButton>
        )}
      </form>
    </HomeContainer>
  )
    }

