"use server";
import { Fragment } from "react";

import Feature from "@/components/Feature";
import Review from "@/components/Review";
import Typography from "@/components/Typography";
import { getFeatures, getReviews } from "@/server/queries";
import { reportError } from "@/utils/reportError";
import tryCatch from "@/utils/tryCatch";

const HomePage: React.FC = async () => {
  const [featuresErr, features] = await tryCatch(getFeatures);
  if (featuresErr) {
    reportError(featuresErr);
  }
  const [reviewsErr, reviews] = await tryCatch(getReviews);
  if (reviewsErr) {
    reportError(reviewsErr);
  }

  return (
    <Fragment>
      <section className="flex flex-col gap-6">
        <Typography variant="h1">
          Hey welcome to NeckCare
          <br /> We make <span className="text-muted">necks</span> great
        </Typography>
        {!!features?.length && (
          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-12">
            {features?.map(({ id, ...feature }) => (
              <Feature {...feature} key={id} />
            ))}
          </div>
        )}
      </section>
      {!!reviews?.length && (
        <section className="flex flex-col md:flex-row gap-6 md:gap-8 mt-16">
          <Typography
            variant="h2"
            className="md:text-7xl md:!leading-snug flex-1"
          >
            {"Let's see what our clients say"}
          </Typography>
          <div className="flex-1 flex-grow flex flex-col gap-8">
            {reviews?.map(({ id, ...review }, idx) => (
              <Fragment key={id}>
                {idx !== 0 && <hr />}
                <Review {...review} />
              </Fragment>
            ))}
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default HomePage;
