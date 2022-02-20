import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'The First Digital Golf Club',
      paragraph: 'You don’t need connections, interviews, or have $10,000s to join. You only need to love golf and the community.'
    };
    

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <a id="project-overview"></a>
          <div className={innerClasses}>
        
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
  
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Golf MetaClub
                  </div>
                  <h3> 
                    2000 Unique NFTs
                  </h3>
                  <p className="m-0">
                    With over 90 unique traits, Golf MetaClub NFTs vary in rarity. Owners will get special access to the VIP club for holding rarer NFTs.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/BeFunky-collage.png')}
                    alt="Features split 01"
                    width={528}
                    height={396}
                    />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Benefits
                  </div>                  
                  <h3 className="mt-0 mb-12">
                    Membership Benefits
                  </h3>
                  <p className="m-0">
                      Golf MetaClub is committed to providing value to its holders. Membership includes quarterly gear shipments, organized golf outings and access to virtual golf lessons.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/example1.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Grand Prize
                  </div>                  
                  <h3 className="mt-0 mb-12">
                    Win a Golf Cart                  
                  </h3>
                  <p className="m-0">
                    We love to think big and reward our community, so we are giving away a ClubCar® golf cart ($14,000 MSRP) with a custom wrap to a member who mints the special 1:1 NFT! 
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/golfcart.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;