import DownloadCards from "./DownloadCards";
import chromeImg from "/images/logo-chrome.svg";
import firefoxImg from "/images/logo-firefox.svg";
import operaImg from "/images/logo-opera.svg";

function Download() {
  return (
    <>
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritaze.
          </p>
        </div>
      </section>

      <section id="download" className="py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <DownloadCards
            img={chromeImg}
            title="Add to Chrome"
            version="64"
            margin="md:w-1/3"
          />
          <div className="w-full md:w-1/3">
            <DownloadCards
              img={firefoxImg}
              title="Add to Firefox"
              version="55"
              margin="mt-8"
            />
          </div>
          <div className="w-full md:w-1/3">
            <DownloadCards
              img={operaImg}
              title="Add to Opera"
              version="46"
              margin="mt-16"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
