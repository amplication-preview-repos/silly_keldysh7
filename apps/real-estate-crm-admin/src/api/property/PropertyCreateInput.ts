import { AgentCreateNestedManyWithoutPropertiesInput } from "./AgentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agents?: AgentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
