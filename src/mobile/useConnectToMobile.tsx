import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useMobile, InitData, OnchangeFunction } from './useMobile';





interface MobileConnectProps {
    label?: string;
}

export const useMobileConnect = (initData: InitData | (() => InitData), connect: boolean = true) => {
    const mobile = useMobile(initData, true);

    return null;

};
