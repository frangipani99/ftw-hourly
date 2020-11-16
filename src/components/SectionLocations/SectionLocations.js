import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import nyImage from './images/ny-yogi.jpg';
import laImage from './images/la-yogi.jpg';
import sfImage from './images/sf-yogi.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Washington, DC',
          nyImage,
          '?address=Washington%2C%20District%20of%20Columbia%2C%20United%20States&bounds=38.99555093%2C-76.909391%2C38.79155738%2C-77.1197609567342'
        )}
        {locationLink(
          'Virginia',
          laImage,
          '?address=Fairfax%2C%20Virginia%2C%20United%20States&bounds=38.9073900165744%2C-77.2261649995047%2C38.7946051863125%2C-77.417273947782'
        )}
        {locationLink(
          'Maryland',
          sfImage,
          '?address=Rockville%2C%20Maryland%2C%20United%20States&bounds=39.1548477053527%2C-77.0722219881951%2C39.0224521126942%2C-77.2522550037389'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
