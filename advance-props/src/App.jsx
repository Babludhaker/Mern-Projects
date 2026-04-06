import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";
import "./index.css";

function Navigation({ isDark }) {
  const sections = [
    { id: "Basic", label: "Basic-Props", icon: "🧱" },
    { id: "Children", label: "Children-Props", icon: "🔗" },
    { id: "Complex", label: "Complex-Props", icon: "⚙️" },
    { id: "Ref", label: "Ref-Props", icon: "📌" },
    { id: "Theme", label: "Theme-Props", icon: "🎨" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-amber-200`}>
      <div>
        <div>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 mx-2 my-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-sky-700 cursor-pointer`}
            >
              <span>
                {section.icon} {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent({ isDark }) {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation isDark={isDark} />

      <div className={`container mx-auto px-4 py-8`}>
        <header
          className={`text-center mb-12 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A Comprehensive guide to understanding props in React
          </p>
        </header>

        <div className="space-y-8">
          <div className="scroll-mt-200" id="basic">
            <BasicProps />
          </div>
          <div className="scroll-mt-200" id="children">
            <ChildrenProps />
          </div>
          <div className="scroll-mt-200" id="complex">
            <ComplexProps />
          </div>
          <div className="scroll-mt-200" id="ref">
            <RefProps />
          </div>
          <div className="scroll-mt-200" id="theme">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const isDark = true;
  return (
    <>
      {/* <BasicProps />
      <ChildrenProps />
      <ComplexProps />
      <RefProps />
      <ThemeToggler /> */}
      <AppContent isDark={isDark} />
    </>
  );
}
