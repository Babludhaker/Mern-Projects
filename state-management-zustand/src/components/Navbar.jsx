import { useAppStore } from "../store/appStore";
export default function Navbar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const login = useAppStore((state) => state.login);
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  return (
    <nav>
      <span>{user}</span>

      <button onClick={toggleTheme}>Change Theme : {theme}</button>
      <div>
        {user == null ? <button>Login</button> : <button>Logout</button>}
      </div>
    </nav>
  );
}
