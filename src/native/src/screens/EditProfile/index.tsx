import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './EditProfileStyle';
import {Props} from './IEditProfile';
import {String} from '../../constants/String';
import TransButton from '../../components/Button/TransButton';
import {TextInputField} from '../../components/text_input/TextInputField';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/Color';
import {PressableInputField} from '../../components/text_input/PressableInputField';
import Modal from 'react-native-modal';

const EditProfileScreen: React.FC<Props> = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateValue, setDateValue] = useState('');
  const [open, setOpen] = useState(false);

  const [isMale, setMaleSelected] = useState(false);
  const [isFemale, setFemaleSelected] = useState(false);

  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const toggleRemoveModal = () => {
    setEditModalVisible(!isEditModalVisible);
  };

  const onMaleSelect = () => {
    setMaleSelected(true);
    setFemaleSelected(false);
  };

  const onFemaleSelect = () => {
    setFemaleSelected(true);
    setMaleSelected(false);
  };

  const onDateSelect = (date: any) => {
    setOpen(false);
    const formattedDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    setSelectedDate(date);
    setDateValue(formattedDate);
  };

  function changePasswordDialog() {
    return (
      <Modal isVisible={isEditModalVisible} animationOut="fadeOutDown">
        <View style={styles.dialogStyle}>
          <View style={styles.dialogCon}>
            <Text style={styles.dialogTitle}>{String.changePasswordTitle}</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.dialogBody}>
            <TextInputField
              placeholder={`${String.oldPassword} *`}
              onTextChange={() => {}}
              onBlur={() => {}}
              value="sfdsd"
              inputStyle={styles.input}
            />
            <TextInputField
              placeholder={`${String.newPassword} *`}
              onTextChange={() => {}}
              onBlur={() => {}}
              value="sfdsd"
              inputStyle={styles.input}
            />
            <TextInputField
              placeholder={`${String.confirmPassword} *`}
              onTextChange={() => {}}
              onBlur={() => {}}
              value="sfdsd"
              inputStyle={styles.input}
            />
          </View>
          <View style={styles.bottomCon}>
            <TouchableOpacity
              onPress={toggleRemoveModal}
              style={styles.bottomBtn}
            >
              <Text style={styles.cancelBtnText}>{String.Cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleRemoveModal}
              style={[
                styles.bottomBtn,
                {
                  borderLeftColor: Colors.lightGrey,
                  borderLeftWidth: 1,
                  backgroundColor: Colors.btnPink,
                },
              ]}
            >
              <Text style={styles.deleteBtnText}>{String.Save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={selectedDate}
        onConfirm={onDateSelect}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <ScrollView style={{margin: Platform.OS == 'ios' ? 20 : 0}}>
        <Text style={styles.title}>{String.profileDetails}</Text>
        <View style={styles.line} />
        <View style={styles.dataContainer}>
          <View style={styles.firstRow}>
            <View style={styles.numberView}>
              <Text>Mobile Number*</Text>
              <Text>1234567898</Text>
            </View>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.inputBtn}>Change</Text>
            </TouchableOpacity>
          </View>
          <TextInputField
            placeholder={`${String.fullName} *`}
            onTextChange={() => {}}
            onBlur={() => {}}
            value="sfdsd"
            inputStyle={styles.input}
          />
          <TextInputField
            placeholder={`${String.email} *`}
            onTextChange={() => {}}
            onBlur={() => {}}
            value="sfdsd"
            disabled={true}
            inputStyle={styles.input}
          />
          <View style={styles.genderView}>
            <TouchableOpacity style={styles.genderBtn} onPress={onMaleSelect}>
              <Text style={styles.inputBtn}>Male</Text>
              {isMale ? (
                <Ionicons name="checkmark" size={22} color={Colors.btnPink} />
              ) : undefined}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderBtn, styles.verticalLine]}
              onPress={onFemaleSelect}
            >
              <Text style={styles.inputBtn}>Female</Text>
              {isFemale ? (
                <Ionicons name="checkmark" size={22} color={Colors.btnPink} />
              ) : undefined}
            </TouchableOpacity>
          </View>
          <PressableInputField
            placeholder="Birthday (dd/mm/yyyy) *"
            value={dateValue}
            onPressButton={() => {
              setOpen(true);
            }}
          />
          <TextInputField
            placeholder={`${String.location} *`}
            onTextChange={() => {}}
            onBlur={() => {}}
            value="sfdsd"
            inputStyle={styles.input}
          />
          <View style={styles.secondRow}>
            <TransButton
              containerStyle={styles.btnCancel}
              textStyle={styles.cancelBtnText}
              text={String.Cancel}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <TransButton
              containerStyle={styles.btnSave}
              text={String.saveDetails}
              textStyle={styles.btnText}
            />
          </View>
        </View>
        <TransButton
          onPress={() => {
            setEditModalVisible(true);
          }}
          text={String.changePassword}
          containerStyle={styles.editBtn}
          textStyle={styles.btnText}
        />
      </ScrollView>
      {changePasswordDialog()}
    </SafeAreaView>
  );
};

export default EditProfileScreen;
