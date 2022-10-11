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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstRow: {
    width: '40%',
  },
  secondRow: {
    width: '60%',
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
  },
  line: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 15,
  },
});
export default styles;
