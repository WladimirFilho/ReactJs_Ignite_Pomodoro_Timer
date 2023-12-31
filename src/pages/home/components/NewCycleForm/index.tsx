import { FormContainer, MinutesAmountInput, TextInput } from "./style";
import { useContext } from "react";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/ContextProvider";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Work title is</label>
      <TextInput
        list="task-list"
        placeholder="Name your project"
        id="task"
        type="text"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
