import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div className="mt-16">
      <div className="border-b pb-4">
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
            <a href="#" className="mt-2">
              Twitter
            </a>
            <a href="#" className="mt-2">
              YouTube
            </a>
            <a href="#" className="mt-2">
              Instagram
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Contact</h3>
            <a href="#" className="mt-2">
              Email
            </a>
            <a href="#" className="mt-2">
              Phone
            </a>
            <a href="#" className="mt-2">
              Livechat
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Links</h3>
            <a href="#" className="mt-2">
              Documentation
            </a>
            <a href="#" className="mt-2">
              Blog
            </a>
            <a href="#" className="mt-2">
              Careers
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div>&#169; All rights reserved</div>
        <div>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
