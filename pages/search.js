import Head from "next/head"
import ResultHeader from "../components/ResultHeader"


function search() {
    return (
        <div>
            <Head><title>Results</title>
                <link rel="stylesheet" href="./favicon.ico" />
            </Head>
            {/* header */}
            {/* results */}
            <ResultHeader />
            {/*HeaderOptions  */}
            
        </div>
    )
}

export default search