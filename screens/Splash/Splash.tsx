import * as React from 'react';
import { View,Text} from 'react-native';
import { useAuth, hydrateAuth } from '../../core/store/auth/auth-slice';


export default function Splash() {
    const authState = useAuth();
    React.useEffect(() => {
        hydrateAuth()
    }, []);
    React.useEffect(()=>{
        //Do somthing here for authentication
    },[authState]);
    return (
        <View><Text>Splash Screen</Text></View>
    );
}
