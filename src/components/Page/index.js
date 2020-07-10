import React from 'react';
import classnames from 'classnames';
import Fade from "react-reveal/Fade";

import gisat from "../../assets/img/gisat.png";
import agresta from "../../assets/img/agresta.png";
import nls from "../../assets/img/nls.png";
import nmbu from "../../assets/img/nmbu.png";

class Page extends React.PureComponent {
    render() {
        return (
            <div className="s14scienceAmazonas-page">
                <section id="about">
                    <div>
                        <h3>PROJECT GOALS</h3>
                        <p>The dense spatial and temporal coverage of the Amazon basin with Sentinel-1 Synthetic Aperture Radar scenes has opened vast potential for capturing the complexity in tropical forest loss and regrowth. Sentinel-1 for Science Amazonas aims to:</p>
                        <ul>
                            <li>Develop, test and validate an operational-level Multi-temporal forest Change Detection (MCD) algorithm,</li>
                            <li>Estimate carbon loss and gain from anthropogenic and natural land use changes (LUC) in the Amazonas based on the MCD outputs, and</li>
                            <li>Perform scientific analysis and interpretation of the quantified carbon gain/loss, accounting for seasonal stressors such as severe droughts or fires.</li>
                        </ul>

                        <h3>EO TECHNOLOGY</h3>
                        <p>
                            The methods developed in Sentinel-1 for Science Amazonas integrate the current state-of-the-art research on SAR-based monitoring in the fields of not only forests, but also agriculture, wetlands and grasslands. The primary dataset used in the development of the Multi-temporal forest Change Detection (MCD) algorithm is the complex Sentinel-1 Interferometric Wide (IW) swath Single Look Complex (SLC) time series. These time-series are analysed by break-point detection, moving-window trend-fitting in the temporal and spatial domain.The algorithms are enriched with complementary data, such as L-band SAR (e.g. ALOS-2) or spaceborne LiDAR (e.g. GEDI). Forest carbon losses and gains are estimated through a rigorous statistical comparative analysis of existing datasets to the newest in-situ field data and LiDAR data, or local-scale calibration and fusion of such datasets.
                        </p>

                        <h3>EXPECTED OUTCOMES</h3>
                        <p>
                            The Sentinel-1 for Science Amazonas project is expected to publicly release forest loss and gain maps produced using the Multi-temporal forest Change Detection (MCD) algorithm. The maps will incorporate spatially and temporally explicit estimates of change, the type of change (e.g. deforestation, degradation, areas of natural or assisted regrowth), severity of change, forest carbon gains/losses and the associated uncertainty in estimates.The study areas of the project include pilot sites in Madre de Dios, Mato Grosso and Manaus, and will be up-scaled to the extent of the  Amazon basin.
                        </p>
                    </div>
                </section>
                <section  id="partners">
                    <div>
                        <h2>MEET OUR TEAM</h2>

                        Sentinel-1 for Science Amazonas is led by a consortium of four partners - GISAT (Prime, Czechia, Copernicus service provider), Agresta (Spain, worldwide forest consultancy), Norwegian University of Life Sciences (Norway, leading national academic institution) and the Finnish Geospatial Research Institute (Finland, international innovative scientific research institute). The team uniquely combines complementary and strong backgrounds in forestry and carbon assessments, multi-temporal SAR analysis and data fusion, and large-data processing capabilities.
                    </div>
                    <div className="s14scienceAmazonas-partners">
                        <div className="s14scienceAmazonas-partner-card">
                            <div>
                                <div className="s14scienceAmazonas-partner-card-img-wrapper">
                                    <img src={gisat}/>
                                </div>
                                <div className="s14scienceAmazonas-partner-card-title">GISAT s.r.o.</div>
                                <div className="s14scienceAmazonas-partner-card-subtitle">Prague (CZE)</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Neha Joshi</div>
                                <div className="s14scienceAmazonas-partner-card-person">Mr. Lubos Kucera</div>
                                <div className="s14scienceAmazonas-partner-card-person">Mr. Ondrej Nalevka</div>
                            </div>
                        </div>
                        <div className="s14scienceAmazonas-partner-card">
                            <div>
                                <div className="s14scienceAmazonas-partner-card-img-wrapper">
                                    <img className="smaller" src={agresta}/>
                                </div>
                                <div className="s14scienceAmazonas-partner-card-title">AGRESTA S.Coop</div>
                                <div className="s14scienceAmazonas-partner-card-subtitle">Madrid (ESP)</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Jessica Esteban</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Nur Algeet</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Mariluz Guillén</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Alfredo Fernández</div>
                            </div>
                        </div>
                        <div className="s14scienceAmazonas-partner-card">
                            <div>
                                <div className="s14scienceAmazonas-partner-card-img-wrapper">
                                    <img src={nmbu}/>
                                </div>
                                <div className="s14scienceAmazonas-partner-card-title">Norwegian University of Life Sciences</div>
                                <div className="s14scienceAmazonas-partner-card-subtitle">Ås (NOR)</div>
                                <div className="s14scienceAmazonas-partner-card-person">Professor Erik Næsset</div>
                                <div className="s14scienceAmazonas-partner-card-person">Professor Terje Gobakken</div>
                            </div>
                        </div>
                        <div className="s14scienceAmazonas-partner-card">
                            <div>
                                <div className="s14scienceAmazonas-partner-card-img-wrapper">
                                    <img src={nls}/>
                                </div>
                                <div className="s14scienceAmazonas-partner-card-title">Finnish Geospatial Research Institute</div>
                                <div className="s14scienceAmazonas-partner-card-subtitle">Kirkkonummi (FIN)</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Mika Karjalainen</div>
                                <div className="s14scienceAmazonas-partner-card-person">Ms. Samantha Wittke</div>
                                <div className="s14scienceAmazonas-partner-card-person">Ms. Kirsi Karila</div>
                                <div className="s14scienceAmazonas-partner-card-person">Dr. Eetu Puttonen</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="studies">
                    <div>
                        <h2>PILOT STUDY SITES</h2>
                        <h3>Madre de Dios: Forest loss along the Interoceanic Highway</h3>
                        <p>The region of Madre de Dios in Peru (covering 217,477 km2)  is known as the ‘Capital of Biodiversity’ in south eastern Peru, with diverse flora and fauna and expanses of primary humid tropical rainforests. It has been selected as a pilot study site because of the complexity of land use and forest loss occurring in its tropical forests. This involves (i) the clearance for sustainable agriculture and pastoral farms, commonly followed by land abandonment (ii) selective removal of timber species from intact forests, and (iii) legal and illegal mining for gold, including very small-scaled clandestine operations. The Interoceanic Highway (Carretera Interoceanica Sur, IOH) runs through the region and has promoted economic integration and development by connecting Brazil and Bolivia to the Pacific.</p>

                        <h3>Manaus: Uncontrolled wildfires</h3>
                        <p>
                            The forests surrounding Manaus host remarkably diverse flora and fauna, and a wide range of landscapes including large fringing floodplains inundated for several months and non-flooded uplands. An area in the Brazilian State of Amazonia (covering 388,627 km2 of the municipalities of Manaus, Manaquiri, Iranduba, Careiro, Careiro da Várzea and Autazes) has been selected as a pilot study site because of its representativeness and central location in the Amazon basin, good data availability (a great number of forest plots as well as  terrestrial LiDAR transects) and its landscape diversity and complexity of land use dynamics. This area is known to suffer up to 20% of the total wildfires in the Amazon, and the number of wildfires detected by the INPE Wildfire Program has increased 400% in 2019, compared to 2018.
                        </p>

                        <h3>Mato grosso: Ecosystem destruction in the Xingú river basin</h3>
                        <p>
                            The north of Mato Grosso state is located in the southernmost extent of the Amazon forests in Brazil. It has been chosen as a pilot study site (covering 388,627 km2) because of its status as a transition area between the Cerrado and Amazon, being one of Brazilian states with the highest deforestation rate, and with the most dynamic changes in vegetation and land use in Brazil. The Xingú river basin located within the study site has seen a large expansion of agribusiness, the illegal occupation of land, and the construction of illegal highways that have accelerated the destruction of its ecosystem.
                        </p>
                    </div>
                </section>
                <section id="news">
                    <div>
                        <h2>NEWS</h2>
                        <p>The progress of Sentinel-1 for Science Amazonas, the release of new datasets and publications will be announced here during the course of the project.</p>
                    </div>
                </section>
                <section id="contact" className="ptr-dark">
                    <div>
                        <h2>CONTACT</h2>
                        <div>The S14Science Amazonas project consortium is lead by GISAT s.r.o.</div>
                        <h3>Project coordinator</h3>
                        <div>Dr. Neha Joshi</div>

                        <h3>Send us your feedback</h3>
                        <div>GISAT s.r.o., Milady Horakove 57, 170 00 Praha 7, Czech Republic</div>
                        <div>(+420) 270-003-735</div>
                        <div><a href="http://gisat.cz/content/en" target="_blank">www.gisat.cz</a></div>

                        <div className="credits">S1 for Science Amazonas project has received funding from ....</div>
                    </div>
                </section>


            </div>
        );
    }
}

export default Page;