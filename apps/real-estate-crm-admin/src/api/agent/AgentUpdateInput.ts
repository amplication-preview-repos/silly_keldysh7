import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
