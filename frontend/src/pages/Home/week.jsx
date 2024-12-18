import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import constant from "../../constant";
import { getWeekByIdHttp } from "../../services/HTTP";
import { useTranslation } from "react-i18next";
import NumberWithDollar from "../../components/numberWithDollar";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import sum from "../../utils/sum";
import BackBtn from "../../components/backBtn";
const Week = () => {
  const { id } = useParams();
  const {
    i18n: { language },
    t,
  } = useTranslation();
  
  const { data, isSuccess } = useQuery({
    queryKey: [constant.WEEK_BY_ID, id],
    queryFn: ({ signal }) => getWeekByIdHttp(id, signal),
  });
  if (!isSuccess) {
    return null;
  }
  let dayes = Object.values(data.week.dayes);
  dayes.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  dayes.forEach((day) => {
    const str = new Date(day.date).toLocaleDateString(language);
    day.strDate = str;
    return day;
  });
  return (
    <div className="space-y-5 h-full w-full max-w-[calc(100svw-24px)] flex flex-col scrollbar pr-1 rtl:pr-0 rtl:pl-1 overflow-x-hidden overflow-y-auto">
      <div className="flex p-1 gap-2 rtl:flex-row-reverse rtl:justify-between items-center">
        <BackBtn />
        <h1 className="flex items-center justify-between flex-auto gap-2">
          <span>
            {t("Week")} (
            <small className="opacity-70 font-light">
              {t("from")} :{" "}
              {new Date(data.week.from).toLocaleDateString(language)}
            </small>
            )
          </span>
          {!data?.week?.currentWeek&&
          <Link
            className="ml-auto h-8 aspect-square ring-2 rounded-lg p-2"
            to={`/${language}/dashboard/week/edit/${id}`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7v2zm10.13-5.01.71-.71a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71 2.12 2.12zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3 2.12 2.12z"></path>
            </svg>
          </Link>
          }
        </h1>
      </div>
      <div className="overflow-x-auto min-h-max max-w-full w-full scrollbar pb-2">
        <table className="w-full min-w-96 overflow-hidden rounded-xl bg-primary/10 table-auto">
          <thead className="bg-slate-900/70">
            <tr>
              <th className="py-2">{t("Date")}</th>
              <th className="py-2">{t("Profit")}</th>
              <th className="py-2">{t("Commission")}</th>
              <th className="py-2">{t("Total income")}</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-primary/10">
            {dayes.map((day) => (
              <tr key={day.date}>
                <td className="py-1 text-center px-1">{day.strDate}</td>
                <td className="py-1 text-center">
                  <NumberWithDollar number={day.profit} />
                </td>
                <td className="py-1 text-center">
                  <NumberWithDollar number={day.commission} />
                </td>
                <td className="py-1 text-center">
                  <NumberWithDollar number={sum(day.commission, day.profit)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResponsiveContainer
        className={"flex-auto max-h-[50svh] center min-h-52"}
        width="100%"
        height=""
      >
        <LineChart
          width="100%"
          height={300}
          data={dayes}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#a1a1a155" />
          <XAxis color="#ff0000" dataKey="strDate" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "rgb(var(--baseColor))" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="commission"
            stroke="#1782c7"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="profit" stroke="#33ee44" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Week;
