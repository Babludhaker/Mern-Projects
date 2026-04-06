function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className="p-6 rounded-2xl shadow-lg w-80 transition-transform hover:scale-105"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 flex items-center justify-center text-2xl rounded-full"
          style={{ backgroundColor: theme.avatarBg }}
        >
          {user.avatar}
        </div>

        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p className="text-sm opacity-70">{user.email}</p>
        </div>
      </div>

      {/* Role + Status */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">{user.role}</span>

        <span
          className="px-2 py-1 text-xs rounded-full"
          style={{ backgroundColor: theme.badgeBg }}
        >
          {user.status}
        </span>
      </div>

      {/* Stats */}
      {user.stats && (
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="bg-white/10 rounded-lg p-2">
              <div className="font-bold text-lg">{value}</div>
              <div className="text-xs capitalize opacity-70">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={actions.login}
          className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          Login
        </button>

        <button
          onClick={actions.logout}
          className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default function ComplexProps() {
  const users = [
    {
      user: {
        id: 1,
        name: "Bablu Dhakad",
        email: "bablu@example.com",
        isLoggedIn: true,
        role: "Admin",
        status: "Active",
        avatar: "👨‍💻",
        stats: {
          posts: 145,
          followers: 2834,
          following: 121,
        },
      },

      theme: {
        isDark: true,
        backgroundColor: "#111827",
        textColor: "#f9fafb",
        avatarBg: "#2563eb",
        badgeBg: "#10b981",
      },

      actions: {
        login: () => console.log("User logged in"),
        logout: () => console.log("User logged out"),
      },
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <h3 className="text-2xl font-bold text-white mb-6">User Profile Card</h3>

      <div className="flex gap-6 flex-wrap justify-center">
        {users.map((userdata, index) => (
          <UserProfileCard key={index} {...userdata} />
        ))}
      </div>
    </div>
  );
}
