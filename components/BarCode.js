import React, {useState, useRef} from 'react';

import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  PermissionsAndroid,
} from 'react-native';

// import BarcodeMask from 'react-native-barcode-mask';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/Ionicons';
import {RNCamera} from 'react-native-camera';
import {PermissionsAndroid} from 'react-native';
function BarCodeSCanner({icon, size, name, showModal, setShowModal}) {
  const ref = useRef();
  const [bool, setBool] = useState(false);
  React.useEffect(() => {
    setBool(true);
  }, []);
  return (
    <>
      {bool && (
        <QRCodeScanner
          ref={ref}
          onRead={(e) => {
            console.log('e', e);
            setShowModal(false);
          }}
          flashMode={RNCamera.Constants.FlashMode.off}
          cameraStyle={{height: 280}}
          // containerStyle={{ flex: 0.5 }}
          // markerStyle={{ flex: 0.5 }}
          showMarker
          topViewStyle={{backgroundColor: 'black'}}
          bottomViewStyle={{backgroundColor: 'black'}}
          // customMarker={
          //   <BarcodeMask
          //     height={'100%'}
          //     width={'100%'}
          //     edgeColor={'black'}
          //     edgeWidth={20}
          //     edgeHeight={20}
          //     edgeBorderWidth={5}
          //     showAnimatedLine={false}
          //   />
          // }
        />
      )}
    </>
  );
}

export default BarCodeSCanner;
