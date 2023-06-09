import * as React from 'react';
import DALL_E_van_gogh_MR_ocean_theme from './DALL·E_van_gogh_MR_ocean_theme.png';

export function SvgLogo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
      <path fill="#faefde" d="M32 18.55A18 18 0 1129.41 40" />
      <path fill="#f9e3ae" d="M45 44a13 13 0 1113-13 13 13 0 01-13 13z" />
      <path fill="#ed7899" d="M19 13a18 18 0 100 36 18 18 0 100-36z" />
      <path fill="#f283a5" d="M19 13a18 18 0 100 36 18 18 0 100-36z" />
      <path fill="#ed7899" d="M19 44a13 13 0 1113-13 13 13 0 01-13 13z" />
      <path
        fill="#8d6c9f"
        d="M28 32a1 1 0 000-2h-2a1 1 0 000 2zm1.54 3.14a1 1 0 00-1.22-.71l-1.93.57a1 1 0 10.52 1.93l1.93-.52a1 1 0 00.7-1.27zM26.39 27l1.93.52a1 1 0 10.52-1.93l-1.93-.52a1 1 0 10-.52 1.93zM28 22.37l1.73 1a1 1 0 00.5.13 1 1 0 00.5-1.87l-1.73-1a1 1 0 10-1 1.73zm26.42-1.72a1 1 0 00-1.35 1.48 12 12 0 011.41 1.53 1 1 0 001.58-1.22 14.07 14.07 0 00-1.64-1.79zm-3.92-2.53a14.12 14.12 0 00-9.58-.52 1 1 0 10.58 1.91 12.11 12.11 0 018.21.44 1 1 0 10.79-1.84z"
      />
      <path
        fill="#8d6c9f"
        d="M45 12a18.81 18.81 0 00-13 5.18 19 19 0 100 27.65A19 19 0 1045 12zM2 31a17 17 0 1130 10.94 16.91 16.91 0 01-1.72-2.43 1 1 0 10-1.73 1 18.89 18.89 0 002.06 2.88A17 17 0 012 31zm43 17a17.05 17.05 0 01-11.62-4.61 18.9 18.9 0 000-24.77A16.82 16.82 0 0145 14a17 17 0 010 34z"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <img
      src={DALL_E_van_gogh_MR_ocean_theme}
      alt="Logo built using DALL·E"
      style={{ width: 42, height: 42, borderRadius: '25%' }}
    ></img>
  );
}
