import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';
import PageHeader from '../../components/Pageheader';
import TeacherItem from '../../components/Teacheritem';

function Favorites () {

    return ( 
    <View style={styles.container}>
    <PageHeader title="Seus Favoritos" />

        <ScrollView style={styles.teacherFavorite} contentContainerStyle= {{
            paddingHorizontal: 16,
            paddingBottom:16,
        }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        </ScrollView>

    </View>
    );
}

export default Favorites;