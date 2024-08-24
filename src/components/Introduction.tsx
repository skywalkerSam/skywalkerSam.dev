import starboyImage from "../assets/Starboy.jpg";

export default function Introduction() {
  return (
    <>
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <a href="https://www.instagram.com/skywalkersam_" target="_blank">
            <img
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={starboyImage}
              alt="Profile Image"
              width="384"
              height="512"
            ></img>
          </a>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-xl">
                👋 Just trying to make it to Friday, have a nice day...
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                <a href="https://x.com/skywalkerSam_" target="_blank">
                  Sam Skywalker
                </a>
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                <em>Explorer</em>,{" "}
                <strong>
                  <a
                    href="https://earth.google.com/web/@-6.64351487,-155.38809481,-39838.85812249a,63209837.28240967d,35y,0h,0t,0r/data=OgMKATA"
                    target="_blank"
                  >
                    Planet-Earth
                  </a>
                </strong>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
