import { styled } from "@/styles/stitches.config";
import { keyframes } from "@stitches/react";

const wave1Animation =  keyframes({
    '0%': { transform: 'translateX(-2000px)' },
    '100%': { transform: 'translateX(-2000px)'  },
})
const scaleUp = keyframes({
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.5)' },
  });

export const DivSvg = styled("svg", {

    position:"absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "$grey1",
    


    '&.wave-1': {
        opacity:0.5,
        color: "blue",
        animation: `${wave1Animation} 3s ease-in-out infinite`,
    },
  

})
