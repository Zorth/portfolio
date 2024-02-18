import React, {Component} from "react";
import {Icon} from "@iconify/react";
import blenderIcon from "@iconify/icons-logos/blender";
import sideFXIcon from "../icons/SideFX_color.svg";
import tarragonIcon from "../icons/Tarragon_Tiny.svg";

class About extends Component {
    render() {
        if (this.props.sharedBasicInfo) {
            var profilepic = "images/" + this.props.sharedBasicInfo.image;
        }
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var hello = this.props.resumeBasicInfo.description_header;
            var about = this.props.resumeBasicInfo.description;
        }

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-4 mb-5 center">
                            <div className="polaroid">
                <span style={{cursor: "auto"}}>
                  <img
                      height="200px"
                      width="200px"
                      src={profilepic}
                      alt="Avatar"
                  /><div style={{display: "flex",}}>
                  <Icon
                      icon={blenderIcon}
                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                    <img
                        src={sideFXIcon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%", height: "40px", width: "40px"}}
                        alt="SideFX Icon"
                        ref="https://google.com"
                    />
                    <img
                        src={tarragonIcon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%", height: "40px", width: "40px"}}
                        alt="Tarragon Icon"
                    />
                </div>
                </span>
                            </div>
                        </div>

                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }}
                                    >
                                        <br/>
                                        <span className="wave">{hello} :) </span>
                                        <br/>
                                        {about}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
