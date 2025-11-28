import cx from 'classnames';
import React from 'react';
import AnimateHeight from 'react-animate-height';
import { Accordion, Input } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { defineMessages, injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faChevronDown, faChevronUp);

const messages = defineMessages({
  EnterTitle: {
    id: 'Enter Title',
    defaultMessage: 'Enter Title',
  },
});

const AccordionEdit = (props) => {
  const {
    children,
    handleTitleChange,
    handleTitleClick,
    uid,
    panel,
    data,
    index,
    intl,
  } = props;
  const [activeIndex, setActiveIndex] = React.useState([0]);
  const accordionConfig = config.blocks.blocksConfig.accordion;
  const isActive = activeIndex.includes(index);
  const iconOnRight = data.right_arrows;
  const blockcolor = data.block_color || 'default';

  const handleClick = (e, itemProps) => {
    const { index } = itemProps;
    if (data.non_exclusive) {
      const newIndex =
        activeIndex.indexOf(index) === -1
          ? [...activeIndex, index]
          : activeIndex.filter((item) => item !== index);

      setActiveIndex(newIndex);
    } else {
      const newIndex =
        activeIndex.indexOf(index) === -1
          ? [index]
          : activeIndex.filter((item) => item !== index);

      setActiveIndex(newIndex);
    }
  };

  React.useEffect(() => {
    return data.collapsed ? setActiveIndex([]) : setActiveIndex([0]);
  }, [data.collapsed]);

  return (
    <Accordion
      className={cx({
        [`${blockcolor}-accordion`]: blockcolor
      }, {
        [data.styles ? data.styles.theme : accordionConfig?.defaults?.theme]: true
      })}
      {...accordionConfig.options}
    >
      <React.Fragment>
        <Accordion.Title
          as={data.title_size}
          active={isActive}
          index={index}
          onClick={handleClick}
          className={cx('accordion-title', {
            'align-arrow-left': !iconOnRight,
            'align-arrow-right': iconOnRight,
          }, {
            [`${blockcolor}-title`]: blockcolor
          })}
        >
          <FontAwesomeIcon
            icon={isActive ? faChevronUp : faChevronDown}
            style={{ marginRight: iconOnRight ? 0 : '0.5em', marginLeft: iconOnRight ? '0.5em' : 0 }}
          />
          {!data.readOnlyTitles ? (
            <Input
              fluid
              className="input-accordion-title"
              transparent
              placeholder={intl.formatMessage(messages.EnterTitle)}
              value={panel?.title || ''}
              onClick={(e) => {
                handleTitleClick();
                e.stopPropagation();
              }}
              onChange={(e) => handleTitleChange(e, [uid, panel])}
            />
          ) : (
            <span>{panel?.title}</span>
          )}
        </Accordion.Title>
        <AnimateHeight
          animateOpacity
          duration={500}
          height={isActive ? 'auto' : 0}
        >
          <Accordion.Content
            active={isActive}
            className={cx({
              [`${blockcolor}-content`]: blockcolor
            })}
          >
            {children}
          </Accordion.Content>
        </AnimateHeight>
      </React.Fragment>
    </Accordion>
  );
};

export default injectIntl(AccordionEdit);
