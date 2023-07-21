import { HistoryContainer, HistoryList, Status } from "./style";

export function History() {
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
            <tr>
              <td>Task name</td>
              <td>20 minutes</td>
              <td>2 weeks ago</td>
              <td>
                <Status statusColor="yellow">Complete</Status>
              </td>
            </tr>
            <tr>
              <td>Task name</td>
              <td>20 minutes</td>
              <td>2 weeks ago</td>
              <td>
                <Status statusColor="yellow">Complete</Status>
              </td>
            </tr>
            <tr>
              <td>Task name</td>
              <td>20 minutes</td>
              <td>2 weeks ago</td>
              <td>
                <Status statusColor="yellow">Complete</Status>
              </td>
            </tr>
            <tr>
              <td>Task name</td>
              <td>20 minutes</td>
              <td>2 weeks ago</td>
              <td>
                <Status statusColor="red">Stopped</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
