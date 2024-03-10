import React, {Component} from "react";
import logo_flat_black from "../icons/logo_flat_black.svg";
import SideFX_black from "../icons/SideFX_black.svg";
import Autodesk from "../icons/autodesk.svg";
import Resolve from "../icons/davinci-resolve.svg";
import Octane from "../icons/octane logo.svg";

function compareByLevel(a, b) {
    return b.level - a.level;
}

export var skillIcons =
    {
        "Houdini": SideFX_black,
        "Arnold": Autodesk,
        "Resolve": Resolve,
        "Octane": Octane
    }

export function findIcon(iconName, className = "skill-icon") {
    if (iconName.includes("devicon")) {
        return <i className={iconName} style={{fontSize: "220%"}}></i>
    } else if (iconName in skillIcons) {
        return <img className={className} src={skillIcons[iconName]} alt={iconName + " logo"}/>

    } else {
        return <img className={className} src={logo_flat_black} alt="Undefined Logo"/>
    }
}

class Skills extends Component {

    render() {
        if (this.props.sharedSkills && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.skills;
            var skills = this.props.sharedSkills.icons.sort(compareByLevel).map(function (skills, i) {
                return (
                    <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                {findIcon(skills.class)}
                  <p
                      className="text-center"
                      style={{fontSize: "70%", marginTop: "4px"}}
                  >
                    {skills.name}
                  </p>
              </div>
            </span>
                    </li>
                );
            });
        }

        return (
            <section id="skills">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <h1 className="section-title">{sectionName}
                        </h1>
                    </div>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;