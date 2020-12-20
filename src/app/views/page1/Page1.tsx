import React, { FC } from 'react';
import { Icon } from '../../../components/icons/Icon';
import { Box } from '../../../components/theme/Box';
import { useProducts } from '../../store/product/useProducts';
import { SvgIcon } from '../../../components/icons/SvgIcon';
import { Font } from '../../../components/theme/Font';
import { Color } from '../../../components/theme/Color';

export const Page1: FC = () => {
    const { data, isLoading } = useProducts();

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
