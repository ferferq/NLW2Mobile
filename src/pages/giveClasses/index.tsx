import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesImg from '../../assets/images/give-classes-background.png';

import styles from './style';
import { useNavigation } from '@react-navigation/native';


function GiveClasses () {
const navegation = useNavigation ();

function handleNavigateBack() {
    navegation.goBack();
}

    return ( 
    <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={giveClassesImg} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
        </ImageBackground>

        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}>Tudo bem</Text>
        </RectButton>   
    </View>
    );
}

export default GiveClasses;