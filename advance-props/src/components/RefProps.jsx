import { useRef, forwardRef } from "react";
import { useTheme } from "./ThemeToggler";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor="" className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type="text"
        ref={ref}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});
function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);
  const { isDark } = useTheme();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section
      className={`p-8 rounded-xl shadow-lg transition-all duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-2">Ref Props</h2>

      <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Try it out</h3>

        <CustomInput
          ref={inputRef}
          label="First Input with ref"
          placeholder="Type Something"
        />

        <CustomInput
          ref={secondInputRef}
          label="Second Input with ref"
          placeholder="Type Something else..."
        />

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={focusInput}
            className={`px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200
              ${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white active:scale-95`}
          >
            Focus First Input
          </button>

          <button
            onClick={focusSecondInput}
            className={`px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200
              ${
                isDark
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-green-600 hover:bg-green-700"
              } text-white active:scale-95`}
          >
            Focus Second Input
          </button>

          <button
            onClick={clearInput}
            className={`px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200
              ${
                isDark
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-yellow-600 hover:bg-yellow-700"
              } text-white active:scale-95`}
          >
            Clear Input
          </button>

          <button
            onClick={getInputValue}
            className={`px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200
              ${
                isDark
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white active:scale-95`}
          >
            Get Input Value
          </button>
        </div>
      </div>
    </section>
  );
}
export default RefProps;
