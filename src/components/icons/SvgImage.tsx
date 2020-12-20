import React, { CSSProperties, FC, SVGAttributes } from 'react';

export interface SvgProps {
    svg: Svg;
}

export interface SvgImageProps extends SvgProps {
    style?: CSSProperties;
    attributes?: SVGAttributes<HTMLDivElement>;
    className?: string;
}

export const SvgImage: FC<SvgImageProps> = props => {
    const SvgItem = props.svg;
    const attributes = props.attributes || {};
    return <SvgItem className={props.className} style={props.style} {...attributes} />;
};
