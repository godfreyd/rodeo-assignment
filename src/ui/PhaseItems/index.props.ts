import { IPhaseItem } from "../../store/invoice/interfaces/phase.interface";

export interface IPhaseItemProps {
  data: IPhaseItem[];
  phasesubtotal: number;
  phasediscount?: number;
  phasefee?: number;
  phasetotal?: string;
}
