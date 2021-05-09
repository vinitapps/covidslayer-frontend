import game from '../reducers/game';
import { createStore } from 'redux';

const store = createStore(game);
export default store ;