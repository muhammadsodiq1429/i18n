import { memo } from "react";
import { LINKS } from "../static";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = memo(() => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header bg-black sticky top-0 text-white">
      <nav className="navbar container h-20 flex items-center gap-10">
        <div className="navbar__logo text-2xl font-medium flex-1">
          <Link to={"/"}>LOGO</Link>
        </div>
        <ul className="navbar__collection flex gap-5">
          {LINKS.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} className={"link"}>
                <span>{t(item.title)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar__actions">
          <select
            name=""
            id=""
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="uz">{t("lang-option.uz")}</option>
            <option value="en">{t("lang-option.en")}</option>
            <option value="ru">{t("lang-option.ru")}</option>
          </select>
        </div>
      </nav>
    </header>
  );
});
