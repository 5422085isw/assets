import Gallery from "./Gallery";
import WelcomeText from "./WelcomeText";

export default function Main(){
    return(
        <main>
            <section>
                <WelcomeText />
            </section>
            <Gallery />
        </main>
    );
}