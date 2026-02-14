import Styles from "./NavBar.module.css";

export default function NavBar({ url }: { url: URL }) {
  const isHome = url.pathname === "/";

  return (
    <div className={Styles.whole}>
      <div className={`${Styles.box} ${isHome && Styles.homeBox}`}>
        <div className={`${isHome && Styles.homeBoxText} ${Styles.boxText}`}>
          Lawrence's Blog
        </div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.linksDiv}>
          <a className={Styles.link} href="/">
            home
          </a>
          <a className={Styles.link} href="/life_posts">
            <span>journey to </span>love
          </a>
          <a className={Styles.link} href="/tech_posts">
            <span>journey to </span>tech
          </a>
          <a className={Styles.link} href="/about_me">
            about<span> me</span>
          </a>
        </div>
      </div>
    </div>
  );
}
