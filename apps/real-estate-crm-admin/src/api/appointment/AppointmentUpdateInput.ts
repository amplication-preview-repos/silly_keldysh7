import { AgentUpdateManyWithoutAppointmentsInput } from "./AgentUpdateManyWithoutAppointmentsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  agents?: AgentUpdateManyWithoutAppointmentsInput;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  notes?: string | null;
};
