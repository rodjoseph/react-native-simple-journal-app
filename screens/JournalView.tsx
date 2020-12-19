import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableHighlight, Alert, FlatList, 
  TextInput, Button, Keyboard, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../styles'
import { AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TimeAgo from 'react-native-timeago';
import Moment from 'moment';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("journal.db");

const DismissKeyboard = ({ children } : {children : undefined}) => (
  <TouchableWithoutFeedback 
  onPress={() => Keyboard.dismiss()}> {children}
  </TouchableWithoutFeedback>
);

type JournalEntryProps = {
  title?: string,
  body: string,
  date: Date,
  id: number
}

const ENTRIES: JournalEntryProps[] = [
  {
    title: "Hello, World! (again)",
    body: "Lorem ipsum dolor sit amet",
    date: new Date(Date.now()),
    id: 2,
  },
  {
    title: "Hello, World!",
    body: "Et egestas quis ipsum suspendisse ultrices gravida. Elit ullamcorper dignissim cras tincidunt lobortis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Erat velit scelerisque in dictum non consectetur a erat nam. In pellentesque massa placerat duis ultricies. Vel quam elementum pulvinar etiam non quam lacus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Quam viverra orci sagittis eu volutpat odio facilisis. Ullamcorper velit sed ullamcorper morbi. Elit eget gravida cum sociis natoque penatibus et. Pharetra et ultrices neque ornare.",
    date: new Date(2006,12,1),
    id: 1,
  }
];

const JournalEntry = (entry : JournalEntryProps) => (
  <TouchableOpacity style={styles.journalEntry}>
    <Text style={styles.titleText}>{entry.title}</Text>
    <Text>{entry.body}</Text>
    <Text style={styles.entryDate}><TimeAgo time={entry.date} /> ({Moment(entry.date).format('M/D/YYYY LT')})</Text>
  </TouchableOpacity>
);

function JournalEntries() {
  const [entries, setEntries] = React.useState(null);

  return (
    <FlatList
      data={ENTRIES}
      renderItem= {({item}) => (
        <JournalEntry 
        title={item.title}
        body={item.body}
        date={item.date}
        id={item.id}
      />
      )}
      keyExtractor={(item) => {item.id}}
    />
  );
}

type AddEntryButtonProps = {
  onPress:() => void;
}

function AddPostButton({onPress}: AddEntryButtonProps) {
  return(
    <TouchableOpacity style={styles.floatingActionButton} onPress={onPress}>
      <Ionicons color="#fff" size={40} name="md-add"/>
    </TouchableOpacity>
  );
}

export default function JournalView() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const CreateEntryModal = () =>
  <SafeAreaView>
    <Modal

    animationType="slide"
    transparent={false}
    visible={modalVisible}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}>
        <View style={styles.entryModal}>
          <View style={styles.modalHeader}>
            <TouchableHighlight
              onPress={() => {
              setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textButton}>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
              setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.buttonText}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.modalHeading}>New Journal Entry</Text>
          <TextInput style={styles.titleTextInput} placeholder="Title (optional)"></TextInput>
          <TextInput style={styles.journalEntryTextInput} multiline placeholder="Start writing"></TextInput>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  </SafeAreaView>
  return(
    <View>
      <JournalEntries />
      <AddPostButton onPress={() => setModalVisible(!modalVisible)}/>
      <CreateEntryModal/>
    </View>
  );
}