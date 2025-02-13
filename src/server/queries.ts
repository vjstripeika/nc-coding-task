import { db } from "./db";
import { featuresTable, reviewsTable } from "./schema";

type GetFeaturesQueryParams = { limit?: number };
type GetFeaturesQueryResult = {
  id: number;
  title: string;
  text: string;
  subtext: string;
}[];

export const getFeatures = async (
  params?: GetFeaturesQueryParams
): Promise<GetFeaturesQueryResult> => {
  const { limit = 3 } = params ?? {};

  const result = await db
    .select({
      id: featuresTable.id,
      title: featuresTable.title,
      text: featuresTable.text,
      subtext: featuresTable.subtext,
    })
    .from(featuresTable)
    .limit(limit);

  return result;
};

type GetReviewsQueryParams = { limit?: number };
type GetReviewsQueryResult = {
  id: number;
  review: string;
  author: string;
  organization: string;
  image: string;
}[];

export const getReviews = async (
  params?: GetReviewsQueryParams
): Promise<GetReviewsQueryResult> => {
  const { limit = 2 } = params ?? {};

  const result = await db
    .select({
      id: reviewsTable.id,
      review: reviewsTable.review,
      author: reviewsTable.author,
      organization: reviewsTable.organization,
      image: reviewsTable.image,
    })
    .from(reviewsTable)
    .limit(limit);

  return result;
};
