import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import zoomSVG from '@plone/volto/icons/zoom.svg';
import { doesNodeContainClick } from 'semantic-ui-react/dist/commonjs/lib';
import './SearchWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const messages = defineMessages({
  search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  searchSite: {
    id: 'Search Site',
    defaultMessage: 'O que você procura?',
  },
});

/**
 * SearchWidget component class.
 * @class SearchWidget
 * @extends Component
 */
class SearchWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    pathname: PropTypes.string,
    active: PropTypes.bool,
    onToggle: PropTypes.func,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      text: '',
    };
  }

  /**
   * On change text
   * @method onChangeText
   * @param {object} event Event object.
   * @param {string} value Text value.
   * @returns {undefined}
   */
  onChangeText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  /**
   * Submit handler
   * @method onSubmit
   * @param {event} event Event object.
   * @returns {undefined}
   */
  onSubmit(event) {
    const path =
      this.props.pathname?.length > 0
        ? `&path=${encodeURIComponent(this.props.pathname)}`
        : '';
    this.props.history.push(
      `/search?SearchableText=${encodeURIComponent(this.state.text)}${path}`,
    );
    event.preventDefault();
    this.setState({ text: '' });
    if (this.props.onToggle) {
      this.props.onToggle(false);
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.active && this.props.active) {
      this.refInput.select();
    }
  }

  handleClickOutside = (e) => {
    if (
      this.searchbar.current &&
      doesNodeContainClick(this.searchbar.current, e)
    )
      return;
    if (this.props.onToggle) {
      this.props.onToggle(false);
    }
  };

  handleEscapeKeyDown = (e) => {
    if (e.key === 'Escape' && this.props.onToggle) {
      this.props.onToggle(false);
    }
  };

  handleSearchToggle = () => {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.active);
    }
  };

  handleSearchClick = (e) => {
    if (!this.props.active) {
      // Open the search
      this.handleSearchToggle();
    } else if (!this.state.text) {
      // Close the search if there's no text
      e.preventDefault();
      this.handleSearchToggle();
    }
    // If active and has text, let the form submit naturally
  };

  searchbar = React.createRef();

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <form action="/search" onSubmit={this.onSubmit}>
        <div className={`s-wrapper ${this.props.active ? 'active' : ''}`}>
          <input
            id="buscageralTextBox"
            className="s-input"
            aria-label={this.props.intl.formatMessage(messages.search)}
            onChange={(e) => this.onChangeText(e)}
            onKeyDown={(e) => this.handleEscapeKeyDown(e)}
            name="SearchableText"
            value={this.state.text}
            autoComplete="off"
            placeholder={this.props.intl.formatMessage(messages.searchSite)}
            title={this.props.intl.formatMessage(messages.search)}
            tabIndex={this.props.active ? '0' : '-1'} // Conditional tabIndex
            ref={(input) => {
              this.refInput = input;
            }}
          />
          <button
            id="s-logo"
            type={this.props.active && this.state.text ? 'submit' : 'button'}
            aria-label={this.props.intl.formatMessage(messages.search)}
            onClick={this.handleSearchClick}
            tabIndex="0"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {this.props.active && 
          <button id="s-logo" onClick={() => this.props.onToggle(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          }
        </div>
      </form>
    );
  }
}

export default compose(withRouter, injectIntl)(SearchWidget);
