import { Link } from "react-router-dom";
import { TikTokWiget } from "../common/TikTokWiget";
import { InstagramWidget } from "../common/InstagramWidget";
import { EmailWidget } from "../common/EmailWidget";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-3 items-center justify-between  bg-customFooterNav dark:bg-customDark py-3 px-4">
      <section>
        <span className="font-bold">© Juan Cruz Dauberte</span>
      </section>

      <section>
        <ul className="flex flex-col gap-3 items-center">
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
        </ul>
      </section>

      <section className="flex gap-2">
        <TikTokWiget />
        <InstagramWidget />
        <EmailWidget />
      </section>
    </footer>
  );
};
