import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './style';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png'

function Landing () {
    const navagation = useNavigation ();

    function hadleNavigateToGiveClassesPage () {
        navagation.navigate('GiveClasses');
    }

    function hadleNavigateToStudyPages () {
        navagation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
            <RectButton onPress={hadleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                <Image source={studyIcon}></Image>
                <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>

            <RectButton onPress={hadleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                <Image source={giveClassesIcon}></Image>
                <Text style={styles.buttonText}>Dar aulas</Text>
            </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;