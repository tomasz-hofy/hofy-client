import { Property } from 'csstype';
import styled, { CSSObject } from 'styled-components';

import { Box, BoxProps } from './Box';
import { fontFamily } from './Theme';
import { Color } from './Color';

export interface FontProps extends BoxProps, FontStyleProps {}

export interface FontStyleProps {
    size?: FontSize;
    weight?: FontWeight;
    color?: Color;
    spacing?: number;
    lineHeight?: LineHeight | number;
    lineHeightPx?: number;
    textAlign?: Property.TextAlign;
    verticalAlign?: 'top' | 'bottom' | 'middle';
    textNoWrap?: boolean;
    textWrap?: boolean;
    upper?: boolean;
    underline?: boolean;
    selectable?: boolean;
    ellipsis?: boolean;
    wordBreak?: boolean;
    whiteSpace?: Property.WhiteSpace;
    textClomp?: number;
    textTransform?: Property.TextTransform;
}

export type LineHeight = 'small' | 'standard' | 'large' | 'xLarge';

export type FontWeight = 'light' | 'medium' | 'regular' | 'bold';

export type FontSize = 24 | 20 | 18 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 8;

const weightToNumber = (fontWeight: FontWeight) => {
    switch (fontWeight) {
        case 'bold':
            return 700;
        case 'regular':
            return 500;
        case 'medium':
            return 400;
        case 'light':
            return 300;
        default:
            return 500;
    }
};

const lineHeightToNumber = (lineHeight: LineHeight | number) => {
    if (typeof lineHeight === 'string') {
        switch (lineHeight) {
            case 'small':
                return 1;
            case 'standard':
                return 1.2;
            case 'large':
                return 1.33;
            case 'xLarge':
                return 1.5;
        }
    }
    return lineHeight;
};

export const textStyleBuilder = ({
    size,
    weight = 'regular',
    color,
    lineHeight = 'standard',
    lineHeightPx,
    textAlign,
    textNoWrap,
    textWrap,
    verticalAlign,
    upper,
    underline,
    selectable,
    ellipsis,
    wordBreak,
    textClomp,
    whiteSpace,
    textTransform,
}: FontStyleProps) => {
    const style: CSSObject = {
        fontFamily,
    };
    if (size) {
        style.fontSize = size;
    }
    if (color) {
        style.color = color;
    }
    if (weight) {
        style.fontWeight = weightToNumber(weight);
    }
    if (lineHeight) {
        style.lineHeight = lineHeightToNumber(lineHeight);
    }
    if (lineHeightPx) {
        style.lineHeight = `${lineHeightPx}px`;
    }
    if (textAlign) {
        style.textAlign = textAlign;
    }
    if (textNoWrap) {
        style.whiteSpace = 'nowrap';
    }
    if (textWrap) {
        style.whiteSpace = 'pre-wrap';
        style.wordWrap = 'normal';
    }
    if (whiteSpace) {
        style.whiteSpace = whiteSpace;
    }
    if (verticalAlign) {
        style.verticalAlign = verticalAlign;
    }
    if (upper) {
        style.textTransform = 'uppercase';
    }
    if (textTransform) {
        style.textTransform = textTransform;
    }
    if (underline) {
        style.textDecoration = 'underline';
    }
    if (selectable) {
        style.userSelect = 'text';
    }
    if (ellipsis) {
        style.textOverflow = 'ellipsis';
    }
    if (wordBreak) {
        style.wordBreak = 'break-word';
    }
    if (textClomp) {
        const lh = lineHeightToNumber(lineHeight);
        style.wordBreak = 'break-word';
        style.lineHeight = lh;
        style.maxHeight = `${lh * textClomp}em`;
        style.textOverflow = 'ellipsis';
        style.overflow = 'hidden';
        style.display = '-webkit-box';
        style['-webkit-line-clamp'] = `${textClomp}`;
        style['-webkit-box-orient'] = 'vertical';
    }
    return style;
};

export const Font = styled(Box)<FontProps>(textStyleBuilder);
