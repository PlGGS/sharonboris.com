import Layout from "../components/layout";
import { motion } from "framer-motion";

const moveDuration = 2;

const Index = () => (
    <Layout>
        <div id="text">
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
                        <h4>LCSW, LLC</h4>
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
            <div id="background"/>
        <style jsx>{`
            #text {
                padding-left: 10%;
                padding-right: 10%;
                overflow: hidden;
            }
            #text table {
                position: relative;
                margin: 0 auto;
            }
            #text img {
                width: 400px;
                border-radius: 50%;
            }
            #text {
                padding: 20px;
                padding-bottom: 150px;
            }

            #mid {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #intro {
                padding: 2%;
                /* transform: translate(0px, 150px); */
            }
            #pic {
                padding: 2%;
            }

            #background {
                position: fixed;
                top: 77px;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-image: url('/trees.webp');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                z-index: -1;
            }

            /* @media (max-device-width: 1080px) {
                #text table ttext tr td img {
                    width: 100%;
                    border-radius: 50%;
                }
                #text table {
                    padding-left: 10%;
                    padding-right: 10%;
                }
            } */

            @media (max-device-width: 1080px) {
                #text {
                    display: flex;
                    flex-flow: column;
                }
                #text img {
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

                    text-align: center;
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
