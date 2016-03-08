var React = require('react');
var types = React.PropTypes;
var BsPanel = require('react-bootstrap/lib/Panel');
import {mergeProps} from 'pui-react-helpers';
import 'pui-css-collapse';
import 'pui-css-iconography';
import 'pui-css-dividers';

class BaseCollapse extends React.Component{
  static propTypes = {
    divider: types.bool,
    header: types.node.isRequired,
    defaultExpanded: types.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {expanded: this.props.defaultExpanded};
  }

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    var {divider, header, children, ...others} = this.props;
    var props = mergeProps(others, {className: {'panel-divider': divider}});

    return (
      <BsPanel {...props} collapsible expanded={this.state.expanded} onSelect={this.handleSelect} header={header}>
        {children}
      </BsPanel>
    );
  }
}

class Collapse extends React.Component {
  static propTypes = {
    divider: types.bool,
    header: types.node.isRequired
  };

  render() {
    var {header, ...others} = this.props;

    header = (
      <div className="collapse-trigger">
        <div className="when-collapsed-inline">
          <i className="fa fa-caret-right collapse-icon"></i>
        </div>
        <div className="when-expanded-inline">
          <i className="fa fa-caret-down collapse-icon"></i>
        </div>
        {header}
      </div>
    );

    return <BaseCollapse {...others} header={header} />;
  }
}

class AltCollapse extends React.Component {
  static propTypes = {
    divider: types.bool,
    header: types.node.isRequired
  };

  render() {
    var {header, ...others} = this.props;

    header = (
      <div className="collapse-trigger">
        <div className="when-collapsed-inline">
          <i className="fa fa-plus-square collapse-icon"></i>
        </div>
        <div className="when-expanded-inline">
          <i className="fa fa-minus-square collapse-icon"></i>
        </div>
        {header}
      </div>
    );

    return <BaseCollapse {...others} header={header}/>;
  }
}

module.exports = {BaseCollapse, Collapse, AltCollapse};
