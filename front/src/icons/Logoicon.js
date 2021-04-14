import React from "react";
import logo1 from "../assets/img/home/totem1.png";

export const Logoicon = () => (
    <picture>
                                
                                <source srcSet={`${logo1} 1x`} />
                                <img
                                    src={logo1}
                                    width="200"
                                    height="40"
                                    loading="lazy"
                                    alt="Totem"
                                    
                                />
                            </picture>
);
