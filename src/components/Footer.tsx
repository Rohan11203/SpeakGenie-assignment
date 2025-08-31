import { LogoIcon } from "./Icons/LogoIcon";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex items-center mb-6 md:mb-0">
            <LogoIcon />
            <div className="ml-4 text-left">
              <p className="text-lg font-bold text-gray-800">Topmind Care</p>
              <p className="text-sm text-gray-500">
                Mindfulness for growing minds. © 2025 Mindery Kids.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 text-gray-600">
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-700">
                Contact
              </a>
              <a href="#" className="hover:text-purple-700">
                Instagram
              </a>
              <a href="#" className="hover:text-purple-700">
                YouTube
              </a>
              <a href="#" className="hover:text-purple-700">
                X
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-700">
                Legal
              </a>
              <a href="#" className="hover:text-purple-700">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
