import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface PositionedProps {
    top?: number | string;
    right?: number | string;
    left?: number | string;
    bottom?: number | string;
    zIndex?: number;
}

export const Positioned: FC<PositionedProps> = ({ children, ...rest }) => (
    <PositionedWrapper {...rest}>{children}</PositionedWrapper>
);

const propValue = (k: keyof PositionedProps) => (p: PositionedProps) => {
    if (p[k] === undefined) {
        return false;
    }
    if (typeof p[k] === 'string') {
        return css`
            ${k}:${p[k]};
        `;
    }
    return css`
        ${k}:${p[k]}px;
    `;
};

const PositionedWrapper = styled.div<PositionedProps>`
    position: absolute;
    ${p =>
        p.zIndex &&
        css`
            z-index: ${p.zIndex};
        `}
    ${propValue('top')}
    ${propValue('bottom')}
    ${propValue('left')}
    ${propValue('right')}
`;
