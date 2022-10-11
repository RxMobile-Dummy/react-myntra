import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './ProfileStyle';
import {Props} from './IProfile';
import {String} from '../../constants/String';
import TransButton from '../../components/Button/TransButton';

const ProfileScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{margin: Platform.OS == 'ios' ? 20 : 0}}>
        <Text style={styles.title}>{String.profileDetails}</Text>
        <View style={styles.line} />
        <View style={styles.dataContainer}>
          <View style={styles.firstRow}>
            <Text style={styles.dataText}>{String.fullName}</Text>
            <Text style={styles.dataText}>{String.mobileNumber}</Text>
            <Text style={styles.dataText}>{String.email}</Text>
            <Text style={styles.dataText}>{String.gender}</Text>
            <Text style={styles.dataText}>{String.dob}</Text>
            <Text style={styles.dataText}>{String.location}</Text>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.dataText}>test user upda</Text>
            <Text style={styles.dataText}>1234567898</Text>
            <Text style={styles.dataText}>arjun@yopmail.com</Text>
            <Text style={styles.dataText}>male</Text>
            <Text style={styles.dataText}>1996-02-20</Text>
            <Text style={styles.dataText}>America</Text>
          </View>
        </View>
        <TransButton
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          text={String.edit}
          containerStyle={styles.editBtn}
          textStyle={styles.btnText}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
