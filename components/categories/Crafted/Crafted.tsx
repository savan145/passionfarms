
import Image from "next/image";

export default function Crafted() {
    return (
        <section className="py-4.5 md:py-8 flex flex-col">
            <div className="relative rounded-xl overflow-hidden">
                {/* Background image */}
                <Image
                    src="/images/categories/craft.jpg" // <-- update path if needed
                    alt="Crafted with care. Infused with calm."
                    width={900}
                    height={1}
                    className="object-cover md:w-[1370px] h-50 md:h-[400px] top-40"
                    priority
                />
                {/* Overlayed text */}
                <div className="absolute inset-0 flex flex-col md:flex-row md:justify-between items-start p-4 md:p-9 gap-2">
                    <div className="text-white text-[28px] md:text-5xl md:leading-[68px] leading-7 tracking-[-1px] font-normal md:max-w-[634px] max-w-full">
                        Crafted with care. Infused with calm.
                    </div>
                    <div className="md:text-right md:mt-8">
                        <span className="text-white text-3xl md:text-[70px] font-medium leading-9 tracking-[-1px]">30% Off!</span>
                        <div className="text-white md:text-[25px] font-normal font-family-inter md:leading-9 md:max-w-full max-w-30 leading-5">on all edible bundles</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
