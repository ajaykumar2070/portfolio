import { Badge } from "../ui/badge";


export default function Banner() {
    return (
        <div className="relative w-full h-160 overflow-hidden rounded-l-4xl">
            <img
                alt="Backdrop"
                className="object-cover absolute inset-0 w-full h-full"
                data-authorname="Pawel Czerwinski"
                data-authorurl="https://unsplash.com/@pawel_czerwinski"
                data-blurhash="L13lgZ_NNF4TMKIA8wDiMxyD%#%M"
                data-photoid="V558Lx_ji6I"
                src="https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBmbHVpZCUyMHdhdmVzJTIwdGV4dHVyZXxlbnwxfDB8fHwxNzgwMzEzNzQ1fDA&ixlib=rb-4.1.0&q=80&w=400"
            />
            <div className="bg-[linear-gradient(to_right,oklch(0.141_0.005_285.823/.85),oklch(0.141_0.005_285.823/.4))] absolute inset-0" />
            <div className="relative flex px-12 flex-col justify-center h-full">
                <p className="text-[#9f9fa9] text-sm leading-5">
                    Chandigarh, India 10:24 AM
                </p>
                <div className="text-[#9f9fa9] flex mt-6 items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span className="uppercase text-sm leading-5 tracking-wide">Introduction</span>
                </div>
                <h1 className="max-w-xl font-bold text-neutral-50 text-6xl leading-15 mt-4">
                    Building Your Ideas Into Real Products
                </h1>
                <p className="max-w-md text-[#9f9fa9] text-lg leading-7 mt-6">
                    I build scalable web and mobile applications with clean,
                    reusable UI systems. A love for simplicity, pure and
                    powerful.
                </p>
                <div className="flex mt-10 flex-wrap gap-3">
                    <Badge size="lg" variant="secondary">Frontend</Badge>
                    <Badge size="lg" variant="secondary">Backend</Badge>
                    <Badge size="lg" variant="secondary">UI Design</Badge>
                    <Badge size="lg" variant="secondary">Full Stack Development</Badge>
                </div>
            </div>
        </div>
    )
}