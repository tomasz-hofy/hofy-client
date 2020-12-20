import styled, { CSSObject } from 'styled-components';

import { MarginBoxProps, marginStyleGenerator } from '../theme/Box';
import { SvgIcon } from './SvgIcon';
import { SvgImage } from './SvgImage';
import { Color } from '../theme/Color';

export interface IconProps extends SvgProps, MarginBoxProps {
    iconSize?: number;
    block?: boolean;
    raw?: boolean;
    transparent?: boolean;
    color?: Color;
}

export const Icon = styled(SvgImage)<IconProps>(({ iconSize, block, transparent, raw = false, color, ...props }) => {
    const styles: CSSObject = {
        display: 'inline-block',
        fill: 'currentColor',
    };

    const margins = marginStyleGenerator(props);

    if (iconSize) {
        styles.width = `${iconSize}px`;
        styles.height = `${iconSize}px`;
        styles.flexShrink = 0;
    }

    if (block) {
        styles.display = 'block';
    }

    if (transparent) {
        styles.fill = 'transparent';
    }

    if (color) {
        styles.fill = color;
    }

    if (!raw) {
        styles['path,rect,g:not(.raw),circle'] = {
            fill: 'inherit',
        };
    }

    return { ...styles, ...margins };
});

export type SvgIconType = keyof typeof SvgIcon;
