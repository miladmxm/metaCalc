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

const UserDashboard = () => {
  const singOutMutation = useSignOut();
  const { data } = useQuery({
    queryKey: [constant.WEEKS_KEY],
    queryFn: ({ signal }) => getAllWeekHttp(signal),
  });
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const logout = async () => {
    singOutMutation();
  };
  return (
    <div className="h-full flex flex-col gap-3">
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
      <div className="max-h-full pr-1 rtl:pl-1 overflow-auto scrollbar space-y-5">
        {data?.weeks?.length === 0 && (
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
        )}
        {data?.weeks?.map((week) => (
          <Link to={`week/${week._id}`}
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
      </div>
    </div>
  );
};

export default AuthUser(UserDashboard);
