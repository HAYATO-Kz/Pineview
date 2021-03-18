import React from 'react'

import { IconWrapper } from './TouchableIcon.style'

interface TouchableIconProps {
    onPress: () => void
    icon: React.ReactNode
}

export const TouchableIcon = (props:TouchableIconProps) => {
    const {onPress, icon } = props;

    return <IconWrapper onPress={onPress} >
        {icon}
    </IconWrapper>
}