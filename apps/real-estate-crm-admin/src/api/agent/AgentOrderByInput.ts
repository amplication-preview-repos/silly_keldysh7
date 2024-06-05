import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
