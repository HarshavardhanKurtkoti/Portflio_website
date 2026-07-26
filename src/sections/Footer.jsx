const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/HarshavardhanKurtkoti"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Visit Harshavardhan's GitHub profile">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://x.com/Harshakurtkoti"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Visit Harshavardhan's X profile">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/__harsha__10__"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Visit Harshavardhan's Instagram profile">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Harshavardhan Kurtkoti. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
