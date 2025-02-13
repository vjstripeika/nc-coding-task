import Typography from "./Typography";

type FeatureProps = Record<"title" | "text" | "subtext", string>;

const Feature: React.FC<FeatureProps> = ({ title, text, subtext }) => (
  <div className="flex flex-col">
    <Typography variant="h3" className="pb-0">
      {title}
    </Typography>
    <Typography variant="p" className="pb-0">
      {text}
    </Typography>
    <Typography variant="small">{subtext}</Typography>
  </div>
);

export default Feature;
