import { createStore, combineReducers } from "redux";

import { videos } from "./reducers/videos";

const reducers = combineReducers({
    videos
});

const storeConfig = () => {
    return createStore(reducers);
};

export default storeConfig;