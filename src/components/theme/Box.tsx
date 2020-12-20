import styled, { css, CSSObject } from 'styled-components';
import { Color } from './Color';

type JustifyContent = 'flex-start' | 'space-between' | 'space-around' | 'flex-end' | 'center';
export type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

export type NumberValues = 0 | 2 | 4 | 6 | 8 | 12 | 16 | 24;

export interface MarginBoxProps {
    margin?: NumberValues;
    marginHorizontal?: NumberValues;
    marginVertical?: NumberValues;
    marginLeft?: NumberValues;
    marginRight?: NumberValues;
    marginTop?: NumberValues;
    marginBottom?: NumberValues;
}

export interface PaddingBoxProps {
    padding?: NumberValues;
    paddingHorizontal?: NumberValues;
    paddingVertical?: NumberValues;
    paddingLeft?: NumberValues;
    paddingRight?: NumberValues;
    paddingTop?: NumberValues;
    paddingBottom?: NumberValues;
}

export interface BoxProps extends MarginBoxProps, PaddingBoxProps {
    flex?: number | 'auto';
    shrink?: number;

    centered?: boolean;
    row?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    columnReverse?: boolean;
    justify?: JustifyContent;
    alignItems?: AlignItems;
    alignContent?: AlignItems;
    alignSelf?: AlignItems;

    bg?: Color;

    wrap?: boolean;
    relative?: boolean;

    fullWidth?: boolean;
    fullHeight?: boolean;
    fullSize?: boolean;
    maxFullWidth?: boolean;
    maxFullHeight?: boolean;
    width?: string | number;
    height?: string | number;
    rect?: number;

    className?: string;
    cursor?: string;

    pointer?: boolean;

    overflow?: 'hidden' | 'auto';

    coverAll?: boolean;
}

const filteredAttributes = ['size', 'width', 'height', 'cursor', 'pointer', 'wrap', 'onResize', 'overflow', 'color'];

export const marginStyleGenerator = ({
    margin,
    marginHorizontal,
    marginVertical,
    marginLeft = marginHorizontal,
    marginRight = marginHorizontal,
    marginTop = marginVertical,
    marginBottom = marginVertical,
}: MarginBoxProps) =>
    cssToRem({
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
    });

export const paddingStyleGenerator = ({
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingLeft = paddingHorizontal,
    paddingRight = paddingHorizontal,
    paddingTop = paddingVertical,
    paddingBottom = paddingVertical,
}: PaddingBoxProps) =>
    cssToRem({
        padding,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
    });

export const Box = styled.div.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => !filteredAttributes.includes(prop) && defaultValidatorFn(prop),
})<BoxProps>(
    ({
        flex,
        shrink,
        row,
        rowReverse,
        column,
        columnReverse,
        centered,
        justify,
        alignItems,
        alignContent,
        alignSelf,
        bg,
        wrap,
        relative,

        cursor,
        fullWidth = false,
        fullHeight = false,
        fullSize = false,
        maxFullWidth = false,
        maxFullHeight = false,
        width,
        height,
        rect,
        pointer,
        overflow,
        coverAll,
        // tslint:disable-next-line:trailing-comma
        ...rest
    }) => {
        const styles: CSSObject = {};

        if (flex) {
            if (flex === 'auto') {
                styles.flex = 1;
                styles.minWidth = 0;
                styles.minHeight = 0;
            } else {
                styles.flex = flex.toString();
            }
        }

        if (shrink) {
            styles.shrink = shrink.toString();
        }

        if (row) {
            styles.display = 'flex';
            styles.flexDirection = 'row';
            styles.alignItems = 'center';
        }

        if (rowReverse) {
            styles.display = 'flex';
            styles.flexDirection = 'row-reverse';
            styles.alignItems = 'center';
        }

        if (column) {
            styles.display = 'flex';
            styles.flexDirection = 'column';
        }

        if (columnReverse) {
            styles.display = 'flex';
            styles.flexDirection = 'column-reverse';
        }

        if (centered) {
            styles.display = 'flex';
            styles.justifyContent = 'center';
            styles.alignItems = 'center';
        }

        if (justify) {
            styles.justifyContent = justify;
        }

        if (wrap) {
            styles.flexWrap = 'wrap';
        }

        if (alignItems) {
            styles.display = 'flex';
            styles.alignItems = alignItems;
        }

        if (alignContent) {
            styles.display = 'flex';
            styles.alignItems = alignContent;
        }

        if (alignSelf) {
            styles.display = 'flex';
            styles.alignSelf = alignSelf;
        }

        if (bg) {
            styles.backgroundColor = bg;
        }

        if (relative) {
            styles.position = 'relative';
        }

        if (fullWidth) {
            styles.width = '100%';
        }

        if (fullHeight) {
            styles.height = '100%';
        }

        if (fullSize) {
            styles.width = '100%';
            styles.height = '100%';
        }

        if (maxFullWidth) {
            styles.maxWidth = '100%';
        }

        if (maxFullHeight) {
            styles.maxHeight = '100%';
        }

        if (cursor) {
            styles.cursor = cursor;
        }

        if (pointer) {
            styles.cursor = 'pointer';
        }
        if (overflow) {
            styles.overflow = overflow;
        }

        const paddings = paddingStyleGenerator(rest);

        const margins = marginStyleGenerator(rest);

        if (rect) {
            styles.width = `${rect}px`;
            styles.height = `${rect}px`;
        }

        if (width) {
            styles.width = sizeToValue(width);
        }

        if (height) {
            styles.height = sizeToValue(height);
        }

        if (coverAll) {
            styles.position = 'absolute';
            styles.top = 0;
            styles.left = 0;
            styles.bottom = 0;
            styles.right = 0;
        }

        return { ...styles, ...paddings, ...margins };
    },
);

export const CenteredBox = styled.div<{ absolute?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    ${p =>
        p.absolute &&
        css`
            position: absolute;
            top: 0;
            left: 0;
        `}
`;

const sizeToValue = (v: string | number) => {
    if (typeof v === 'number') {
        return `${v}px`;
    }
    return v;
};

const cssToRem = (i: CSSObject) => {
    const styles: CSSObject = {};
    Object.keys(i).forEach(k => {
        if (i[k] !== undefined) {
            styles[k] = `${(i[k] as number) / 16}rem`;
        }
    });
    return styles;
};
