import Styles from "./NavBar.module.css";

export default function NavBar({ path }: { path: URL }) {
  const isHome = path.pathname === "/";

  return (
    <>
      <div className={isHome ? Styles.homeBox : Styles.box}>
        <div className={isHome ? Styles.homeBoxText : Styles.boxText}>
          Lawrence's Blog
        </div>
      </div>
      <div className={isHome ? Styles.homeContainer : Styles.container}>
        <div className={Styles.linksDiv}>
          <a className={Styles.link} href="/">
            home
          </a>
          <a className={Styles.link} href="">
            journey to love
          </a>
          <a className={Styles.link} href="/tech_posts">
            journey to tech
          </a>
          <a className={Styles.link} href="">
            about me
          </a>
        </div>
      </div>
    </>
  );
}
