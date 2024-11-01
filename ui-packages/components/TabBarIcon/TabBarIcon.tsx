import * as React from 'react';
import { Icon } from 'react-native-paper';

type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
};
const TabBarIcon: React.FC<TabBarIconProps> = (props):React.ReactNode =>{
    return (
        <Icon
            source={props.focused ? 'account' : 'account-outline'}
            size={props.size}
            color={props.color}
        />
    );
}
export default TabBarIcon;
