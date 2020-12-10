export * from "./components/MenuBackDrop";
export * from "./components/MenuItem";
export * from "./components/ItemToHold";
export * from "./components/Menu";

import {
  runOnUI,
  withTiming,
  withSpring,
  Easing,
  withDecay,
  interpolate,
} from "react-native-reanimated";
import { useRef } from "react";

function useRunOnce(cb: () => void) {
  const ref = useRef<boolean | null>(null);

  if (ref.current === null) {
    cb();
    ref.current = true;
  }
}

const usedWorklets = {
  withTiming,
  withSpring,
  bezier: Easing.bezier,
  interpolate,
  withDecay,
} as { [key: string]: any };

function useInit() {
  useRunOnce(
    runOnUI(() => {
      "worklet";

      const x: { [key: string]: any } = {};
      Object.keys(usedWorklets).forEach((key) => {
        x[key] = usedWorklets[key];
      });
    })
  );
}

export { useInit as useHoldMenuInit };