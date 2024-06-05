import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";

export type Appointment = {
  agents?: Array<Agent>;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  notes: string | null;
  updatedAt: Date;
};
