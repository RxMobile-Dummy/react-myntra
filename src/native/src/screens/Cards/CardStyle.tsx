import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font} from '../../constants/Font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
    paddingBottom: 60,
  },
  addCardCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
    color: Colors.black,
    textAlign: 'center',
  },
  addCardbtn: {
    marginTop: 15,
    borderColor: Colors.grey,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 3,
  },

  //Dialog styles
  dialogStyle: {
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  dialogCon: {
    padding: 20,
  },
  bottomCon: {
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBtn: {
    paddingVertical: 12,
    width: '50%',
  },
  cancelBtnText: {
    color: Colors.lightBlue,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },
  deleteBtnText: {
    color: Colors.accent,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },
  dialogTitle: {
    color: Colors.grey,
    fontWeight: '400',
    fontSize: 16,
  },
  textData: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: 17,
  },
  cardInputCon: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  cardInputSecondRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardInputBottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomButtons: {
    borderColor: Colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 30,
  },
  bottomButtonText: {fontSize: 16, color: Colors.black, fontWeight: '400'},
});
export default styles;
