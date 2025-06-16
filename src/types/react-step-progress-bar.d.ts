declare module "react-step-progress-bar" {
  import * as React from "react";

  export interface StepProps {
    children: (props: {
      accomplished: boolean;
      index: number;
    }) => React.ReactNode;
  }

  export const Step: React.FC<StepProps>;

  export interface ProgressBarProps {
    percent: number;
    filledBackground?: string;
    height?: number;
    stepPositions?: number[];
    children?: React.ReactNode;
  }

  export const ProgressBar: React.FC<ProgressBarProps>;
}
