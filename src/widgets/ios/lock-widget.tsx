import { Text } from "@expo/ui/swift-ui";
import { lineLimit } from "@expo/ui/swift-ui/modifiers";
import { createWidget, type WidgetEnvironment } from "expo-widgets";

type LockWidgetProps = {
  text: string;
};

const LockWidgetComponent = (
  props: LockWidgetProps,
  _environment: WidgetEnvironment
) => {
  "widget";
  return <Text modifiers={[lineLimit(3)]}>{props.text}</Text>;
};

export default createWidget("LockWidget", LockWidgetComponent);
