var React = require('react/addons');
var {DefaultH4} = require('pui-react-typography');
require('classlist-polyfill');
import {mergeProps} from 'pui-react-helpers';
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const BsModal = require('react-bootstrap/lib/Modal');
const BsModalHeader = require('react-bootstrap/lib/ModalHeader');

const BaseModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    open: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      onRequestClose() {}
    };
  },

  render() {
    const {open, title, children, onRequestClose, ...modalProps} = this.props;

    return (
      <BsModal show={open} onHide={onRequestClose} {...mergeProps(modalProps, {className: 'modal-basic'})}>
        <BsModalHeader className="modal-header" closeButton>
          <DefaultH4 className="modal-title" id="modalTitle">{title}</DefaultH4>
        </BsModalHeader>
        {children}
      </BsModal>
    )
  }
});

/**
 * @component Modal
 * @description Opens a modal window with scrim. The modal can be closed by either clicking the "x" button, clicking on the scrim, pressing Escape, or calling `modal#close` as in the example.
 *
 * @property title {String} Header text for the modal window
 *
 * @example ```js
 * var Modal = require('pui-react-modals').Modal;
 * var ModalBody = require('pui-react-modals').ModalBody;
 * var ModalFooter = require('pui-react-modals').ModalFooter;
 * var DefaultButton = require('pui-react-buttons').DefaultButton;
 * var MyComponent = React.createClass({
 *   openModal() {
 *    this.refs.modal.open();
 *   },
 *
 *   closeModal() {
 *     this.refs.modal.close();
 *   },
 *
 *   render() {
 *     return (
 *      <article>
 *        <DefaultButton onClick={this.openModal}>Click to Open Modal</DefaultButton>
 *
 *        <Modal title="Modal Header Text" ref="modal">
 *          <ModalBody>Modal Body Text</ModalBody>
 *          <ModalFooter>
 *            <DefaultButton onClick={this.closeModal}>Click to Close Modal</DefaultButton>
 *          </ModalFooter>
 *        </Modal>
 *      </article>
 *     );
 *   }
 * });
 * ```
 *
 */
var Modal = React.createClass({
  getInitialState() {
    return {isVisible: false};
  },

  open() {
    this.setState({isVisible: true});
  },

  close() {
    this.setState({isVisible: false});
  },

  render() {
    return (
      <BaseModal open={this.state.isVisible} onRequestClose={this.close} {...this.props} />
    );

  }
});

/**
 * @component ModalBody
 * @description Denotes content for the body of a `<Modal>`
 *
 */
var ModalBody = React.createClass({
  render() {
    return <div {...mergeProps(this.props, {className: 'modal-body'})}>{this.props.children}</div>;
  }
});

/**
 * @component ModalFooter
 * @description Denotes content for the footer of a `<Modal>`
 *
 */
var ModalFooter = React.createClass({
  render() {
    return <div {...mergeProps(this.props, {className: 'modal-footer'})}>{this.props.children}</div>;
  }
});

module.exports = {Modal, ModalBody, ModalFooter, BaseModal};

/*doc
---
title: Modals
name: modal_react
categories:
 - react_components_modals
 - react_all
---

<code class="pam">
<i class="fa fa-download" alt="Install the Component">
npm install pui-react-modals --save
</i>
</code>

For the example, you also need to install [Buttons](#button_react) and require `DefaultButton` from it.

Require the subcomponent:

```
var Modal = require('pui-react-modals').Modal;
var ModalBody = require('pui-react-modals').ModalBody;
var ModalFooter = require('pui-react-modals').ModalFooter;
```

We provide 3 components that can be used to assemble modals:

* `Modal`
* `ModalBody`
* `ModalFooter`

<div class="alert alert-info mbxl">
  <h5 class="em-high mtn">
    Opening and closing the modal with callbacks
  </h5>
  <p>
    Modals will be closed by default. To open the modal, add a <code>ref</code>
    property to the modal (i.e. <code>ref='myModal'</code>). Trigger
    <code>this.refs.myModal.open();</code> to open the modal, and
    <code>this.refs.myModal.close();</code> to close the modal.
  </p>
</div>

There are 4 ways to close the modal

* Clicking the "x" button
* Clicking on the modal backdrop
* Clicking the esc key
* Doing any action that triggers `this.refs.myModal.close`.

```jsx_example

var MyModal = React.createClass({
  _openModal: function(){
    this.refs.modal.open();
  },

  _closeModal: function() {
    this.refs.modal.close();
  },

  render: function() {
    return (
      <div>
        <DefaultButton id='openButton' onClick={this._openModal}>Open Modal</DefaultButton>
        <Modal title='What a Header!' ref='modal' className='optional-custom-class'>
          <ModalBody>Text in a body</ModalBody>
          <ModalFooter>
            <DefaultButton id='closeButton' onClick={this._closeModal}>Close</DefaultButton>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
});

```

```react_example_table
<MyModal/>
```
*/
