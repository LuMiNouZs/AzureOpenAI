import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>MSC GPT3.5 + Enterprise data | Sample</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat Topic A
                                </NavLink>
                            </li>
                            {/*<li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>*/}
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat Topic B
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://www.metrosystems.co.th/" target={"_blank"} title="Metro Systems link">
                                    <img
                                        src="https://www.metrosystems.co.th/wp-content/uploads/2018/03/metro-logo-white-extra.png"
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        max-height="30px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                                {/*<a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>*/}
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>POC & Demo</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
