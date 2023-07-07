import { SyntheticEvent, useState, FC } from "react";
import { IPhaseProps } from "./index.props";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhaseItems from "../PhaseItems";

const Phase: FC<IPhaseProps> = ({
  name,
  title,
  discount,
  fee,
  items,
  subtotal,
  total,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Accordion expanded={expanded === name} onChange={handleChange(name)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`${name}-header`}>
        <Typography sx={{ width: "40%", flexShrink: 0 }}>{title}</Typography>
        <Typography sx={{ width: "20%", color: "text.secondary" }}>
          {discount && `Discount: ${Number(discount)} %`}
        </Typography>
        <Typography sx={{ width: "20%", color: "text.secondary" }}>
          {fee && `Fee: ${Number(fee)} EUR`}
        </Typography>
        <Typography sx={{ width: "20%" }}>
          {total && `Total: ${Number(total)} EUR`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!!items.length && (
          <PhaseItems
            data={items}
            phasediscount={discount}
            phasefee={fee}
            phasesubtotal={subtotal}
            phasetotal={total}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default Phase;
