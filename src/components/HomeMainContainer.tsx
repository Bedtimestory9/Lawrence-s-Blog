import Styles from "./HomeMainContainer.module.css";
import ElixirSvg from "./svg/ElixirSvg";
import JSSvg from "./svg/JSIcon";
import PythonSvg from "./svg/PythonSvg";

export default function HomeMainContainer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.lane}>
        <PythonSvg width={120} />
        <ElixirSvg width={120} />
        <JSSvg width={120} />
      </div>
    </div>
  );
}
