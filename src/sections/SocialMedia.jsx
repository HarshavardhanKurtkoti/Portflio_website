const SocialMedia = () => {
  return (
    <section className="c-space my-20" id="social-media">
      <h3 className="head-text text-center">Check out my Social's</h3>
      <br /><br />
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full justify-center">
        <div className="col-span-1 flex flex-col items-center">
          <div className="grid-container text-center">
            <a href="https://www.facebook.com/harsha.kurtkoti" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
                <img src="assets/facebook.png" alt="Facebook" className="w-32 h-32 object-contain" />
              </div>
              <p className="grid-headtext">Facebook</p>
              <p className="grid-subtext">Follow me on Facebook.</p>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="grid-container text-center">
            <a href="https://x.com/Harshakurtkoti" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
                <img src="assets/x.png" alt="Twitter" className="w-32 h-32 object-contain" />
              </div>
              <p className="grid-headtext">X</p>
              <p className="grid-subtext">Follow me on X.</p>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="grid-container text-center">
            <a href="https://www.instagram.com/__harsha__10__" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
                <img src="assets/instagram.png" alt="Instagram" className="w-32 h-32 object-contain" />
              </div>
              <p className="grid-headtext">Instagram</p>
              <p className="grid-subtext">Follow me on Instagram.</p>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="grid-container text-center">
            <a href="https://www.linkedin.com/in/harshavardhan-kurtkoti" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
                <img src="assets/linkedin.png" alt="LinkedIn" className="w-32 h-32 object-contain" />
              </div>
              <p className="grid-headtext">LinkedIn</p>
              <p className="grid-subtext">Connect with me on LinkedIn.</p>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="grid-container text-center">
            <a href="https://github.com/HarshavardhanKurtkoti" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
                <img src="assets/github.png" alt="GitHub" className="w-32 h-32 object-contain" />
              </div>
              <p className="grid-headtext">GitHub</p>
              <p className="grid-subtext">Check out my GitHub profile.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
