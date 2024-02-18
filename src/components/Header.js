import React, {Component} from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import logo_flat from "../icons/logo_flat.svg";
import desk_render from "../images/Desk_Render.png";

class Header extends Component {
    titles = [];

    constructor() {
        super();
        this.state = {checked: false};
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({checked});
        this.setTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        if (this.props.sharedData) {
            var name = this.props.sharedData.name;
            this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
        }

        const HeaderTitleTypeAnimation = React.memo(() => {
            return <Typical className="title-styles title" steps={this.titles} loop={50}/>
        }, (props, prevProp) => true);

        return (
            <header id="home" style={{height: window.innerHeight - 70, display: 'block'}}>
                <img src={desk_render} alt="octane desk render" style={{position: "absolute", left: "60%", top:"0", transform:"translate(-60%, 0)"}}/>
                <div className="row aligner" style={{height: '100%'}}>
                    <div className="col-md-12">
                        <div>
                            {/*<span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>*/}
                            <img className="iconfiy header-icon" src={logo_flat} alt="Logo"/>
                            <br/>
                            <h1 className="mb-0 title">
                                <Typical steps={[name]} wrapper="p"/>
                            </h1>
                            <div className="title-container">
                                <HeaderTitleTypeAnimation/>
                            </div>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#EC838C" // light secondary color
                                onColor="#C1333F"  // dark secondary color
                                className="react-switch mx-auto"
                                width={90}
                                height={40}
                                uncheckedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:owl"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "20px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                checkedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="noto-v1:sun-with-face"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "10px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                id="icon-switch"
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
