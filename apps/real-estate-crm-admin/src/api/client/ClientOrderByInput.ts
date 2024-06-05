import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
