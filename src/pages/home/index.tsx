/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TextInput,
} from "./styles";

/*
  Form using react hook form
*/

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(2, "Task needs to be at least 2 characters"),
  minutesAmount: zod
    .number()
    .min(5, "Minimum cycle time is 5 min")
    .max(60, "Maximum cycle time is 5 min"),
});

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

// To infer inside zod the typeof, instead using the interface
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };
    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <HomeContainer>
      {/* Top form */}
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Work title is</label>
          <TextInput
            list="task-list"
            placeholder="Name your project"
            id="task"
            type="text"
            {...register("task")}
          />

          <datalist id="task-list">
            <option value="project 1"></option>
            <option value="project 2"></option>
            <option value="project 3"></option>
            <option value="project 4"></option>
          </datalist>

          <label htmlFor="minutesAmount">Time</label>
          <MinutesAmountInput
            placeholder="00"
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        {/* Count down */}
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
