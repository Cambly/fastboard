import React from "react";
import type { IconProps } from "../../../types";
import { getStroke } from "./index";

export const Pencil = (props: IconProps) => {
  const stroke = getStroke(props);
  return (
    <svg viewBox="0 0 24 24">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-48.000000, -172.000000)"
          fill={stroke}
          fillRule="nonzero"
        >
          <g transform="translate(40.000000, 68.000000)">
            <g transform="translate(8.000000, 104.000000)">
              <path d="M17.4971853,4.84081396 L17.6126129,4.94514477 L19.0548552,6.38738707 C19.6112862,6.94381803 19.6460631,7.82436325 19.159186,8.4213085 L19.0548552,8.53673615 L8.73336759,18.8582238 L4.38565171,19.6143483 L5.14177621,15.2666324 L15.4632639,4.94514477 C16.0196948,4.38871381 16.90024,4.35393687 17.4971853,4.84081396 Z M5.96765171,16.348 L5.614,18.385 L7.65065171,18.031 L5.96765171,16.348 Z M14.3736517,7.447 L6.42765171,15.393 L8.60565171,17.571 L16.5516517,9.625 L14.3736517,7.447 Z M13.6464466,9.64644661 L14.3535534,10.3535534 L9.35355339,15.3535534 L8.64644661,14.6464466 L13.6464466,9.64644661 Z M16.2423634,5.59210279 L16.1703706,5.65225155 L15.0806517,6.74 L17.2586517,8.918 L18.3477484,7.82962937 C18.5056389,7.67173887 18.5407257,7.43754792 18.4530088,7.24574612 L18.4078972,7.16648663 L18.3477484,7.09449385 L16.9055062,5.65225155 C16.7250599,5.47180527 16.4449559,5.45175568 16.2423634,5.59210279 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
