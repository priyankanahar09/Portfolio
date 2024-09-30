
import React from "react";
import { useLottie } from "lottie-react";

const RenderLottie = ({ animationJSON, style = null }) => {
    const options = {
        animationData: animationJSON,
        loop: true
    };

    const { View } = useLottie(options);

    return <div style={style ? style : {}}>{View}</div>;
};

export default RenderLottie;