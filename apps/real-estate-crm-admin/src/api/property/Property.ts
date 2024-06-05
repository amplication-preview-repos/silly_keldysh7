import { Agent } from "../agent/Agent";

export type Property = {
  address: string | null;
  agents?: Array<Agent>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
