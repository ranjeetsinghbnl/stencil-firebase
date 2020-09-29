/**
 *  @fileOverview Application store
 *
 *  @author  Ranjeet Singh
 */

import { createStore } from '@stencil/store';
const store = createStore({
    user: undefined,
    isAuthenticated: false,
    appInitError: '',
    appInit: false,
    registerLoader: false,
    loginLoader: false,
    activeTheme: 'light',
    showSidebar: false
});

store.onChange('isAuthenticated', (value) => {
    AppState.isAuthenticated = value;
});
store.onChange('user', (value) => {
    AppState.user = value;
});
store.onChange('appInitError', (value) => {
    AppState.appInitError = value;
});
store.onChange('appInit', (value) => {
    AppState.appInit = value;
});
store.onChange('activeTheme', (value: 'light' | 'dark' = 'light') => {
    AppState.activeTheme = value;
});
store.onChange('showSidebar', (value: boolean = false) => {
    AppState.showSidebar = value;
});

export const AppState = store.state;
export const getStateProp = store.get;
export const setStateProp = store.set;
export const resetAppState = store.reset;