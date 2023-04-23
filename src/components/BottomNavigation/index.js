import React from 'react';
import { SafeAreaView, View,  TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';




const BottomNavigation = () => {


    return (
        <SafeAreaView style={styles.container}>
         
            <View style={styles.bottomContainer}>
                <LinearGradient
                    colors={['#334173', '#5B144C']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
                <View style={styles.bottomControls}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="home-outline" size={25} color="#4FA5D2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="airplane-outline" size={25} color="#4FA5D2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="heart-outline" size={25} color="#4FA5D2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="ellipsis-horizontal" size={25} color="#4FA5D2" />
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default BottomNavigation;

