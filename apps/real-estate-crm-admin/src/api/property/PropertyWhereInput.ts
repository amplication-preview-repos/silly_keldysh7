import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agents?: AgentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  typeField?: "Option1";
};
