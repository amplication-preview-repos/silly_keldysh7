import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Agent = {
  appointment?: Appointment | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  property?: Property | null;
  updatedAt: Date;
};
