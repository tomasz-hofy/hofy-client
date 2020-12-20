import React, { FC, HTMLAttributes, MouseEventHandler, useRef } from 'react';
import useClickAway from 'react-use/lib/useClickAway';

interface ClickOutsideProps extends HTMLAttributes<HTMLDivElement> {
    onClickOutside: MouseEventHandler;
}

export const ClickOutside: FC<ClickOutsideProps> = props => {
    const { onClickOutside, ...restProps } = props;

    const ref = useRef(null);
    useClickAway(ref, onClickOutside as any);

    return <div {...restProps} ref={ref} />;
};
