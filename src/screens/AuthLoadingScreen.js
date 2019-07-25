import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View} from 'react-native' 





 class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? "LoggedIn": "LoggedOut")
}

  render() {
    return (
        <View>
            <ActivityIndicator/>
            <StatusBar barstyle="default"/>
        </View>

    );
  }
}

export default AuthLoadingScreen


