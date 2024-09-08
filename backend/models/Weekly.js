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
    end: Date,
    user: {
      ref: "Users",
      type: Schema.Types.ObjectId,
    },
    dayes: {
      mon: dayesType,
      tue: dayesType,
      wed: dayesType,
      thu: dayesType,
      fri: dayesType,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Weeks", WeeklySchema);
