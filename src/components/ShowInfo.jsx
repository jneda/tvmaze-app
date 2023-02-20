import DOMPurify from "dompurify";
import parse from "html-react-parser";

export default function ShowInfo(props) {
  const { score, show } = props.data;
  const { name, summary, image } = show;
  const imageUrl = image ? image.original : undefined;

  const sanitizedSummary = DOMPurify.sanitize(summary);
  const summaryElement = parse(sanitizedSummary);

  return (
    <article>
      {imageUrl && <img src={imageUrl} alt={name} />}
      <h2>{name}</h2>
      {summaryElement}
    </article>
  );
}
