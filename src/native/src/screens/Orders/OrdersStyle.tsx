import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
    paddingBottom: 20,
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
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
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
    fontWeight: '600',
    fontSize: 15,
    marginStart: 3,
  },
  filterIcon: {
    width: '22%',
    borderWidth: 1,
    height: 55,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
