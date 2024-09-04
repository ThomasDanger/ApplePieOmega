import Image from "next/image";

import Navbar from "./components/Navbar/Navbar.js";
import BigTitle from "./components/BigTitle/BigTitle.tsx"
import SectionBlack from "./components/SectionBlack/SectionBlack.tsx"
import SectionMulticolorText from "./components/SectionMultiColorText/SectionMulticolorText.tsx"

import SectionMulticolor from "./components/SectionMultiColor/SectionMulticolor.tsx"
import JoinSection from "./components/JoinSection/JoinSection.tsx";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <BigTitle/>
        <SectionMulticolorText/>

        <section id="About">
          <SectionBlack/>
        </section>

        <section id="Why Join">
          <SectionMulticolor/>
        </section>

        <section id="Join">
          <JoinSection/>
        </section>
      </div>
    </main>
  );
}
