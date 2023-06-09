import * as React from "react";

import Svg, { SvgProps, Path } from "react-native-svg";

const SvgLockRounded = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.818 7.157a5.157 5.157 0 1 1 10.314 0V9.22c.134.007.262.015.384.025.612.05 1.148.155 1.645.408a4.193 4.193 0 0 1 1.832 1.832c.253.497.359 1.034.409 1.645.048.593.048 1.326.048 2.235V16.221c0 .908 0 1.641-.049 2.235-.05.61-.155 1.148-.408 1.644a4.192 4.192 0 0 1-1.832 1.832c-.497.254-1.034.359-1.645.409-.593.048-1.326.048-2.235.048H8.67c-.909 0-1.642 0-2.235-.048-.611-.05-1.148-.155-1.645-.409A4.192 4.192 0 0 1 2.957 20.1c-.253-.496-.359-1.033-.409-1.644-.048-.594-.048-1.327-.048-2.235V15.366c0-.909 0-1.642.048-2.235.05-.611.156-1.148.409-1.645a4.192 4.192 0 0 1 1.832-1.832c.497-.253 1.034-.359 1.645-.408.122-.01.25-.018.384-.025V7.157Zm8.637 0v2.04h-6.96v-2.04a3.48 3.48 0 0 1 6.96 0Zm-8.885 3.76c-.507.041-.799.119-1.02.231a2.516 2.516 0 0 0-1.099 1.1c-.112.22-.19.512-.231 1.02-.042.516-.043 1.18-.043 2.134v.783c0 .953 0 1.617.043 2.134.041.508.119.8.231 1.02.241.473.626.858 1.1 1.1.22.112.512.189 1.02.23.516.043 1.18.043 2.134.043h6.54c.953 0 1.618 0 2.135-.043.507-.041.799-.118 1.02-.23a2.517 2.517 0 0 0 1.099-1.1c.112-.22.19-.512.231-1.02.042-.517.043-1.181.043-2.134v-.783c0-.953 0-1.617-.043-2.135-.041-.507-.119-.799-.231-1.02a2.516 2.516 0 0 0-1.1-1.099c-.22-.112-.512-.19-1.02-.231-.516-.042-1.18-.043-2.134-.043h-6.54c-.953 0-1.618 0-2.135.043Zm6.365 5.58a1.918 1.918 0 0 0-.96-3.583 1.92 1.92 0 0 0-.96 3.582v1.696a.96.96 0 0 0 1.92 0v-1.696Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLockRounded;