import { SleepDurationHistory } from "./Sleep-Tracker";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  data: SleepDurationHistory[];
  total: number;
};
function SleepTrackerTable(props: Props) {
  const { data, total } = props;
  return (
    <Table>
      <TableCaption>Sleep Duration History Total : {total} Hrs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>duration (hrs)</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((h) => {
          return (
            <TableRow key={h.id}>
              <TableCell>{h.id}</TableCell>
              <TableCell>{h.duration}</TableCell>
              <TableCell>{`${new Date(h.date).toLocaleDateString()} ${new Date(
                h.date
              ).toLocaleTimeString()}`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default SleepTrackerTable;
