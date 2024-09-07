import { useRef } from "react";

const InputField = ({ label, placeholder, name, onInput, icon = true }) => {
  const fieldsetRef = useRef();
  return (
    <fieldset
      ref={fieldsetRef}
      className={`max-w-full [&:has(input.warning)>legend]:text-warning [&:has(input.warning)]:text-warning [&:has(input.warning)]:border-warning [&:has(input.error)>legend]:text-error [&:has(input.error)]:text-error [&:has(input.error)]:border-error text-sm md:text-lg border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
    >
      <legend className="sm:mx-3 px-1 text-sm dark:text-text/70">
        {label}
      </legend>
      {icon&&
      <div className="center ">
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
      </div>
      
      }
      <input
        onInput={(e) => {
          onInput(e);
          const reg = new RegExp(/^[+-]?\d+(\.\d+)?$/);
          const value = e.target.value.trim();
          if (value === "") {
            e.target.classList.add("warning");
          } else if (!reg.test(value)) {
            e.target.classList.add("error");
          } else {
            e.target.classList.remove("error");
            e.target.classList.remove("warning");
          }
        }}
        step="0.001"
        name={name}
        placeholder={placeholder}
        type="number"
        className="border-none w-[90%] max-w-[95%] flex-auto !bg-transparent outline-none placeholder:text-sm "
      />
    </fieldset>
  );
};

export default InputField;
