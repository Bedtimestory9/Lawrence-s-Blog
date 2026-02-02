import Styles from "./BlogPosts.module.css";
import BreadCrumbs from "./BreadCrumbs";

function TestHTML() {
  return [...Array(15)].map((_, i) => (
    <div className={Styles.entry} key={i}>
      <div className={Styles.yearDate}>
        <div className={Styles.year}>2026</div>
        <div className={Styles.date}>Oct 6</div>
      </div>
      <a href="/tech_posts/why_I_still_love_fish_shell" className={Styles.post}>
        Why I still love Fish shell
      </a>
      <div className={Styles.yearDate}></div>
    </div>
  ));
}

export default function BlogPosts({ path }: { path: URL }) {
  return (
    <>
      <BreadCrumbs path={path} />
      <div className={Styles.postBlock}>{TestHTML()}</div>
    </>
  );
}
