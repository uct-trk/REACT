import "./styles.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const CatPage = () => {
  const { isLoading, error, data } = useQuery("catData", () =>
    fetch("https://cataas.com/cat?json=true").then((response) =>
      response.json()
    )
  );

  if (isLoading) return <div>"YÜKLENİYOR..."</div>;
  if (error) return <div>"Hata Var..."</div>;

  return (
    <div className="App">
      <img alt={"CAT"} width={300} src={`https://cataas.com/cat/${data.id}`} />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CatPage />
    </QueryClientProvider>
  );
};
export default App;
