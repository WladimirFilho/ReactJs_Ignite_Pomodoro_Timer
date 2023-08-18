import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./style";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../context/ContextProvider";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);

  // Calc the seconds and minutes
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  // Sets the seconds passing using the date-fn package where you can passes the Date and start to subtract from the active cycle startDate preset before.
  useEffect(() => {
    // Create a variable to be disposed in the return of the useEffect. The avoids the set interval function to create an interval on top of another interval.
    let interval: number;

    if (activeCycle) {
      // Assign interval variable
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }
    // clear interval variable
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minute = String(minutesAmount).padStart(2, "0");
  const second = String(secondsAmount).padStart(2, "0");

  // To update the window title in the browser. The user can see the timer running when he is in another tab.
  useEffect(() => {
    // check if there is active cycle
    if (activeCycle) {
      // show the minutes and seconds in the timer
      document.title = `${minute}:${second}`;
    }
  }, [minute, second, activeCycle, setSecondsPassed]);

  return (
    <CountdownContainer>
      <span>{minute[0]}</span>
      <span>{minute[1]}</span>
      <Separator>:</Separator>
      <span>{second[0]}</span>
      <span>{second[1]}</span>
    </CountdownContainer>
  );
}
