import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Demo } from "./Demo";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [showDemo, setShowDemo] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4 max-w-[30rem] min-w-[18rem]">
        <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
        {showDemo && <Demo />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
