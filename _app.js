import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from '../firebase';
import { createWrapper } from 'next-redux-wrapper';

const store = createStore(rootReducer);

const rrfConfig = {
    userProfile: 'users',
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Component {...pageProps} />
            </ReactReduxFirebaseProvider>
        </Provider>
    );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);