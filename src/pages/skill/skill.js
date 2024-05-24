import React from "react";

const Skills = () => {
    return (
        <>
            <div className="skills">
                <div className="container gx-0 px-3 px-md-0">
                    <div className="row gx-0 align-items-center">
                        <h1>MY SKILLS</h1>
                        <div className="col-md-6">
                            <div className="skill_col1">
                                <div className="skill">
                                    <div className="skill-name">HTML</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="100%"
                                            style={{ maxWidth: "100%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">CSS</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="100%"
                                            style={{ maxWidth: "100%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">
                                        {" "}
                                        <div className="skill-name">Bootstrap 3/4/5</div>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="100%"
                                            style={{ maxWidth: "100%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Javascript</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="100%"
                                            style={{ maxWidth: "100%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">React JS</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="95%"
                                            style={{ maxWidth: "95%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Tailwind CSS</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="80%"
                                            style={{ maxWidth: "80%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill_col2">
                                <div className="skill">
                                    <div className="skill-name">GitHub</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="90%"
                                            style={{ maxWidth: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Git</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="90%"
                                            style={{ maxWidth: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">MongoDB</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="80%"
                                            style={{ maxWidth: "80%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Node JS</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="75%"
                                            style={{ maxWidth: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Strapi</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="80%"
                                            style={{ maxWidth: "80%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">REST API</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-percentage"
                                            per="80%"
                                            style={{ maxWidth: "80%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;