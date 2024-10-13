import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import cn from "classnames";

import AuthUser from "../../HOC/authUser";
import { getAllWeekHttp } from "../../services/HTTP";
import sum from "../../utils/sum";
import NumberWithDollar from "../../components/numberWithDollar";
import useSignOut from "../../hooks/useSignOut";
import constant from "../../constant";
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSettingContext } from "../../context/setting";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const UserDashboard = () => {
  const singOutMutation = useSignOut();
  const { isDarkTheme } = useSettingContext();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { data } = useQuery({
    queryKey: [constant.WEEKS_KEY],
    queryFn: ({ signal }) => getAllWeekHttp(signal),
  });

  const chartData = [];
  let sumOfAllWeeks = 0;
  if (data?.weeks) {
    for (let i = data.weeks.length - 1; i >= 0; i--) {
      const week = data.weeks[i];
      chartData.push(...Object.values(week.dayes));
    }
    chartData.forEach((day) => {
      const str = new Date(day.date).toLocaleDateString(language);
      day.strDate = str;
      sumOfAllWeeks = sum(sumOfAllWeeks, sum(day.commission, day.profit));
      return day;
    });
  }
  
  const [startDate, setStartDate] = useState(new Date());
  const logout = async () => {
    singOutMutation();
  };

  const handleSelectedDate=(date)=>{
    console.log(date)
    setStartDate(date)
  }
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <button
          className="ml-0 mr-auto center gap-1 bg-error/10 w-fit px-4 rounded-lg py-2 "
          onClick={logout}
        >
          {t("Logout")}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160 80-80-80-80m-192 80h256"
            ></path>
          </svg>
        </button>

        <DatePicker
          customInput={
            <button
              className="p-2 bg-success/30 rounded-lg text-sm center gap-1"
            >
              <span>Add previous weeks</span>
              <svg
                className="text-lg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </button>
          }
          selected={startDate}
          // selectsRange={true}
          onChange={handleSelectedDate}
          dateFormat="I/R"
          locale="en-GB"
          // showWeekNumbers
          // showMonthYearDropdown
          excludeDateIntervals={data?.weeks?.map(d=>({start:new Date(d.from).setUTCDate(new Date(d.from).getUTCDate()-1),end:new Date(d.to).setUTCDate(new Date(d.to).getUTCDate() - 1)}))}
          withPortal
          portalId="root-portal"
          showWeekPicker
          showWeekNumbers
        />
      </div>

      <div className="max-h-full pr-1 rtl:pl-1 overflow-auto scrollbar space-y-5">
        <>
          {data?.weeks?.length === 0 ? (
            <>
              <h3 className="center text-2xl font-bold">
                {t("No weekly reports have been recorded!")}
              </h3>
              <Link
                className="px-5 block py-2 rounded-lg bg-primary/70 w-fit mx-auto"
                to={"../weekly"}
              >
                {t("Write a report")}
              </Link>
            </>
          ) : (
            <div className="w-full overflow-hidden" dir="ltr">
              <ResponsiveContainer
                width="100%"
                className={"h-[40svh]"}
                height=""
              >
                <BarChart
                  width="100%"
                  height={300}
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: -20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="5 5" stroke="#a1a1a155" />
                  <XAxis dataKey="strDate" />
                  <YAxis />
                  <Tooltip
                    cursor={{ fill: "#1782c71a" }}
                    contentStyle={{ backgroundColor: "rgb(var(--baseColor))" }}
                  />
                  <Legend
                    verticalAlign="top"
                    wrapperStyle={{ lineHeight: "40px" }}
                  />
                  <ReferenceLine y={0} stroke={isDarkTheme ? "#fff" : "#000"} />
                  <Brush
                    dataKey="strDate"
                    height={30}
                    stroke={isDarkTheme ? "#fafafa" : "#0f172a"}
                    fill="#1782c71a"
                  />
                  <Bar dataKey="commission" fill="#1782c7" />
                  <Bar dataKey="profit" fill="#33ee44" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="flex justify-between items-center px-4 bg-primary/70 py-1 dark:bg-gray-800 dark:text-text rounded border-b border-text/50 dark:border-text/10">
            {t("The sum of all weeks")}:
            <NumberWithDollar number={sumOfAllWeeks} />
          </div>
          {data?.weeks?.map((week) => (
            <Link
              to={`week/${week._id}`}
              className={cn("flex gap-3 flex-col cursor-pointer", {
                "scale-95": !week.currentWeek,
              })}
              key={week._id}
            >
              <div
                className={cn(
                  "text-baseColor dark:text-text space-y-2 p-3 rounded-lg gap-2",
                  {
                    "dark:bg-primary/10 bg-gray-700": week.currentWeek,
                    "dark:bg-gray-700 bg-gray-500": !week.currentWeek,
                  }
                )}
              >
                <div className="flex justify-between border-b border-text/50 pb-4">
                  <span>
                    {t("From")}:{" "}
                    {new Date(week.from).toLocaleDateString(language)}
                  </span>
                  <span>
                    {t("To")}: {new Date(week.to).toLocaleDateString(language)}
                  </span>
                </div>
                <div className="flex justify-between items-center [&_small]:flex [&_small]:items-center [&_small]:gap-1">
                  <div className="justify-center flex-col flex gap-3">
                    <small>
                      {t("Commission")}:{" "}
                      <NumberWithDollar number={week.commission} />
                    </small>
                    <small>
                      {t("Profit")}: <NumberWithDollar number={week.profit} />
                    </small>
                  </div>
                  <small className="font-bold">
                    {t("Total income")}:
                    <NumberWithDollar
                      number={sum(week.profit, week.commission)}
                    />
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </>
      </div>
    </div>
  );
};

export default AuthUser(UserDashboard);
