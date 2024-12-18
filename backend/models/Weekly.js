import mongoose, { Schema } from "mongoose";

const dayesType = {
  profit: {
    type: Number,
    default: 0,
  },
  commission: {
    type: Number,
    default: 0,
  },
};
const WeeklySchema = Schema(
  {
    from: Date,
    to: Date,
    user: {
      ref: "Users",
      type: Schema.Types.ObjectId,
    },
    dayes: {
      sun: dayesType,
      mon: dayesType,
      tue: dayesType,
      wed: dayesType,
      thu: dayesType,
      fri: dayesType,
      sat: dayesType,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Weeks", WeeklySchema);
