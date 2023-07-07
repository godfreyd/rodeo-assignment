import * as React from "react";
import { format } from "date-fns";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Phase from "../ui/Phase";
import usePhases from "../store/phase/hooks/usePhases";
import { IPhase } from "../store/phase/interfaces/phase.interface";
import Calendar from "../ui/Icons/Calendar";
import { StyledDateContainer } from "./styles";

export default function Home() {
  const { list, loading, error } = usePhases();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const { phases } = list;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Card sx={{ minWidth: 275, background: "#e4ebf3" }}>
          <CardContent>
            <Typography variant="h6">Invoice: №13</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Kitty & Co LLC
            </Typography>
            <StyledDateContainer>
              <Calendar />
              <Typography sx={{ color: "text.secondary" }}>
                {format(new Date(2023, 6, 5), "MM/dd/yyyy")}
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
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
