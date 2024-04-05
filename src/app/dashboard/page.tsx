import { getServerSession } from "next-auth";

export default async function AdminDashboard() {
  const session  = await getServerSession();
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return (
    <div className="flex p-10" style={{ minHeight: "100vh" }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        assumenda quasi quisquam nostrum iusto velit quis debitis, illum
        repellendus nemo, cum nesciunt, temporibus laudantium sint animi
        deleniti esse pariatur dolores!
      </p>
    </div>
  );
}
