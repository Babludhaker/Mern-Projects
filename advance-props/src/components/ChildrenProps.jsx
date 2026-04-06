function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  };

  return (
    <div
      className={`border-l-4 p-6 rounded-lg shadow-md ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>
      )}

      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}
function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Children Props</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, beatae.
      </p>
      <div className="space-y-6">
        <div>
          <h3>Card Component with children</h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name:</strong> Bablu Dhakad
              </p>
              <p className="mb-2">
                <strong>Email:</strong> babludhaker328@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Developer
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;
