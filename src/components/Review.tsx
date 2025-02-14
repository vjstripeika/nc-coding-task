import Image from "next/image";

import Typography from "@/components/Typography";

type ReviewProps = Record<
  "review" | "image" | "author" | "organization",
  string
>;

const Review: React.FC<ReviewProps> = ({
  review,
  author,
  image,
  organization,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Typography className="font-medium">{`"${review}"`}</Typography>
      <div className="flex gap-3">
        <Image
          src={image}
          alt={author}
          width={64}
          height={64}
          className="block flex-0 self-center h-16 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <Typography variant="small" className="font-semibold">
            {author}
          </Typography>
          <Typography
            variant="small"
            className="font-medium text-xs text-muted uppercase pt-1"
          >
            {organization}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Review;
