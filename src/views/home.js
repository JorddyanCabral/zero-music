import React, { Component } from 'react'

import Navbar from '../components/navbar';
import Apresentation from '../components/apresentation';
import Section from '../components/section';
import Music from '../components/music';
import Footer from '../components/footer';

export default class Home extends Component {
     render() {
          return (
               <div>
                    <Navbar />
                    <Apresentation />

                    <Section 
                         title="Dê um Break Up na sua rotina com:"
                         icon="star"
                    >
                         <ul className="music-list">
                              <li>
                                   <Music 
                                        title="Break up" author="Digimon" 
                                   />
                              </li>
                              <li>
                                   <Music 
                                        title="LIVE for LIFE" author="Ben-to" 
                                   />
                              </li>
                              <li>
                                   <Music 
                                        title="Taiyo Iwaku Moeyo Chaos" 
                                        author="Haiyore! Nyaruko-san"
                                   /> 
                              </li>
                              <li>
                                   <Music 
                                        title="Hyadain no Kakakata Kataomoi-C"
                                        author="Nichijou"
                                   />
                              </li>
                         </ul>
                    </Section>

                    <Section 
                         title="Prefere músicas que estarão lá por você?"
                         icon="heart"
                    />

                    <Footer />
               </div>
          );
     }
}
