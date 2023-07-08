import * as React from "react";
import { format } from "date-fns";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Phase from "../ui/Phase";
import useInvoice from "../store/invoice/hooks/useInvoice";
import { IPhase } from "../store/invoice/interfaces/phase.interface";
import Calendar from "../ui/Icons/Calendar";
import { StyledDateContainer, StyledTotalContainer } from "./styles";
import Box from "@mui/material/Box";

export default function Home() {
  const { list, loading, error } = useInvoice();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const { phases, number, date, partner, discount, fee, totalCount } =
    list.invoice;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Card sx={{ minWidth: 275, background: "#e4ebf3" }}>
          <CardContent>
            <Typography variant="h6">Invoice: №{number}</Typography>
            <Typography sx={{ color: "text.secondary" }}>{partner}</Typography>
            <StyledDateContainer>
              <Calendar />
              <Typography sx={{ color: "text.secondary" }}>
                {format(new Date(date), "MM/dd/yyyy")}
              </Typography>
            </StyledDateContainer>
            {phases &&
              phases.map((phase: IPhase, index: number) => (
                <Phase
                  key={`panel-${index}`}
                  name={`panel-${index}`}
                  title={phase.title}
                  discount={phase.discount}
                  fee={phase.fee}
                  items={phase.items}
                  subtotal={phase.subtotal}
                  total={phase.total}
                />
              ))}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                pt: 1,
              }}
            >
              <StyledTotalContainer>
                {!!discount && (
                  <Typography variant="body1">Discount: {discount}%</Typography>
                )}
                {!!fee && (
                  <Typography variant="body1">Fee: {fee} EUR</Typography>
                )}
                {!!totalCount && (
                  <Typography variant="body1">
                    Total: {totalCount} EUR
                  </Typography>
                )}
              </StyledTotalContainer>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
