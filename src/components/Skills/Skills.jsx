import React from "react";
import "./Skills.css";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import arrow from "../../assets/l_arrow.png";

const Skills = () => {
    return (
        <div id="skills" className="skills ">
            <div className="skillWrapper ">
                <div className="skillHeading">
                    <div className="Title  skTitle" style={{margin:'0'}}>My Skills</div>
                    <img src={arrow} alt="" />
                </div>

                <div className="skillTab">
                    <div className="skTab">
                        <div className="skDot">
                            <p>HTML</p>
                            <div className="skdots">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="skDot">
                            <p>CSS</p>
                            <div className="skdots">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="skDot">
                            <p>Javascript</p>
                            <div className="skdots">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="skDot">
                        <p>PHP</p>
                        <div className="skdots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="skDot">
                        <p>MySql</p>
                        <div className="skdots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>
                    </div>

                        
                    </div>

                    <div className="skTab">

                        <div className="skDot">
                            <p>React</p>
                            <div className="skdots">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="skDot">
                            <p>Firebase</p>
                            <div className="skdots">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="skDot">
                        <p>Bootstrap</p>
                        <div className="skdots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="skDot">
                        <p>Tailwind</p>
                        <div className="skdots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                        <div className="skDot">
                            <p>Solidity</p>
                            <div className="skdots">
                                <div></div>
                                <div></div>
                                <div></div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
