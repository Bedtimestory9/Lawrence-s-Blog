import Styles from "./PostFooter.module.css";
import { format } from "date-fns";

function formatYMD(date: Date) {
  return format(date, "PPP");
}

export default function PostFooter({
  author,
  date,
}: {
  author: string;
  date: Date;
}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.authorDiv}>
        <span>{author}</span>
        <span>{formatYMD(date)}</span>
      </div>
    </div>
  );
}
