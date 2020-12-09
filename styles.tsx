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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 40,
    },
    modalHeader: {
      fontWeight: 'bold',
      fontSize: 16
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
      alignSelf: 'center'
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
    journalEntriesList: {
      marginTop: 40,
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
    }
  });
  