function calculateMeta(index, capitalInput) {
  return new Promise((resolve, reject) => {
    try {
      const capital = Number(capitalInput);
      const toFixed4Capital = Math.floor(capital * 1000) / 1000;
      const lot =
        Math.floor(
          (toFixed4Capital / (index.serviceCharge + index.lockUpDeposit)) * 1000
        ) / 1000;
      const serviceFee = index.serviceCharge * lot;
      const profit = serviceFee * index.serviceChargeMultipliedBy;
      const mainProfit = Math.floor((profit - serviceFee) * 1000) / 1000;

      resolve({ lot, profit: mainProfit });
    } catch (err) {
      reject(err);
    }
  });
}
export default calculateMeta