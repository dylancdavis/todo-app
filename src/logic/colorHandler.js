import { parse } from "coolors-io";
import chroma from "chroma-js";

const initialPalette = "https://coolors.co/6593c2-6eb4a8-f0974e-e8765a";

let palette = window.localStorage.getItem("palette") ?? initialPalette;

const setPalette = (paletteURL) => {
  window.localStorage.setItem("palette", paletteURL);
  palette = paletteURL;
  setColors();
};

const setColors = () => {
  let parsed = parse(palette);

  let colors = ["#f9fafb", "#060a0f", ...parsed];
  console.log(colors);

  document.body.style.setProperty("--primary-color", colors[0]);
  document.body.style.setProperty("--secondary-color", colors[1]);
  document.body.style.setProperty(
    "--primary-color-light",
    chroma(colors[1]).set("hsl.l", 0.9)
  );

  for (let i = 2; i < colors.length; i++) {
    document.body.style.setProperty(`--accent${i - 1}`, colors[i]);
    document.body.style.setProperty(
      `--accent${i - 1}-light`,
      chroma(colors[i]).set("hsl.l", 0.9)
    );
    document.body.style.setProperty(
      `--accent${i - 1}-dark`,
      chroma(colors[i]).set("hsl.l", 0.1)
    );
  }
  document.body.style.setProperty(
    `--banner-stripe1`,
    chroma(colors[2]).set("hsl.l", 0.92)
  );
  document.body.style.setProperty(
    `--banner-stripe2`,
    chroma(colors[2]).set("hsl.l", 0.97)
  );
};

export { setPalette, initialPalette };
export default setColors;
