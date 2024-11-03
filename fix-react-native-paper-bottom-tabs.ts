const fs = require('fs');
function patchCollapsible() {
  try {
    var curDir = __dirname;
    var rootDir = process.cwd();
    console.log({rootDir})
    var file = rootDir+"\\node_modules\\react-native-paper\\src\\components\\BottomNavigation\\BottomNavigationBar.tsx";
    var dataFix =
      "renderTouchable = ({ key, ...props }: TouchableProps<Route>) => <Touchable key={key} {...props} />,";
    var data = fs.readFileSync(file, 'utf8');
    var result = data.replace(
      'renderTouchable = (props: TouchableProps<Route>) => <Touchable {...props} />,',
      dataFix,
    );
    fs.writeFileSync(file, result, 'utf8');
  } catch (error) {
    console.error(error);
  }
}
patchCollapsible();