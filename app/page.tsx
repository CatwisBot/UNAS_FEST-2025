import Hero from "@/components/shared/Home/Hero";
import Competition from "@/components/shared/Home/Competition";
import Timeline from "@/components/shared/Home/Timeline";
import Ready from "@/components/shared/Home/Ready";
import FAQ from "@/components/shared/Home/Faq";
import Benefit from "@/components/shared/Home/Benefit";
import { EVENTS } from "@/constants/Activities/Timeline";


export default function homePage() {
    const homeEvents = EVENTS.find(event => event.path === "/")?.timeline;
    return(
        <>
            {/* Hero Section */}
            <Hero />

            {/* Competition */}
            <Competition />

            {/* Timeline */}
            {homeEvents && <Timeline events={homeEvents} />}

            {/* Benefit Section */}
            <Benefit />

            {/* Ready */}
            <Ready />

            {/* FAQ */}
            <FAQ />
        </>
    )
}