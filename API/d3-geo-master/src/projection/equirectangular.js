import projection from "./index";

export function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

export default function() {
  return projection(equirectangularRaw)
      .scale(152.63);
}