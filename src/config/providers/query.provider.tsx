
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {FC} from "react";
import {ChildrenProps} from "../../utils/types";

const queryClient = new QueryClient({
    defaultOptions:{
    }
})
const QueryProvider:FC<ChildrenProps> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
    );
};

export default QueryProvider;