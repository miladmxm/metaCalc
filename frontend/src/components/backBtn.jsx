import { useNavigate } from "react-router-dom"

const BackBtn = () => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(-1)} className="center ring-2 rounded-lg p-2">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
    </button>
  )
}

export default BackBtn