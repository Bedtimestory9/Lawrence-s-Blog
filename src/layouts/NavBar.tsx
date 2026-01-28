import Styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={Styles.box}>
        <div className={Styles.boxText}>Lawrence's Blog</div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.linksDiv}>
          <a className={Styles.link}>home</a>
          <a className={Styles.link}>journey to love</a>
          <a className={Styles.link}>journey to tech</a>
          <a className={Styles.link}>about me</a>
        </div>
      </div>
    </>
  );
}
