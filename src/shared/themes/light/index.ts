import {ms} from 'react-native-size-matters';
import {sfs} from '~/shared/utils/responsibleText';

export default {
  Sizes: {
    FONTSIZE_BUTTON: sfs(8),
    FONTSIZE_BUTTON_SEND: sfs(12),
    FONTSIZE_BUTTON_TITLE: sfs(20),
    ICON_SIZE_BUTTON: sfs(15),
    FONTSIZE_TITLE: sfs(22),
    FONTSIZE_LABEL: sfs(12),
    FONTSIZE_INPUT_LABEL: sfs(13),
    FONTSIZE_INPUT: sfs(16),
    ICON_SIZE: ms(22),
    ICON_SIZE_LG: ms(56),
  },

  Colors: {
    BLACK: '#000',
    WHITE: '#FFF',
    LIGHT_PURPLE: '#5D66D0',
    PLACEHOLDER: '#b4b4b4',
    gray_dark: '#1c1c1c',
    DARK: '#333333',
    GRAY_LIGHT: 'rgba(96,96,96,0.8)',
    SECONDARY_LIGHT_GRAY: '#b4b4b4',
    ERROR: '#C12126',
    FEEDBACK_CORRECT: '#6ea204',
    FEEDBACK_WARNING: '#F2AF00',
    TEXT_COLOR: '#000000',
    BACKGROUND: '#fafafa',
    COLOR_APPLICATION: '#353A85',
    BUTTON_COLOR: '#353A85',
    BUTTON_TEXT: '#FFF',
    ICON_COLOR: '#353A85',
    ACCESSIBILITY: '#FFF',
    CLICKABLE_TEXT: '#C12126',
    INPUT: '#000',
    TAB_ICON_FOCUS: '#353A85',
    TAB_ICON: '#1c1c1c',
  },
};
