import React from 'react';
import {Icon} from "@gisatcz/ptr-atoms";
import classnames from 'classnames';
import logo from "../../assets/img/logo.jpg";

import './style.scss';

const BUFFER = 50;

class Intro extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeaderOpen: false
        };

        window.addEventListener("scroll", this.onWindowScroll.bind(this));
    }

    onWindowScroll(e) {
        const position = e.currentTarget.scrollY;
        const shouldOpenFixedHeader = position > BUFFER;

        if (shouldOpenFixedHeader !== this.state.fixedHeaderOpen) {
            this.setState({
                fixedHeaderOpen: shouldOpenFixedHeader
            });
        }
    }

    onNavigate(target) {
        const targetElement = document.querySelector(target);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    render() {
        let classes = classnames("s14scienceAmazonas-fixed-intro", {
            open: this.state.fixedHeaderOpen
        });

        return (
            <>
                <div className="s14scienceAmazonas-intro" id="top">
                    <div className="s14scienceAmazonas-intro-content">
                        {this.renderNavigation()}
                        {this.renderHeader()}
                    </div>
                </div>
                <div className={classes}>
                    <div className="s14scienceAmazonas-fixed-intro-content">
                        {this.renderTitle()}
                        {this.renderNavigation()}
                    </div>
                </div>
            </>
        );
    }

    renderTitle() {
        return (
            <h1 className="s14scienceAmazonas-title" onClick={this.onNavigate.bind(this, "#top")}>
                S14Science Amazonas
            </h1>
        );
    }

    renderHeader() {
        return (
            <div className="s14scienceAmazonas-header">
                <div className="s14scienceAmazonas-intro-logos-container">
                    <div className="s14scienceAmazonas-intro-logo-wrapper">
                        <img alt="project_logo" className="s14scienceAmazonas-intro-logo" src={logo}/>
                    </div>
                    <a href="https://esa.int" target="_blank" rel="noreferrer noopener"><div className="s14scienceAmazonas-intro-logo-esa"/></a>
                </div>
                <div className="s14scienceAmazonas-header-content">
                    <div className="s14scienceAmazonas-header-title">
                        Welcome to the Sentinel-1 for Science Amazonas project
                    </div>
                    <div className="s14scienceAmazonas-header-about">
                        Forests help offset a quarter of anthropogenic emissions of fossil-fuel, and hold up to 70&#x2011;90&nbsp;% of the Earth’s terrestrial carbon. Sentinel-1 for Science Amazonas is an exploratory scientific project, funded by the European Space Agency (ESA), looking to assess how Sentinel-1 imagery can be used to estimate forest carbon losses and gains associated with land use and land cover changes in the Amazon basin.
                    </div>
                </div>
            </div>
        );
    }

    renderNavigation() {
        return (
            <div className="s14scienceAmazonas-nav">
                <div className="s14scienceAmazonas-nav-item" onClick={this.onNavigate.bind(this, "#about")}>About</div>
                <div className="s14scienceAmazonas-nav-item" onClick={this.onNavigate.bind(this, "#partners")}>Partners</div>
                <div className="s14scienceAmazonas-nav-item" onClick={this.onNavigate.bind(this, "#studies")}>Study sites</div>
                <div className="s14scienceAmazonas-nav-item" onClick={this.onNavigate.bind(this, "#results")}>Results</div>
                <div className="s14scienceAmazonas-nav-item" onClick={this.onNavigate.bind(this, "#news")}>News</div>
                <div className="s14scienceAmazonas-nav-item" onClick={this.onNavigate.bind(this, "#contact")}>Contact</div>
                <a className="ptr-button primary" href="https://sen4ama.gisat.cz/" target="_blank">
                    <div className="ptr-button-caption">Maps</div>
                    <Icon icon="external-link"/>
                </a>
            </div>
        );
    }
}

export default Intro;