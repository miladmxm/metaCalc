import Indexes from "../models/Indexes.js";
export const addIndex = async (req, res) => {
  try {
    const {
      name,
      serviceCharge,
      lockUpDeposit,
      serviceChargeMultipliedBy,
    } = req.body;
    if(!name||!serviceCharge||!lockUpDeposit||!serviceChargeMultipliedBy){
        return res.status(402).json({})
    }
    const newIndex = await Indexes.create(req.body)
    res.status(201).json({index:newIndex})
  } catch (err) {
    console.log(err);
  }
};
