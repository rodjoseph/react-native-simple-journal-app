import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F3EB',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#444',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 5,
    },
    entryDate: {
      color: '#a7a7a7',
      alignItems: 'center',
      paddingVertical: 5
    },
    entryModal: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginHorizontal: 20,
      marginVertical: 40,
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    modalHeading: {
      fontWeight: 'bold',
      fontSize: 28,
      alignSelf:'flex-start'
    },
    titleTextInput: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 5,
      alignSelf:'flex-start'
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 10,
      padding: 12,
      elevation: 2
    },
    buttonText: {
      alignSelf: 'center',
      color: '#fff'
    },
    journalEntry: {
      padding: 20,
      alignSelf: 'stretch',
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 20,
      color: '#444',
    },
    journalEntryTextInput: {
      alignSelf: 'stretch',
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 20,
      color: '#444',
    },
    floatingActionButton: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#505c6d',
      bottom: 30,
      right: 30,
      color: '#ffffff',
      fontSize: 25,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    textButton:
    {
      color: "#2196F3",
      fontSize: 16,
    }
  });
  