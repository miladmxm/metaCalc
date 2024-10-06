import cn from 'classnames'

const NumberWithDollar = ({ number }) => {
    return (
        <span dir='ltr' className={
            cn("center",{
                "text-success":number>0,
                "text-error":number<0,
                "text-text":number ===0
            })}>
            {" "}
            {number}
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        </span>
    )
}

export default NumberWithDollar