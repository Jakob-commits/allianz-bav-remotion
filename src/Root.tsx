import "./index.css";
import { Composition } from "remotion";
import { Scene1Hook } from "./scenes/Scene1-Hook";
import { Scene2Baeckerei } from "./scenes/Scene2-Baeckerei";
import { Scene3Hebel } from "./scenes/Scene3-Hebel";
import { Scene4Steuer } from "./scenes/Scene4-Steuer";
import { Scene5Pakete } from "./scenes/Scene5-Pakete";
import { Scene6FOMO } from "./scenes/Scene6-FOMO";
import { Scene7CTA } from "./scenes/Scene7-CTA";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Hook"
        component={Scene1Hook}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="BaeckereiPrinzip"
        component={Scene2Baeckerei}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="HebelEffekt"
        component={Scene3Hebel}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="SteuerSchaukel"
        component={Scene4Steuer}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Paketauswahl"
        component={Scene5Pakete}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="VerbranntesGeld"
        component={Scene6FOMO}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Abschluss"
        component={Scene7CTA}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
