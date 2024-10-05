import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
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
  dayes.forEach((day)=>{
    const str = new Date(day.date).toLocaleDateString(language)
    day.strDate = str
    return day
  })
  return (
    <div className="space-y-5 h-full w-full max-w-[calc(100svw-24px)] flex flex-col">
      <h1>
        {t("Week")} (
        <small className="opacity-70 font-light">
          {t("from")} : {new Date(data.week.from).toLocaleDateString(language)}
        </small>
        )
      </h1>
      <div className="overflow-x-auto max-w-full w-full scrollbar pb-2">
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
        className={"flex-auto max-h-[50svh] center"}
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
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#a1a1a155" />
          <XAxis color="#ff0000" dataKey="strDate" />
          <YAxis />
          <Tooltip/>
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
