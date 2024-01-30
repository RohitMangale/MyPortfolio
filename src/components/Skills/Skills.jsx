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
                            <p>HTML/CSS</p>
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
                            <p>Python</p>
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
                        <p>PHP/MySQL</p>
                        <div className="skdots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="skDot">
                        <p>C/C++</p>
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
                            <p>MERN</p>
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
                        <p>Solidity</p>
                        <div className="skdots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            
                        </div>
                    </div>

                    <div className="skDot">
                        <p>Numpy</p>
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
                            <p>Pandas</p>
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
