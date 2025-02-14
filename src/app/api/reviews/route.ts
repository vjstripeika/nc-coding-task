import { getReviews } from "@/server/queries";
import tryCatch from "@/utils/tryCatch";
import { getLimit } from "@/utils/urlParam";
import { NextRequest } from "next/server";
import { reportError } from "@/utils/reportError";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const limit = getLimit(searchParams);

  const [err, reviews] = await tryCatch(() => getReviews({ limit }));
  if (err) {
    reportError(err);
    return new Response("Unable to fetch data", {
      status: 503,
    });
  }

  return Response.json(reviews, {
    status: 200,
  });
}
