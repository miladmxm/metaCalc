import ajv from "./ajvInstance.js";
const dayTypes = {
  type: "object",
  properties: {
    profit: { type: "number", format: "float" },
    commission: { type: "number", format: "float" },
  },
};
const weekUpdateSchema = {
  type: "object",
  properties: {
    dayes: {
      type: "object",
      properties: {
        mon: dayTypes,
        mon: dayTypes,
        mon: dayTypes,
        mon: dayTypes,
        mon: dayTypes,
      },
    },
  },
  required: ["dayes"],
  additionalProperties: false,
};
export const weekUpdateValidation = ajv.compile(weekUpdateSchema);
