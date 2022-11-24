import { Text,Button } from "react-native"
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = ()=>{
//

    const onLoginPress = () =>  {
        GoogleSignin.configure({
            androidClientId: '955692934219-ihct917m45htrvc8iq4udec713i6lbg9.apps.googleusercontent.com',
            iosClientId: '955692934219-37upieeuidtpo05j4amkrd740arrm7gk.apps.googleusercontent.com',
        });
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
            if (hasPlayService) {
                 GoogleSignin.signIn().then((userInfo) => {
                           console.log(JSON.stringify(userInfo))
                 }).catch((e) => {
                 console.log("ERROR IS: " + JSON.stringify(e));
                 })
            }
    }).catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
    })
    }
    return (
        <>
            <Text>GoogleLogin</Text>
            <Button title={'Sign in with Google'} onPress={onLoginPress} />
        </>
    )
}

export default GoogleLogin;