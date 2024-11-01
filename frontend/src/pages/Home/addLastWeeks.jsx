import { useNavigate, useParams } from "react-router-dom";
import BackBtn from "../../components/backBtn";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import constant from "../../constant";
import { addLastWeekHttp, getWeekIsExistHttp } from "../../services/HTTP";
import { useEffect } from "react";
import InputField from "../../components/inputField";

const AddLastWeeks = () => {
  const { date } = useParams();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isError } = useQuery({
    queryKey: [constant.WEEK_IS_EXIST, date],
    queryFn: ({ signal }) => getWeekIsExistHttp(date, signal),
    retry: false,
  });
  if (isError) {
    navigate(`/${language}/dashboard`, { replace: true });
  }
  useEffect(() => {
    if (data?.message === "week is exist") {
      navigate(`/${language}/dashboard`, { replace: true });
    }
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: (formDataJson) => addLastWeekHttp(date, formDataJson),
    mutationKey: [constant.ADD_LAST_EXIST],
    onSuccess: () => {
      queryClient.invalidateQueries([constant.WEEKS_KEY]).then(() => {
        navigate("/dashboard", { replace: true });
      });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const dayes = {};
    Object.values(e.target)
      .filter(
        (item) =>
          item.name?.includes("profit") || item.name?.includes("commission")
      )
      .forEach((item) => {
        dayes[item.name.split("-")[0]] = {
          ...dayes[item.name.split("-")[0]],
          [item.name.split("-")[1]]: Number(item.value),
        };
      });

    mutate({ dayes });
  };
  return (
    <div className="space-y-5 h-full w-full max-w-[calc(100svw-24px)] flex flex-col scrollbar pr-1 rtl:pr-0 rtl:pl-1 overflow-x-hidden overflow-y-auto">
      <div className="flex p-1 gap-2 rtl:flex-row-reverse rtl:justify-between items-center">
        <BackBtn />
        <h1 className="flex sm:items-center gap-2 flex-col sm:flex-row ">
          {t("Week")}:
          <div className="flex">
            <small className="font-normal">
              {t("from")}{" "}
              {new Date(data?.start?.replaceAll("Z", "")).toLocaleDateString(
                language
              )}
            </small>
            <small className="font-normal">
              {t("To")}{" "}
              {new Date(data?.end?.replaceAll("Z", "")).toLocaleDateString(
                language
              )}
            </small>
          </div>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <table className="w-full">
          <thead className="sticky top-1 z-40">
            <tr>
              <th className="bg-primary/10 backdrop-blur-sm py-2 rtl:rounded-r-lg rtl:rounded-l-none rounded-l-lg">
                {t("Profit")}
              </th>
              <th className="bg-primary/10 backdrop-blur-sm py-2 rtl:rounded-l-lg rtl:rounded-r-none rounded-r-lg">
                {t("Commission")}
              </th>
            </tr>
          </thead>
          <tbody className="[&_td]:p-1 md:[&_td]:p-2">
            <tr>
              <td>
                <InputField
                  label={t("Sun")}
                  placeholder={t("100.112 OR -100.112")}
                  name="sun-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Sun")}
                  placeholder={t("100.112 OR -100.112")}
                  name="sun-commission"
                  mainName="commission"
                />
              </td>
            </tr>
            <tr>
              <td>
                <InputField
                  label={t("Mon")}
                  placeholder={t("100.112 OR -100.112")}
                  name="mon-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Mon")}
                  placeholder={t("100.112 OR -100.112")}
                  name="mon-commission"
                  mainName="commission"
                />
              </td>
            </tr>
            <tr>
              <td>
                <InputField
                  label={t("Tue")}
                  placeholder={t("100.112 OR -100.112")}
                  name="tue-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Tue")}
                  placeholder={t("100.112 OR -100.112")}
                  name="tue-commission"
                  mainName="commission"
                />
              </td>
            </tr>
            <tr>
              <td>
                <InputField
                  label={t("Wed")}
                  placeholder={t("100.112 OR -100.112")}
                  name="wed-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Wed")}
                  placeholder={t("100.112 OR -100.112")}
                  name="wed-commission"
                  mainName="commission"
                />
              </td>
            </tr>
            <tr>
              <td>
                <InputField
                  label={t("Thu")}
                  placeholder={t("100.112 OR -100.112")}
                  name="thu-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Thu")}
                  placeholder={t("100.112 OR -100.112")}
                  name="thu-commission"
                  mainName="commission"
                />
              </td>
            </tr>
            <tr>
              <td>
                <InputField
                  label={t("Fri")}
                  placeholder={t("100.112 OR -100.112")}
                  name="fri-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Fri")}
                  placeholder={t("100.112 OR -100.112")}
                  name="fri-commission"
                  mainName="commission"
                />
              </td>
            </tr>
            <tr>
              <td>
                <InputField
                  label={t("Sat")}
                  placeholder={t("100.112 OR -100.112")}
                  name="sat-profit"
                  mainName="profit"
                />
              </td>
              <td>
                <InputField
                  label={t("Sat")}
                  placeholder={t("100.112 OR -100.112")}
                  name="sat-commission"
                  mainName="commission"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="sticky bottom-0 z-50 backdrop-blur-sm rounded-xl">
          <button
            disabled={isPending}
            className="w-full disabled:opacity-50 bg-primary/10 center gap-2 rounded-xl p-3 mt-5"
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
            <span>{t("Save this week")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLastWeeks;
