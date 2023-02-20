import DOMPurify from "dompurify";
import parse from "html-react-parser";

export default function ShowInfo(props) {
  const { score, show } = props.data;
  const { name, summary } = show;

  const sanitizedSummary = DOMPurify.sanitize(summary);
  const summaryElement = parse(sanitizedSummary);

  return (
    <article>
      <h2>{name}</h2>
      {summaryElement}
    </article>
  );
}
