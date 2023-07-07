import { IPhaseItem } from "../../store/phase/interfaces/phase.interface";

export interface IPhaseItemProps {
  data: IPhaseItem[];
  phasesubtotal: string;
  phasediscount?: string;
  phasefee?: string;
  phasetotal?: string;
}
