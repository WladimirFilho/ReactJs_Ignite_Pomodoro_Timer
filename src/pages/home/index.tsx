import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TextInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      {/* Top form */}

      <form action="">
        <FormContainer>
          <label htmlFor="task">Work title is</label>
          <TextInput
            list="task-list"
            placeholder="Name your project"
            id="task"
            type="text"
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

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
