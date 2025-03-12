import Layout from "../components/layout";
import { motion } from "framer-motion";

const moveDuration = 2;

const Index = () => (
    <Layout>
        <div id="intro-body">
            <div id="mid">
                <div id="intro">
                    <motion.div
                        initial={{
                            x: 0,
                            y: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            y: 150,
                            opacity: 1
                        }}
                        transition={{
                            duration: moveDuration,
                            delay: 0.15,
                        }}
                    >
                        <h1>
                            <b>Sharon Boris</b>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: 0,
                            y: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            y: 150,
                            opacity: 1
                        }}
                        transition={{
                            duration: moveDuration,
                            delay: 0.125,
                        }}
                    >
                        <h4>Licensed Clinical Social Worker</h4>
                    </motion.div>
                </div>
                <div id="pic">
                    <motion.div
                        initial={{
                            x: 0,
                            y: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            y: 150,
                            opacity: 1
                        }}
                        transition={{
                            duration: moveDuration,
                            delay: 0.1,
                        }}
                    >
                        <img src="/sharon.webp" alt="sharon" align="right"></img>
                    </motion.div>
                </div>
            </div>
        </div>
        <div>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
        </div>
        <style jsx>{`
            #intro-body {
                height: 100vh;
                padding-left: 10%;
                padding-right: 10%;
                overflow: hidden;
                background: url('/trees.webp') center top / cover no-repeat;
                color: white;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
            }
            #intro-body table {
                position: relative;
                margin: 0 auto;
            }
            #intro-body img {
                width: 400px;
                border-radius: 50%;
                box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.4);
            }
            #intro-body {
                padding: 20px;
                padding-bottom: 150px;
            }

            #mid {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #intro {
                h1 {
                    text-color: white;
                }

                padding: 2%;
                /* transform: translate(0px, 150px); */
            }
            #pic {
                padding: 2%;
            }

            #background {
                position: relative;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                z-index: -100;
            }

            /* @media (max-device-width: 1080px) {
                #intro-body table tintro-body tr td img {
                    width: 100%;
                    border-radius: 50%;
                }
                #intro-body table {
                    padding-left: 10%;
                    padding-right: 10%;
                }
            } */

            @media (max-device-width: 1080px) {
                #intro-body {
                    display: flex;
                    flex-flow: column;
                }
                #intro-body img {
                    border-radius: 50%;
                }

                #intro {
                    position: absolute;
                    bottom: 0;
                }
                #mid {
                }

                #pic {
                    padding: 0px;
                    order: 1;
                    transform: translate(0px, calc(-10vh));
                }
                #pic img {
                    width: 314px;
                }
                #intro {
                    padding: 0px;
                    order: 2;
                    transform: translate(0px, calc(-50vh));
                }
                #intro h4 {
                    padding-top: 10px;
                    font-size: 18pt;
                }
            }

            @media screen and (max-height: 750px) {
                #pic img {
                    transform: translate(0px, -20px);
                    width: 220px;
                }
            }
        `}</style>
    </Layout>
);

export default Index;
