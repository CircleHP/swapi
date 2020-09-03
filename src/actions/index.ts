import { bindActionCreators } from 'redux';

import store from 'redux-store';
import * as actionCreators from './all';

const actions: typeof actionCreators = bindActionCreators(actionCreators, store.dispatch);

export default actions;
