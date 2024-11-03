import * as React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import type { RootBottomTabsParamList } from '../../navigation/BottomTabStack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import ROUTES from '../../navigation/routes';

type Props = BottomTabScreenProps<RootBottomTabsParamList,'home'>;
export default function Home(props:Props){
    return(
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate(ROUTES.PROFILE);
            }}><Text>Go to Profile</Text></TouchableOpacity>
        </View>
    );
}
