import Hero from "@/components/shared/Home/Hero";
import Competition from "@/components/shared/Home/Competition";
import Ready from "@/components/shared/Home/Ready";
import FAQ from "@/components/shared/Home/Faq";
import Benefit from "@/components/shared/Home/Benefit";

export default function homePage() {
    return(
        <main>
            {/* Hero Section */}
            <Hero />

            {/* Competition */}
            <Competition />

            {/* Benefit Section */}
            <Benefit />

            {/* Ready */}
            <Ready />


            {/* FAQ */}
            <FAQ />
        </main>
    )
}