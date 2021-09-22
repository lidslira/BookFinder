declare module "*.jpg";
declare module '*.png';

import { StringifiedStyles } from 'react-native-size-matters';
// import original module declarations
import 'styled-components';

type ColorsProps = {
  BLACK: string;
  WHITE: string;
  LIGHT_PURPLE: string;
  ERROR: string;
  FEEDBACK_CORRECT: string;
  FEEDBACK_WARNING: string;
  GRAY_LIGHT: string;
  SECONDARY_LIGHT_GRAY: string;
  SECONDARY_MEDIUM_GRAY: string;
  FONT_INPUT: string;
  COLOR_APPLICATION: string;
  BUTTON_COLOR:string;
  ICON_COLOR: string;
  ACCESSIBILITY: string;
  BACKGROUND: string;
  CLICKABLE_TEXT: string;
  BUTTON_TEXT: string;
  TEXT_COLOR: string;
  CLICKABLE_ICON: string;
  INPUT: string;
  TAB_ICON_FOCUS: string;
  TAB_ICON: string;
  PLACEHOLDER: string;
};

type SizingProps = {
  FONTSIZE_BUTTON: number;
  FONTSIZE_BUTTON_SEND: number;
  FONTSIZE_BUTTON_TITLE: number;
  FONTSIZE_INPUT: number;
  FONTSIZE_TITLE: number;
  FONTSIZE_INPUT_LABEL: number;
  FONTSIZE_LABEL: number;
  ICON_SIZE_BUTTON: number;
  ICON_SIZE: number;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizingProps;
    Colors: ColorsProps;
  }
}
