import { View, Text, TouchableOpacity, Modal} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {styles} from './styles';

const ModalConfirmation = ({
  modalVisible,
  setModalVisible,
  onConfirmDeletion,
  selectedActivity,
  onConfirmCompletition,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
    
        <View style={styles.blur}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTextTitle}>{selectedActivity?.name}</Text>
              <View style={styles.containerButtons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onConfirmCompletition(selectedActivity)}
                >
                  <AntDesign name="checkcircleo" size={24} color="white" />
                  <Text style={styles.textStyle}>Completado</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => onConfirmDeletion(selectedActivity?.id)}
                >
                  <MaterialIcons name="delete" size={24} color="white" />
                  <Text style={styles.textStyle}>Eliminar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      
    </Modal>
  );
};



export default ModalConfirmation;
