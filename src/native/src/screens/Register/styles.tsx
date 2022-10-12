import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../utils/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
    paddingBottom: 60,
  },
  formStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 2},
        shadowColor: Colors.white,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  header: {
    fontSize: 22,
    color: Colors.white,
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  bottomText: {color: Colors.black, marginEnd: 5},
  signInBtn: {color: Colors.accent},
  btn: {alignSelf: 'center'},
  logo: {
    height: 150,
    alignSelf: 'center',
  },
  img: {
    height: normalize(105),
    width: '100%',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
});
export default styles;
