import { WaterIntakeHistory } from "./Water-Tracker";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  data: WaterIntakeHistory[];
  total: number;
};
function WaterTrackerTable(props: Props) {
  const { data, total } = props;
  return (
    <Table>
      <TableCaption>Water Intake History Total : {total} ml</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Quantity(ml)</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((h) => {
          return (
            <TableRow key={h.id}>
              <TableCell>{h.id}</TableCell>
              <TableCell>{h.quantity}</TableCell>
              <TableCell>{`${h.date.toLocaleDateString()} ${h.date.toLocaleTimeString()}`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default WaterTrackerTable;
