import { Button } from "react-native"
import SCREEN_NAME from "../Util/constant"
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {useEffect, useState} from 'react'
import CommonHeader from './CommonHeader'
const HeaderLeft = ({navigation})=>{
    const sideMenuClick = (screenName)=>{
        doCleanUp();
        navigation.navigate(screenName)
    }
    const [modalVisible, setModalVisible] = useState(false);
    const doCleanUp = ()=>{
      // Alert.alert('Modal has been closed.');
      setModalVisible(false)
    }
    useEffect(()=>{

      return ()=>{
        doCleanUp();
      }
    },[])
    const closeModal = ()=>{
        setModalVisible(false);
    }

    const openModal = ()=>{
      setModalVisible(prev=>{
        return true
      })
    }

    return (
      <>
        {/* <Button title="Hamburger" onPress={sideMenuClick} /> */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={doCleanUp}>
              <View style={styles.modalView}>
                <CommonHeader onPress={closeModal} onNavigate={sideMenuClick}/>
              </View>
          </Modal>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={openModal}>
            <Text style={styles.textStyle}>Hamburger</Text>
          </Pressable>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //   marginTop: 22,
  },
  modalView: {
    flex: 1,
    // marginBottom:45,
    backgroundColor: 'transparent',
    alignItems: 'center',
   
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
  

export default HeaderLeft;