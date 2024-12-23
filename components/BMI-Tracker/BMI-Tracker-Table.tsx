import { BMIHistory } from "./BMI-Tracker";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  data: BMIHistory[];
};
function BMITable(props: Props) {
  const { data } = props;
  return (
    <Table>
      <TableCaption>BMI History</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Weight</TableHead>
          <TableHead>Height</TableHead>
          <TableHead>BMI</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((h) => {
          return (
            <TableRow key={h.id}>
              <TableCell>{h.id}</TableCell>
              <TableCell>{h.weight}</TableCell>
              <TableCell>{h.height}</TableCell>
              <TableCell>{h.bmi}</TableCell>
              <TableCell>{`${h.date.toLocaleDateString()} ${h.date.toLocaleTimeString()}`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default BMITable;
