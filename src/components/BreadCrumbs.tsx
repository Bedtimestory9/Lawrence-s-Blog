import Styles from "./BreadCrumbs.module.css";

interface BreadCrumbsProps {
  url: URL;
  title?: string;
  path?: string;
}

// This breadcrumb is only designed for 2 layers
export default function BreadCrumbs({ url, title, path }: BreadCrumbsProps) {
  const parentPath = url.pathname.split("/")[1];
  const parentPathName = url.pathname
    .split("/")
    .map((split) => split.split("_").join(" "))[1];

  const childPath = path;
  const childPathName = title;

  return (
    <div className={Styles.container}>
      <div className={Styles.parentText}>
        <a href={`/${parentPath}`} className={Styles.link}>
          {parentPathName || ""}
        </a>
      </div>
      <div className={Styles.rightCaret}>{" > "}</div>
      <div>
        {title && (
          <a href={`/${parentPath}/${childPath}`} className={Styles.link}>
            {childPathName || ""}
          </a>
        )}
      </div>
    </div>
  );
}
