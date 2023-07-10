import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const createQueryWrapper = () => {
  const testQueryClient = new QueryClient();
  const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );

  return Wrapper;
};

export { createQueryWrapper };
