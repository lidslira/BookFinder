import {combineReducers} from 'redux';

import font from './font';
import theme from './theme';
import user from './user';
import books from './books';

export default combineReducers({font, theme, user, books});
