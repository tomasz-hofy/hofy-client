interface SvgProps {
    className?: string;
    style?: any;
    xmlns?: string;
}

type Svg = (props: SvgProps) => React.ReactElement<SvgProps>;

declare module '*.svg' {
    const content: Svg;
    export default content;
}
