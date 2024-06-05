import { AgentUpdateManyWithoutPropertiesInput } from "./AgentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agents?: AgentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
