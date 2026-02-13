import Styles from "./HomeMainContainer.module.css";
import { Home } from "lucide-react";
import Typewriter from "typewriter-effect";
import ElixirSvg from "./svg/ElixirSvg";
import JSSvg from "./svg/JSIcon";
import PythonSvg from "./svg/PythonSvg";

export default function HomeMainContainer() {
  const greetingString =
    "Hello, my name is Lawrence. I'm a self-learned frontend / fullstack developer, I love crafting shinny and neat stuffs on the internet, as well as solving people's IRL problems using technology.";

  return (
    <div className={Styles.container}>
      <div className={Styles.leftPane}>
        <div className={Styles.iconRow}>
          <JSSvg width={40} />
          <ElixirSvg width={40} />
          <PythonSvg width={40} />
        </div>
      </div>
      <div className={Styles.rightPane}>
        <div className={Styles.terminal}>
          <div className={Styles.prompt}>
            <Home size={32} strokeWidth={0} fill="#f0ebdf" /> LawrenceSu@Blog
          </div>
          <div className={Styles.output}>
            <div className={Styles.pointer}>{" > "} </div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(greetingString)
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
