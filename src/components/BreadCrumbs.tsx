import Styles from "./BreadCrumbs.module.css";

// This breadcrumb is only designed for 2 layers
export default function BreadCrumbs({ path }: { path: URL }) {
  const pathName = path.pathname
    .split("/")
    .map((split) => split.split("_").join(" "));

  const parentPath = path.pathname.split("/")[1];
  const childPath = path.pathname.split("/")[2];

  return (
    <div className={Styles.text}>
      <a href={`/${parentPath}`} className={Styles.link}>
        {pathName[1]}
      </a>
      {" > "}
      <a href={`/${parentPath}/${childPath}`} className={Styles.link}>
        {pathName[2] || ""}
      </a>
    </div>
  );
}
