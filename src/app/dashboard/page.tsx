import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function AdminDashboard() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex p-10" style={{ minHeight: "100vh" }}>
      <p>
        {session.user?.email}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        assumenda quasi quisquam nostrum iusto velit quis debitis, illum
        repellendus nemo, cum nesciunt, temporibus laudantium sint animi
        deleniti esse pariatur dolores!
      </p>
    </div>
  );
}
