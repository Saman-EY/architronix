"use client";

import MapDirectionProvider from "@/contextApi/mapDirectionProvider";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const LayoutChildren = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <MapDirectionProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
      </MapDirectionProvider>
      <Toaster
        position="top-center"
        // containerStyle={{
        //   top: 60,
        // }}
      />
    </>
  );
};

export default LayoutChildren;
