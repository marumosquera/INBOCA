import { View, Text, Pressable, Modal } from "react-native";
import React from "react";
import styles from "./styles";

const ModalConfirmation = ({
  modalVisible,
  setModalVisible,
  onConfirmDeletion,
  selectedActivity,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTextTitle}>
            ¿Realmente desea eliminar el siguiente paquete?
          </Text>
          <Text style={styles.modalText}>{selectedActivity?.name}</Text>
          <View style={styles.containerButtons}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onConfirmDeletion(selectedActivity?.id)}
            >
              <Text style={styles.textStyle}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmation;