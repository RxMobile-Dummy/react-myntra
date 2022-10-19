import {Dimensions, StyleSheet} from 'react-native'
import { Colors } from '../../constants/Color'
import { normalize } from '../../utils/commonStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '90%',
        alignSelf: 'center',
      },
      img: {
        height: normalize(105),
        width: '100%',
      },
      header: {
        backgroundColor: Colors.white,
        paddingTop: normalize(15),
        paddingBottom: normalize(20),
        width: '100%',
        height : Dimensions.get("window").height /2
      },
      lgTxt: {
        fontSize: normalize(12),
        color: Colors.black,
        fontWeight: '600',
      },
      box: {
        width: '90%',
        alignSelf: 'center',
      },
      elContainer: {
        marginTop: normalize(10),
        height: normalize(65),
      },
      elTxt: {
        fontSize: normalize(14),
        color: '#585757',
      },
      footer: {
        marginTop: normalize(10),
        paddingLeft: normalize(5),
      },
      txt: {
        fontSize: normalize(14),
        color: '#585757',
      },
      subTxt: {
        fontSize: normalize(14),
        color: Colors.accent,
        fontWeight: '800',
      },
      top: {
        marginTop: normalize(15),
      },
      lgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: normalize(45),
      },
      lg: {
        fontSize: normalize(16),
        color: '#fff',
      },
      bottomContainer: {
        marginTop: '19%',
        alignSelf: 'center',
      },
      bottomTxt: {
        fontSize: normalize(14),
        color: '#6c757d',
      },
      boldTxt: {
        fontSize: normalize(14),
        color: Colors.accent,
        fontWeight: 'bold',
      },
      bottom : {
        position : "absolute",
        bottom : 6,
        justifyContent : "center",
        alignItems : "center",
        alignSelf : "center"
    },
    txtR : {
        fontSize : normalize(14),
        color : Colors.accent,
        fontWeight : "bold"
    }
})