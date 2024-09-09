import React, { useContext, useEffect, useState } from 'react'
import AuthUser from '../../HOC/authUser'
import { getAllWeek, logoutUser } from '../../services/HTTP'
import { mainContext } from '../../context/main'
import { useTranslation } from 'react-i18next'
import sum from '../../utils/sum'
import NumberWithDollar from '../../components/numberWithDollar'
import { Link } from 'react-router-dom'


const UserDashboard = () => {
  const { clearUser, setHttpLoading } = useContext(mainContext)
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [weeks, setWeeks] = useState([])
  const logout = async () => {
    const data = await logoutUser()
    if (data) {
      console.log(data)
      clearUser()
    }
  }
  useEffect(() => {
    const init = async () => {
      setHttpLoading(true)
      const all = await getAllWeek()
      setHttpLoading(false)
      setWeeks(all.weeks)
    }
    init()
    return () => [
      setHttpLoading(false)
    ]
  }, [])
  return (
    <div className="h-full max-h-[75svh]">
      <button className='ml-0 mr-auto block my-2 bg-error/10 w-fit px-4 rounded-lg py-2 ' onClick={logout}>
        {t("logout")}
      </button>
      <div className='max-h-full pr-1 rtl:pl-1 overflow-auto scrollbar space-y-5'>
        {weeks.length>0&&
        <>
          <h3 className='center text-2xl font-bold'>
            {t("No week has been registered for a week!")}
          </h3>
          <Link to={"../weekly"}></Link>
        </>
        }
        {weeks.map(week => (
          <div className='flex gap-3 flex-col cursor-pointer' key={week._id}>
            <div className='dark:bg-primary/10 bg-gray-700 text-baseColor dark:text-text space-y-2 p-3 rounded-lg gap-2'>
              <div className='flex justify-between border-b border-text/50 pb-4'>
                <span>
                  {t("From")}: {" "}
                  {new Date(week.from).toLocaleDateString(language)}
                </span>
                <span>
                  {t("To")}: {" "}
                  {new Date(week.to).toLocaleDateString(language)}
                </span>
              </div>
              <div className='flex justify-between items-center [&_small]:flex [&_small]:items-center [&_small]:gap-1'>
                <div className='justify-center flex-col flex gap-3'>
                  <small>
                    {t("Commission")}:{" "}
                    <NumberWithDollar number={week.commission} />
                  </small>
                  <small>
                    {t("Profit")}:{" "}
                    <NumberWithDollar number={week.profit} />
                  </small>
                </div>
                <small className='font-bold'>
                  {t("Total income")}:
                  <NumberWithDollar number={sum(week.profit, week.commission)} />
                </small>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default AuthUser(UserDashboard)
