import { useTranslation } from "react-i18next";
import InputField from "../../components/inputField";
import { useRef, useState } from "react";
import AuthUser from "../../HOC/authUser";
import {
  getcurrentweekHttp,
  updateWeekByIdHttp,
} from "../../services/HTTP";
import sum from "../../utils/sum";
import NumberWithDollar from "../../components/numberWithDollar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import constant from "../../constant";

const Weekly = () => {
  const { t } = useTranslation();
  const [Income, setIncome] = useState([]);
  const resultRef = useRef();
  const queryClinet = useQueryClient();
  const { data } = useQuery({
    queryKey: [constant.CURRENT_WEEK_KEY],
    queryFn: ({ signal }) => getcurrentweekHttp(signal),
  });
  const updateWeekMutation = useMutation({
    mutationFn: (weekData) => updateWeekByIdHttp(weekData, data.week._id),
    mutationKey: [constant.UPDATE_WEEK_KEY],
    onSuccess: () => {
      queryClinet.invalidateQueries([constant.WEEKS_KEY]);
    },
  });
  const dayes = data?.week.dayes || {};
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newDayes = { ...dayes };
    const {
      MondayProfit,
      TuesdayProfit,
      WednesdayProfit,
      ThursdayProfit,
      FridayProfit,
      MondayCommission,
      TuesdayCommission,
      WednesdayCommission,
      ThursdayCommission,
      FridayCommission,
    } = e.target;
    const ProfitFields = [
      MondayProfit,
      TuesdayProfit,
      WednesdayProfit,
      ThursdayProfit,
      FridayProfit,
    ];
    const CommissionFields = [
      MondayCommission,
      TuesdayCommission,
      WednesdayCommission,
      ThursdayCommission,
      FridayCommission,
    ];
    let commissionIncome = 0,
      profitIncome = 0;

    function forEachElement(el, isCommission) {
      const reg = new RegExp(/^[+-]?\d+(\.\d+)?$/);
      const value = el.value;
      if (!reg.test(value)) {
        el.classList.add("warning");
      } else {
        if (isCommission) {
          newDayes[el.dataset.mainName].commission = Number(value);
          commissionIncome = sum(commissionIncome, Number(value));
        } else {
          newDayes[el.dataset.mainName].profit = Number(value);
          profitIncome = sum(profitIncome, Number(value));
        }
      }
    }
    ProfitFields.forEach((e) => forEachElement(e, false));
    CommissionFields.forEach((e) => forEachElement(e, true));
    updateWeekMutation.mutate({ dayes: newDayes });
    setIncome([profitIncome, commissionIncome]);
    resultRef.current.classList.add("active");
  };
  const handleChangeInput = () => {
    if (resultRef.current.classList.contains("active"))
      resultRef.current.classList.remove("active");
  };
  return (
    <div className="h-full space-y-5 overflow-auto scrollbar pr-1 rtl:pl-1">
      <h2>{t("Weekly income")}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex gap-5 max-[335px]:flex-col">
          <div className="max-[335px]:w-full w-1/2 space-y-2 max-[335px]:border-b max-[335px]:border-b-text/50 max-[335px]:pb-8">
            <InputField
              defaultValue={dayes.mon?.profit}
              onInput={handleChangeInput}
              label={t("Mon profit")}
              mainName={"mon"}
              placeholder={t("100.112 OR -100.112")}
              name="MondayProfit"
            />
            <InputField
              defaultValue={dayes.tue?.profit}
              onInput={handleChangeInput}
              label={t("Tue profit")}
              mainName={"tue"}
              placeholder={t("100.112 OR -100.112")}
              name="TuesdayProfit"
            />
            <InputField
              defaultValue={dayes.wed?.profit}
              onInput={handleChangeInput}
              label={t("Wed profit")}
              mainName={"wed"}
              placeholder={t("100.112 OR -100.112")}
              name="WednesdayProfit"
            />
            <InputField
              defaultValue={dayes.thu?.profit}
              onInput={handleChangeInput}
              label={t("Thu profit")}
              placeholder={t("100.112 OR -100.112")}
              mainName={"thu"}
              name="ThursdayProfit"
            />
            <InputField
              defaultValue={dayes.fri?.profit}
              onInput={handleChangeInput}
              label={t("Fri profit")}
              placeholder={t("100.112 OR -100.112")}
              mainName={"fri"}
              name="FridayProfit"
            />
          </div>
          <div className="max-[335px]:w-full w-1/2 space-y-2">
            <InputField
              defaultValue={dayes.mon?.commission}
              onInput={handleChangeInput}
              mainName={"mon"}
              label={t("Mon commission")}
              placeholder={t("100.112 OR -100.112")}
              name="MondayCommission"
            />
            <InputField
              defaultValue={dayes.tue?.commission}
              onInput={handleChangeInput}
              label={t("Tue commission")}
              mainName={"tue"}
              placeholder={t("100.112 OR -100.112")}
              name="TuesdayCommission"
            />
            <InputField
              defaultValue={dayes.wed?.commission}
              onInput={handleChangeInput}
              mainName={"wed"}
              label={t("Wed commission")}
              placeholder={t("100.112 OR -100.112")}
              name="WednesdayCommission"
            />
            <InputField
              defaultValue={dayes.thu?.commission}
              onInput={handleChangeInput}
              mainName={"thu"}
              label={t("Thu commission")}
              placeholder={t("100.112 OR -100.112")}
              name="ThursdayCommission"
            />
            <InputField
              defaultValue={dayes.fri?.commission}
              onInput={handleChangeInput}
              mainName={"fri"}
              label={t("Fri commission")}
              placeholder={t("100.112 OR -100.112")}
              name="FridayCommission"
            />
          </div>
        </div>
        <button
          className="w-full bg-primary/10 center gap-2 rounded-xl p-3 mt-5"
          type="submit"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path>
          </svg>
          <span>{t("Submit")}</span>
        </button>
      </form>
      <div
        ref={resultRef}
        className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4
      [&.active>div]:translate-y-0
      [&.active>div]:opacity-100
      [&.active>div]:scale-100
      [&.active>div]:pointer-events-auto
      text-sm
        "
      >
        <div
          className="sm:w-[calc(50%-0.5rem)] w-5/6 dark:bg-primary/5 
            opacity-0 pointer-events-none transition-all duration-300 translate-y-5 scale-95
          dark:text-text bg-gray-700 text-baseColor p-4 rounded-lg justify-between flex items-center"
        >
          {t("Total profits: ")} <NumberWithDollar number={Income[0]} />
        </div>
        <div
          className="sm:w-[calc(50%-0.5rem)] w-5/6 dark:bg-primary/5 
            opacity-0 pointer-events-none transition-all duration-300 translate-y-5 scale-95
            sm:delay-0
            delay-100
          dark:text-text bg-gray-700 text-baseColor p-4 rounded-lg justify-between flex items-center"
        >
          {t("Total commission: ")} <NumberWithDollar number={Income[1]} />
        </div>
        <div
          className="sm:w-full w-5/6 dark:bg-primary/5 
            opacity-0 pointer-events-none transition-all duration-300 translate-y-5 scale-95
            sm:delay-100
            delay-200
          dark:text-text bg-gray-700 text-baseColor p-4 rounded-lg justify-between flex items-center"
        >
          {t("Total income this week: ")}{" "}
          <NumberWithDollar number={sum(Income[1], Income[0])} />
        </div>
      </div>
    </div>
  );
};

export default AuthUser(Weekly);
