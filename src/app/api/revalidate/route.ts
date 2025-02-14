import { revalidatePath } from "next/cache";

// TODO: this route should be protected
export async function GET() {
  revalidatePath("/");
  return Response.json(
    { msg: "ok" },
    {
      status: 200,
    }
  );
}
