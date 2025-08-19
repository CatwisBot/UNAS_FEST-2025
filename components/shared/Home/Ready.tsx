import Link from "next/link";

export default function Ready() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-0% from-[#551C86] to-100% to-[#37126A] text-white pt-32 py-12 px-6 text-center space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold uppercase">
        Ready to Join the Competition?
      </h2>

      <p className="text-base md:text-xl text-[#F3DAF9] max-w-lg">
        Don’t miss this opportunity to be part of our 76th anniversary celebration. 
        Register now and showcase your talents!
      </p>

      <div className="flex gap-4 mt-6">
        <Link href="https://caturnawa.unasfest.com" target="_blank">
        <button className="px-6 py-3 rounded-xl border-2 border-white bg-white text-[#973BEB] hover:bg-[#973BEB] hover:border-[#973BEB] hover:text-white font-semibold shadow transition cursor-pointer">
          Register Now →
        </button>
        </Link>
        <button className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#973BEB] transition cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
}
