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
            journey to love
          </a>
          <a className={Styles.link} href="/tech_posts">
            journey to tech
          </a>
          <a className={Styles.link} href="/about_me">
            about me
          </a>
        </div>
      </div>
    </div>
  );
}
