/**
 * @format
 */
import 'react-native-gesture-handler';
import { YellowBox } from "react-native";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([""]);
AppRegistry.registerComponent(appName, () => App);
