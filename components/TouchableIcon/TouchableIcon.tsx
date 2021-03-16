import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { IconWrapper } from './TouchableIcon.style'

interface TouchableIconProps {
    onPress: () => {}
    icon: React.ReactNode
}

export const TouchableIcon = (props:TouchableIconProps) => {
    const {onPress, icon } = props;

    return <IconWrapper onPress={onPress} >
        {icon}
    </IconWrapper>
}