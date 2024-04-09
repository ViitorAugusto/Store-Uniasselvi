import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth as authOptions } from "../../libs/auth-config";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex p-10" style={{ minHeight: "100vh" }}>
      <p>
        <span className="bg-green-400">{session.user?.email}</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        assumenda quasi quisquam nostrum iusto velit quis debitis, illum
        repellendus nemo, cum nesciunt, temporibus laudantium sint animi
        deleniti esse pariatur dolores!
      </p>
    </div>
  );
}
