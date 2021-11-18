import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './style';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem () {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri:'https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/70772040_2400281033391924_3556862370020065280_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=D4i94sXHQbkAX_d8Bjr&_nc_ht=scontent-gru2-1.xx&oh=b1fb7775d72df903303168005fcc0b35&oe=5F5A7921'}} />
                <View style={styles.profileInfo} >
                    <Text style={styles.name}>Fernando Alves</Text>
                    <Text style={styles.subject}>Quimica</Text>
                </View>
            </View>

            <Text style={styles.bio}>qualquer coisa só para fazer algun teste {'\n'}{'\n'}  pq depois vai pegar do bando de dados</Text>
       
            <View style={styles.footer}>
                <Text style={styles.price}>Preço/hora {'   '}
                <Text  style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsConteiner}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutLineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    );
}

export default TeacherItem;