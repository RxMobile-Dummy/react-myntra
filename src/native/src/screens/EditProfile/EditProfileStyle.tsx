import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
    padding: 20,
  },
  dataContainer: {
    flexDirection: 'column',
  },
  input: {width: '100%'},
  firstRow: {
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberView: {
    marginStart: 10,
    justifyContent: 'center',
  },
  changeBtn: {
    borderColor: Colors.lightGrey,
    margin: 10,
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
  },
  genderView: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 2,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderBtn: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  verticalLine: {
    borderLeftColor: Colors.lightGrey,
    borderLeftWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  dataText: {
    fontSize: 17,
    fontWeight: '400',
    marginTop: 10,
    color: Colors.black,
  },
  editBtn: {
    marginTop: 25,
    borderColor: Colors.accent,
    backgroundColor: Colors.btnPink,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
  },
  btnText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
  },
  cancelBtnText: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '400',
  },
  inputBtn: {
    fontSize: 17,
  },
  line: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  btnCancel: {
    borderRadius: 3,
  },
  btnSave: {
    backgroundColor: Colors.btnPink,
    borderColor: Colors.btnPink,
    borderRadius: 3,
    width: '65%',
  },

  //dialog
  //Dialog styles
  dialogStyle: {
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  dialogCon: {
    padding: 0,
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
  dialogCancelBtnText: {
    color: Colors.lightBlue,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },
  deleteBtnText: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },
  dialogTitle: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
  },
  dialogBody: {
    marginHorizontal: 20,
  },
});
export default styles;
