import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";
import { IPhaseItemProps } from "./index.props";

const PhaseItems: FC<IPhaseItemProps> = ({
  data,
  phasesubtotal,
  phasediscount,
  phasefee,
  phasetotal,
}) => {
  const taxMap: Partial<Record<string, number>> = {
    GIFT: 0,
    INCOME: 12,
    SALES: 18,
    VALUE_ADDED: 24,
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">
                Hourly rate/<span style={{ color: "blue" }}>Price</span> (EUR)
              </TableCell>
              <TableCell align="center">
                Hours/<span style={{ color: "blue" }}>Amount</span>
              </TableCell>
              <TableCell align="center">Price (EUR)</TableCell>
              <TableCell align="center">Discount, %</TableCell>
              <TableCell align="center">Tax rate, %</TableCell>
              <TableCell align="center">Total price (EUR)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row, index) => (
                <TableRow
                  key={`${row.title}-${index.toString()}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="center">
                    {row.unit == "item" ? (
                      <span style={{ color: "blue" }}>{row.price}</span>
                    ) : (
                      row.price
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.unit == "item" ? (
                      <span style={{ color: "blue" }}>{row.amount}</span>
                    ) : (
                      row.amount
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {Number(row.price) * Number(row.amount)}
                  </TableCell>
                  <TableCell align="center">
                    {row.discount ? row.discount : "-"}
                  </TableCell>
                  <TableCell align="center">{taxMap[row.tax]}</TableCell>
                  <TableCell align="center">{Number(row.total)}</TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="center">Subtotal</TableCell>
              <TableCell />
              <TableCell align="center">{`${Number(
                phasesubtotal
              )} EUR`}</TableCell>
            </TableRow>
            {phasediscount && (
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="center">Discount</TableCell>
                <TableCell />
                <TableCell align="center">{`${Number(
                  phasediscount
                )} %`}</TableCell>
              </TableRow>
            )}
            {phasefee && (
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="center">Fee</TableCell>
                <TableCell />
                <TableCell align="center">{`${Number(
                  phasefee
                )} EUR`}</TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="center">Total</TableCell>
              <TableCell />
              <TableCell align="center">{`${Number(
                phasetotal
              )} EUR`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PhaseItems;
