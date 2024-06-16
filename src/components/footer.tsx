import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div className="mt-16">
      <div className="border-b pb-8">
        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
          <div className="col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-x-2">
              <GlobeAltIcon className="w-10 h-10 text-blue-600" />
              <span className="font-semibold text-xl">WorldPay</span>
            </div>
            <p className="mt-2 mr-24">
              Creating a more secure and reliable way to pay across the globe.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Socials</h3>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Twitter
            </a>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              YouTube
            </a>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Instagram
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Contact</h3>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Email
            </a>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Phone
            </a>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Livechat
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Links</h3>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Documentation
            </a>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Blog
            </a>
            <a href="#" className="mt-2 text-black/80 hover:text-black">
              Careers
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-6">
        <div>&#169; All rights reserved</div>
      </div>
    </div>
  );
}
