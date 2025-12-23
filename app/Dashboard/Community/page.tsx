export default async function Community() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

     return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Community info</h1>

      <p className="text-gray-400">
        Manage your account and application settings here.
      </p>

    </div>
  );
}
