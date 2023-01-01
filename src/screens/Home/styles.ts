import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    flex: 1,
  },
  header: {
    height: 173,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    top: -31,
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    paddingBottom: 32,
  },
  input: {
    height: 54,
    padding: 16,
    flex: 1,
    marginRight: 4,
    color: '#f2f2f2',
    backgroundColor: '#262626',
    borderColor: '#0d0d0d',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1e6f9f',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
