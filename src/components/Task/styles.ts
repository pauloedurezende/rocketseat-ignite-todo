import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  leftButton: {
    width: 24,
    height: 24,
    marginLeft: 12,
    marginRight: 8,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {
    width: 32,
    height: 32,
    marginHorizontal: 8,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  title: {
    color: '#f2f2f2',
    fontSize: 14,
    marginVertical: 12,
    flex: 1,
  },
  titleChecked: {
    color: '#808080',
    fontSize: 14,
    marginVertical: 12,
    flex: 1,
    textDecorationLine: 'line-through',
  },
  active: {
    backgroundColor: '#333',
  },
});
