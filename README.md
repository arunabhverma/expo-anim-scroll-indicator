# Custom Scroll Indicator Demo

This project showcases a custom scroll indicator inspired by the Samsung Gallery scroll indicator, designed for both Android and iOS. Built using [Expo](https://expo.dev/), [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), and [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/), this example highlights how to create an interactive scroll indicator.

## Demo

Check out the custom scroll indicator in action 👇:

| Android                                                                                                                        | iOS                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| <video src="https://github.com/user-attachments/assets/8a8acc1d-449a-42cd-817b-1e8834cbab39" /> | <video src="https://github.com/user-attachments/assets/fdc3fc12-e424-473e-8bc8-165c615f290c" /> |

## Features

- **Pan Gesture Support**: Users can manually adjust the scroll indicator using pan gestures, enhancing the interactive experience.
- **Automatic Sync with Scroll**: The indicator automatically syncs with the content scroll, mimicing the native scroll indicator behaviour.
- **Layout Transitions for Chip Width**: Using layout transitions from Reanimated, the width of the indicator chips dynamically adjusts based on content changes, creating a polished feel.

## How It Works

- **Pan Gesture Handling**: The scroll indicator utilizes pan gestures to allow users to slide the indicator manually. The `onTouchStart` and `onTouchEnd` events from the `View` are leveraged to manage the interaction states.
  
- **Automatic Sliding**: As the user scrolls through content, the indicator starts sliding automatically, which is calculated based on the scroll offset.

- **Chip Transition**: The chips that showing content have layout transition it makes their width increased or decreased depending on their content size, giving a satisfying responsive feel to the user.

- **Calculated Content**: The calculated content simplifies the implementation process, allowing for straightforward adjustments.

### Note:
This project serves as a demonstration of a custom scroll indicator implementation. If you're interested in building upon this code or contributing enhancements, feel free to submit a pull request (PR). Contributions such as bug fixes, new features, or general improvements are always welcome!

## Acknowledgments

- **[Expo](https://expo.dev/)**: For streamlining cross-platform mobile development.
- **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: For enabling the smooth animations that enhance the scroll indicator experience.
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)**: For providing robust gesture handling capabilities.

Feel free to contribute!
