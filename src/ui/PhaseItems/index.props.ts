import { IPhaseItem } from "../../store/invoice/interfaces/phase.interface";

export interface IPhaseItemProps {
  data: IPhaseItem[];
  phasesubtotal: string;
  phasediscount?: string;
  phasefee?: string;
  phasetotal?: string;
}
