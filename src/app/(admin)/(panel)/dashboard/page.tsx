export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Total Leads</h3>
        <p className="text-4xl font-bold mt-3">
          120
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Today's Leads</h3>
        <p className="text-4xl font-bold mt-3">
          18
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Users</h3>
        <p className="text-4xl font-bold mt-3">
          4
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Forms</h3>
        <p className="text-4xl font-bold mt-3">
          6
        </p>
      </div>

    </div>
  );
}