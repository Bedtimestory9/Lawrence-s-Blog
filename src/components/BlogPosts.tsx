import Styles from "./BlogPosts.module.css";
import BreadCrumbs from "./BreadCrumbs";
import type { InferEntrySchema, RenderedContent } from "astro:content";
import { format } from "date-fns";

interface Post<T extends "techPosts" | "lifePosts"> {
  id: string;
  body?: string;
  collection: T;
  data: InferEntrySchema<T>;
  rendered?: RenderedContent;
  filePath?: string;
}

type LifePost = Post<"lifePosts">;
type TechPost = Post<"techPosts">;

function monthFormat(date: Date) {
  return format(date, "LLL");
}

function dayFormat(date: Date) {
  return format(date, "d");
}

export default function BlogPosts({
  url,
  posts,
}: {
  url: URL;
  posts: LifePost[] | TechPost[];
}) {
  function customizedEntries() {
    const dateSortedPosts = posts.sort(
      (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
    );

    return dateSortedPosts.map((post, index) => {
      const currentYear = post.data.date.getFullYear();
      const nextPost = dateSortedPosts[index + 1];
      const nextYear = nextPost?.data.date.getFullYear();

      const isYearDisplayed = !nextPost || currentYear !== nextYear;

      return {
        ...post,
        isYearDisplayed,
      };
    });
  }

  return (
    <div className={Styles.container}>
      <BreadCrumbs url={url} />
      <div>
        {customizedEntries().map((p) => (
          <div className={Styles.entry} key={p.id}>
            <div className={Styles.dateEntry}>
              <div
                className={Styles.year}
                style={!p.isYearDisplayed ? { opacity: 0 } : {}}
              >
                {p.data.date.getFullYear()}
              </div>
              <div className={Styles.date}>
                <div className={Styles.month}>{monthFormat(p.data.date)}</div>
                <div className={Styles.day}>{dayFormat(p.data.date)}</div>
              </div>
            </div>
            <a href={`${url.pathname}/${p.data.slug}`} className={Styles.post}>
              {p.data.title}
            </a>
            {/* dummy div to center the titles */}
            <div className={Styles.dateEntry}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
