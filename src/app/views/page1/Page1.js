"use strict";
exports.__esModule = true;
exports.Page1 = void 0;
var react_1 = require("react");
var Icon_1 = require("../../../components/icons/Icon");
var SvgIcon_1 = require("../../../components/icons/SvgIcon");
var Box_1 = require("../../../components/theme/Box");
var Color_1 = require("../../../components/theme/Color");
var Font_1 = require("../../../components/theme/Font");
var useProducts_1 = require("../../store/product/useProducts");
var Page1 = function () {
    var _a = useProducts_1.useProducts(), data = _a.data, isLoading = _a.isLoading, isLoadingError = _a.isLoadingError;
    if (isLoadingError) {
        return <Box_1.Box>Error</Box_1.Box>;
    }
    if (isLoading) {
        return <Box_1.Box>Loading</Box_1.Box>;
    }
    return (<Box_1.Box>
            <Font_1.Font size={24} paddingVertical={16}>
                Page 4
            </Font_1.Font>
            {data === null || data === void 0 ? void 0 : data.map(function (v, index) {
        return <p key={index}>{v.label}</p>;
    })}
            <Icon_1.Icon marginTop={16} svg={SvgIcon_1.SvgIcon.Account} iconSize={30}/>
            <Icon_1.Icon marginTop={16} svg={SvgIcon_1.SvgIcon.Account} iconSize={30} raw/>
            <Icon_1.Icon marginTop={16} svg={SvgIcon_1.SvgIcon.Account} iconSize={30} color={Color_1.Color.Red}/>
        </Box_1.Box>);
};
exports.Page1 = Page1;
