import { useRef, forwardRef } from "react";

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
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Ref Props</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        cumque?
      </p>
      <div>
        <div>
          <h3>Try it out</h3>
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
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow-md 
               hover:bg-blue-700 hover:shadow-lg 
               active:scale-95 transition-all duration-200"
            >
              Focus First Input
            </button>
            <button
              onClick={focusSecondInput}
              className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium shadow-md 
               hover:bg-green-700 hover:shadow-lg 
               active:scale-95 transition-all duration-200"
            >
              Focus Second Input
            </button>
            <button
              onClick={clearInput}
              className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium shadow-md 
               hover:bg-green-700 hover:shadow-lg 
               active:scale-95 transition-all duration-200"
            >
              Focus clear Input
            </button>

            <button
              onClick={getInputValue}
              className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium shadow-md 
               hover:bg-green-700 hover:shadow-lg 
               active:scale-95 transition-all duration-200"
            >
              Focus getInputValue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
