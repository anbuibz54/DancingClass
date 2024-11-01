import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import type { RootBottomTabsParamList } from '../../navigation/BottomTabStack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import ROUTES from '../../navigation/routes';

type Props = BottomTabScreenProps<RootBottomTabsParamList,'home'>;
export default function Home(props:Props){
    return(
        <View>Home Screen
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate(ROUTES.PROFILE);
            }}> Go to Profile</TouchableOpacity>
        </View>
    );
}
