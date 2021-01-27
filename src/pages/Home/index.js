import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Skills from "../../components/Skills";

const queryClient = new QueryClient();

function Home() {
    return (
        <div className="container">
            <Header />
            <QueryClientProvider client={queryClient}>
                <Skills />
            </QueryClientProvider>
            <Footer />
        </div>
    );
}

export default Home;
