import React from "react";
import logo2 from "../assets/img/home/totem2.png";

export const LogoSmallIcon = () => (
    <picture>
                                
    <source srcSet={`${logo2} 1x`} />
    <img
        src={logo2}
        width="200"
        height="40"
        loading="lazy"
        alt="Totem"
        
    />
</picture>
);
 