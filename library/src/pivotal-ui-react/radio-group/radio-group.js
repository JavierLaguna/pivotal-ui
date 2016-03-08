// DEPRECATED: MOVED INTO RADIO

var React = require('react');
import {mergeProps} from 'pui-react-helpers';

class RadioGroup extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
  };

  render() {
    var {name, children, onChange, ...others} = this.props;

    children = React.Children.map(children,
      (child) => React.cloneElement(child, {name, onChange: onChange})
    );

    var props = mergeProps(others, {className: 'radio-group'});


    return <div {...props} >{children}</div>;
  }
}

module.exports = {RadioGroup};
