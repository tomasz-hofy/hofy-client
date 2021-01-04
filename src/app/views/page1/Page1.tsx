import React, { FC } from 'react';

import { Icon } from '../../../components/icons/Icon';
import { SvgIcon } from '../../../components/icons/SvgIcon';
import { Box } from '../../../components/theme/Box';
import { Color } from '../../../components/theme/Color';
import { Font } from '../../../components/theme/Font';
import { useProducts } from '../../store/product/useProducts';

export const Page1: FC = () => {
    const { data, isLoading, isLoadingError } = useProducts();

    if (isLoadingError) {
        return <Box>Error</Box>;
    }

    if (isLoading) {
        return <Box>Loading</Box>;
    }

    return (
        <Box>
            <Font size={24} paddingVertical={16}>
                Page 4
            </Font>
            {data?.map((v, index) => {
                return <p key={index}>{v.label}</p>;
            })}
            <Icon marginTop={16} svg={SvgIcon.Account} iconSize={30} />
            <Icon marginTop={16} svg={SvgIcon.Account} iconSize={30} raw />
            <Icon marginTop={16} svg={SvgIcon.Account} iconSize={30} color={Color.Red} />
        </Box>
    );
};
