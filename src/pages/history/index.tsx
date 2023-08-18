import { useContext } from "react";
import { CyclesContext } from "../../context/ContextProvider";
import { HistoryContainer, HistoryList, Status } from "./style";
import { formatDistanceToNow } from "date-fns";
import { cy } from "date-fns/locale";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycles) => {
              return (
                <tr key={cycles.id}>
                  <td>{cycles.task}</td>
                  <td>{cycles.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(cycles.startDate, {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycles.finishedDate && (
                      <Status statusColor="green">Completed</Status>
                    )}
                    {cycles.interruptedDate && (
                      <Status statusColor="red">Not completed</Status>
                    )}
                    {!cycles.finishedDate && !cycles.interruptedDate && (
                      <Status statusColor="yellow">On going</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
