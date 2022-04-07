import BoardPost from "./content/boardPost";
import Router from "./Router/Router";

const Root: React.FC = () =>{

    return(
        <>
            <section className="wrap">
                <h1>Board Made With Kotlin</h1>
                <Router/>
            </section>
        </>
    )


}

export default Root;