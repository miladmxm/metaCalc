import { useParams } from "react-router-dom";
import BackBtn from "../../components/backBtn";
import { useTranslation } from "react-i18next";

const AddLastWeeks = () => {
  const {date} = useParams()
  const {t} = useTranslation()
  return (
    <div className="space-y-5 h-full w-full max-w-[calc(100svw-24px)] flex flex-col scrollbar pr-1 rtl:pr-0 rtl:pl-1 overflow-x-hidden overflow-y-auto">
      <div className="flex p-1 gap-2 rtl:flex-row-reverse rtl:justify-between items-center">
        <BackBtn/>
      <h1>
        {t("Week")}
      </h1>
      </div>
      {"date :"+ date}
      
    </div>
  );
};

export default AddLastWeeks;
