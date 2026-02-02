import Styles from "./BlogPosts.module.css";
import BreadCrumbs from "./BreadCrumbs";
import type { InferEntrySchema, RenderedContent } from "astro:content";

interface TechPosts {
  id: string;
  body?: string;
  collection: "techPosts";
  data: InferEntrySchema<"techPosts">;
  rendered?: RenderedContent;
  filePath?: string;
}

export default function BlogPosts({
  url,
  techPosts,
}: {
  url: URL;
  techPosts: TechPosts[];
}) {
  const dateSortedPosts = techPosts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return (
    <>
      <BreadCrumbs url={url} />
      {dateSortedPosts.map((p) => (
        <div className={Styles.entry} key={p.id}>
          <div className={Styles.yearDate}>
            <div className={Styles.year}>{p.data.date.getFullYear()}</div>
            <div className={Styles.date}>{p.data.date.getDate()}</div>
          </div>
          <a href={`/tech_posts/${p.data.slug}`} className={Styles.post}>
            {p.data.title}
          </a>
          <div className={Styles.yearDate}></div>
        </div>
      ))}
    </>
  );
}
