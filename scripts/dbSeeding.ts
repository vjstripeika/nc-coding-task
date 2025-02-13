import { db } from "@/server/db";
import { featuresTable, reviewsTable } from "@/server/schema";

const seedFeaturesTable = () =>
  db.insert(featuresTable).values([
    {
      title: "Range of Motion",
      text: "No goniometer",
      subtext: "Available since 2022",
    },
    {
      title: "Joint Position Error",
      text: "Goodbye laser",
      subtext: "Available since 2023",
    },
    {
      title: "Butterfly Test",
      text: "Based on over 20+ years research",
      subtext: "Available since 2024",
    },
  ]);

const reviews = [
  `Our therapists are using the data provided by NeckCare™ to
develop more individualized plans of care for their patients with
neck pain. Patients love that the NeckCare assessments provide
them with unique data and visual figures to help them understand
their performance.`,
  `NeckCare™ has enhanced our ability to assess the proprioceptive
system in the neck more comprehensively. The device and software
are user-friendly, delivering invaluable clinical insights, and
the customer service is outstanding. A must-have for healthcare
providers looking to enhance patient outcomes!`,
] as const;

const seedReviewsTable = () =>
  db.insert(reviewsTable).values([
    {
      review: reviews[0],
      author: "Marlon Wong, PT, PhD",
      organization: "University of Miami",
      image: "/images/marlon-wong.webp",
    },
    {
      review: reviews[1],
      author: "Cameron Bearder, DC, FABVR-c, FACFN-c",
      organization: "Owner at Keystone Spine Clinic",
      image: "/images/cameron-bearder.webp",
    },
  ]);

const seedDatabase = async () => {
  const resFeatures = await seedFeaturesTable();
  console.log("Features Table:", resFeatures);

  const resReviews = await seedReviewsTable();
  console.log("Reviews Table:", resReviews);
};

seedDatabase();
