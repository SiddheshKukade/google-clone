import Head from "next/head"
import HeaderOptions from "../components/HeaderOptions"
import ResultHeader from "../components/ResultHeader"
import response from "../response"
import { useRouter } from "next/dist/client/router"
import SearchResults from "../components/SearchResults"

function Search({ results }) {
    const router = useRouter()
    return (
        <div>
            <Head><title>{router.query.term} - Google Search   </title>
                <link rel="stylesheet" href="./favicon.ico" />
            </Head>
            {/* header */}
            {/* results */}
            <ResultHeader />
            {/*HeaderOptions  */}
            <HeaderOptions />
            <SearchResults results={results} />
        </div>
    )
}

export default Search
export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0"
    const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT}&q=${context.query.term}&start=${startIndex}`).then(res => res.json())
    //After results renderd return it to the client
    return {
        props: {
            results: data
        }
    }
}