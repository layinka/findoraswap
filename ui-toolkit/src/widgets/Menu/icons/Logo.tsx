import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div {...props}>
      <img src="/images/pancakeswap.png" style={{ maxWidth: '36px' }} />
      <strong>Findora Swap</strong>
    </div>
    
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
