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
        sun: dayTypes,
        mon: dayTypes,
        tue: dayTypes,
        wed: dayTypes,
        thu: dayTypes,
        fri: dayTypes,
        sat: dayTypes,
      },
    },
  },
  required: ["dayes"],
  additionalProperties: false,
};
export const weekUpdateValidation = ajv.compile(weekUpdateSchema);
