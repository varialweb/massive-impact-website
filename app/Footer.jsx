import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[hsl(229,_87%,_6%,_100%)] text-white p-3 py-8 md:p-8 md:py-12 grid place-items-center">
      <div className="grid gap-8">
        <img src="/img/massive-impact-logo-v8-white.svg" alt="" width="120" className="md:w-80 justify-self-center" />
        <div className="flex justify-evenly w-full">
          <Link href="/">
            <img src="/img/icon_facebook.svg" alt="Facebook" width="36" className="md:w-[44px]" />
          </Link>
          <Link href="/">
            <img src="/img/icon_instagram.svg" alt="Instagram" width="36" className="md:w-[44px]" />
          </Link>
          <Link href="/">
            <img src="/img/icon_linkedin.svg" alt="LinkedIn" width="36" className="md:w-[44px]" />
          </Link>
          <Link href="/">
            <img src="/img/icon_youtube.svg" alt="Youtube" width="36" className="md:w-[44px]" />
          </Link>
        </div>
        <p className="text-center font-[Inter] md:text-lg">&copy; {new Date().getFullYear()} Massive Impact</p>
      </div>
    </footer>
  )
}