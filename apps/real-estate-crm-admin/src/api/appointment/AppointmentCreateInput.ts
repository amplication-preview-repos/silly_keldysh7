import { AgentCreateNestedManyWithoutAppointmentsInput } from "./AgentCreateNestedManyWithoutAppointmentsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentCreateInput = {
  agents?: AgentCreateNestedManyWithoutAppointmentsInput;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  notes?: string | null;
};
