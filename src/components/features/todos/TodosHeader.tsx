import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const TodoHeader: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <RNPickerSelect
        placeholder={{label: 'Filter', value: null}}
        onValueChange={value => console.log(value)}
        items={[
          {label: 'All', value: 'All'},
          {label: 'Completed', value: 'Completed'},
          {label: 'Active', value: 'Active'},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
