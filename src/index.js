import withStyleWrapper from './components/withStyleWrapper/withStyleWrapper';
import SimpleColorPicker from './components/Widgets/SimpleColorPicker';

import './theme/main.less';

export default (config) => {
  config.widgets.widget.style_simple_color = SimpleColorPicker;
  return config;
};

export { withStyleWrapper };
