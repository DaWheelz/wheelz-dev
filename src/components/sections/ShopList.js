import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import axios from 'axios';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const items = [
      {id: 1, title: 'shirt1', img: 'original-t-shirt.jpg', price: 19.95},
      {id: 2, title: 'shirt2', img: 'original-t-shirt.jpg', price: 23.95},
      {id: 3, title: 'shirt3', img: 'original-t-shirt.jpg', price: 18.95},
      {id: 4, title: 'shirt3', img: 'original-t-shirt.jpg', price: 18.95},
  ];

  const getItems = () => {
    axios.get(`https://wheelzdevshop.netlify.app/.netlify/functions/api`).then(response => {
      console.log(response)
    })
  }

  React.useEffect(() => {
    getItems()
  });

  const renderItems = items.map(function(data, id) {
    return <div className="tiles-item">
                <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <div className="features-tiles mb-16">
                    <Image
                        src={require(`./../../assets/images/${data.img}`)}
                        />
                    </div>
                </div>
                <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                    {data.title}
                    </h4>
                    <p className="m-0 text-sm">
                    €{data.price}
                    </p>
                </div>
                </div>
            </div>;
    });

  return (
      <div className="container">
        <div className={innerClasses}>
        <h2>Shop</h2>
  <h6>Showing {items.length}-15 results</h6>
        
          <div className={tilesClasses}>
          {renderItems}
            
          </div>
        </div>
      </div>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;