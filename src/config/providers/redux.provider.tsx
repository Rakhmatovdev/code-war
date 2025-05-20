
import {FC} from "react";
import {ChildrenProps} from "../../utils/types";
import {Provider} from "react-redux";
import {store} from "../../features/store/store.ts";


const ReduxProvider:FC<ChildrenProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default ReduxProvider;