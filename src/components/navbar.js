import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = (props) => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(router.pathname == "/" ? false : true);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 50 || router.pathname !== "/") {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [router.pathname]);

    return (
        <div id="bar" className={scrolled ? "scrolled" : ""}>
            <link
                rel="stylesheet"
                href="https://indestructibletype.com/fonts/Jost.css"
                type="text/css"
                charSet="utf-8"
            />
            <div id="resources">
                <div id="home">
                    <ul>
                        <li>
                            <motion.div
                                style={{ paddingLeft: "10px" }}
                                initial={{ scale: [1.02, 1] }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link href="/" scrolled={scrolled}>
                                    <b>Sharon Boris, LCSW, LLC</b>
                                </Link>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="pages">
                <ul>
                    <li id="page">
                        <motion.div
                            initial={{ scale: [1.02, 1] }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/" under="true" scrolled={scrolled}>
                                Home
                            </Link>
                        </motion.div>
                    </li>
                    <li id="page">
                        <motion.div
                            className={scrolled ? "scrolled" : ""}
                            initial={{ scale: [1.02, 1] }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/portfolio" under="true" scrolled={scrolled}>
                                Portfolio
                            </Link>
                        </motion.div>
                    </li>
                    <li id="page">
                        <motion.div
                            initial={{ scale: [1.02, 1] }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/resume" under="true" scrolled={scrolled}>
                                Resume
                            </Link>
                        </motion.div>
                    </li>
                    <li id="page">
                        <motion.div
                            initial={{ scale: [1.02, 1] }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/contact" under="true" scrolled={scrolled}>
                                Contact
                            </Link>
                        </motion.div>
                    </li>
                    <li id="page">
                        <motion.div
                            initial={{ scale: [1.02, 1] }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/gallery" under="true" scrolled={scrolled}>
                                Gallery
                            </Link>
                        </motion.div>
                    </li>
                    <li id="menu">
                        <Menu href="/menu">
                            <motion.div
                                whileTap={{ rotate: -180 }}
                                initial={{ rotate: [180, 90, 0], scale: [1.02, 1] }}
                                whileHover={{ scale: 1.02 }}
                                style={{ originX: 0.6 }}
                            >
                                <div id="button"></div>
                            </motion.div>
                        </Menu>
                    </li>
                </ul>
            </div>
            {props.children}
            <style jsx>{`
                #bar {
                    padding: 20px;
                    padding-bottom: 5px;
                    background: transparent;
                    list-style: none;
                    display: flex;
                    position: fixed;
                    width: 100%;
                    color: white;
                    transition: background 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s;
                    border-bottom: none;
                    border-bottom-color: currentcolor;
                    background: transparent;
                    background-color: transparent;
                    background-image: none;
                    z-index: 1000;
                }
                #bar.scrolled {
                    background: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                @font-face {
                    font-family: "Cream-Peach";
                    src: url("/fonts/Cream-Peach.ttf") format("truetype");
                    font-weight: normal;
                    font-style: normal;
                }
                #home {
                    font-family: "Cream-Peach", sans-serif;
                }
                #pages {
                    margin-left: auto;
                }
                #button {
                    display: none;
                }
                #resources {
                }
                #sites table tbody tr td {
                    padding-top: 5px;
                    padding-left: 10px;
                    padding-right: 10px;
                    width: 42px;
                    margin: 0 auto;
                }
                #sites table tr td a {
                }
                #menu {
                    display: none;
                }
                div ul {
                    list-style: none;
                    padding-left: 0px;
                    display: flex;
                }
                #icon:hover {
                    color: #18bc9c;
                    -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -ms-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in;
                }

                /* Smartphones (portrait and landscape) ----------- */
                @media (max-device-width: 1024px) {
                    #page {
                        display: none;
                    }
                    #menu {
                        display: inherit;
                        transform: translate(-15%, 35%);
                    }
                    #button {
                        display: inherit;
                        position: relative;
                        top: -5px;
                        content: "";
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        border-right: 0.2em solid black;
                        border-top: 0.2em solid black;
                        transform: translate(-5px, 0px) rotate(135deg)
                            scale(1.4, 1.4);
                        margin-right: 0.5em;
                        margin-left: 1em;
                        -webkit-transition: all 0.2s ease-in;
                        -moz-transition: all 0.2s ease-in;
                        -ms-transition: all 0.2s ease-in;
                        -o-transition: all 0.2s ease-in;
                        transition: all 0.2s ease-in;
                    }
                }
            `}</style>
        </div>
    );
};

function Link({ children, href, under, scrolled }) {
    const router = useRouter();
    const style = {
        className: scrolled ? 'scrolled' : '',
        marginRight: 10,
        textDecoration: under
            ? router.pathname === href
                ? "underline"
                : "none"
            : "none",
        fontSize: "24px",
        color: scrolled ? 'black' : 'white',
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)"
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    );
}

function Menu({ children, href }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Navbar;
