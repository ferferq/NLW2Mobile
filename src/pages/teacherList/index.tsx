import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import styles from './style';
import PageHeader from '../../components/Pageheader';
import TeacherItem from '../../components/Teacheritem';

function TeacherList () {

    return ( 
    <View style={styles.container}>
        <PageHeader title="Proffy Disponiveis">
            <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput style={styles.input}
                    placeholder="Qual é a matéria?"
                    placeholderTextColor="#c1bccc" 
                />

                <View style={styles.inputgroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput style={styles.input}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc" 
                         />
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput style={styles.input}
                            placeholder="Qual horário?"
                            placeholderTextColor="#c1bccc" 
                         />
                    </View>

                </View>
            </View>
        </PageHeader>

        <ScrollView style={styles.teacherList} contentContainerStyle= {{
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

export default TeacherList;