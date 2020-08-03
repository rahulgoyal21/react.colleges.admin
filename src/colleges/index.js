import React from 'react';
import { colleges } from '../collegeData';
import { useStyles } from './style';

const Colleges = () => {
  const styles = useStyles();

  //Function to count star on the basis of rating given
  const getStars = (rating) => {
    let stars = [];
    let i = 0;
    for (i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <img
          key={i}
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-sharp/24/000000/star.png'
          alt='full star'
        />
      );
    }
    let index = i;
    rating = rating - Math.floor(rating);
    if (rating)
      stars.push(
        <img
          key={rating ? index : null}
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-sharp/24/000000/star-half-empty.png'
          alt='half star'
        />
      );
    while (stars.length < 5) {
      stars.push(
        <img
          key={rating ? index + 1 : index}
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-outlined/24/000000/star.png'
          alt='empty star'
        />
      );
      index++;
    }
    return <div style={styles.ratingContainer}>{stars}</div>;
  };

  //Function to get college card on basis of .JSON file
  const getCollegeCard = (item) => {
    const offerText1 = item.offertext.split(' ')[0];
    const offerText2 = item.offertext.split(' ')[1].substring(0, 2);
    const offerText3 = item.offertext.split(' ')[1].substring(2, 7);
    const offerText4 = item.offertext.split(' ').slice(2, 6).join(' ');
    const offerText5 = item.offertext.split(' ')[6];
    const offerText6 = item.offertext.split(' ').slice(7, 10).join(' ');
    const offerText7 = item.offertext.split(' ')[10];

    return (
      <div style={styles.cardRoot} key={item.college_name}>
        {/*College image as background and overlaty content */}
        <div style={{ position: 'relative' }}>
          <img src={process.env.PUBLIC_URL + '/college.jpg'} alt='college' />
          <div style={styles.imgageOverlay}></div>

          {/*Image overlay tags and Ranking text */}
          <div style={styles.imageOverlayContentBottom}>
            <div style={styles.imageOverlayContentBottomLeft}>
              {item.tags[0]}
            </div>
            <div style={styles.imageOverlayContentBottomRight}>
              {item.tags[1]}
            </div>
            <div style={styles.imageOverlayTextWhite}># {item.ranking}</div>
          </div>

          {/*Image overlay yellow box */}
          <div style={styles.imageOverlayYellowContainer}>
            <div style={styles.imageOverlayBoxYellow}>
              <span style={styles.imageOverlayBoxYellowContent}>
                <span style={styles.collegeRatingStyling}>{item.rating}</span>
                /5<br></br>
              </span>{' '}
              {item.rating_remarks}
            </div>
          </div>

          {/*Image overlay promoted strip*/}
          {item.promoted && (
            <div style={styles.imageOverlayPromotedStrip}>PROMOTED</div>
          )}
        </div>

        {/*College Name, stars, Discount,Orignial price */}
        <div style={styles.collegeNameContainer}>
          <div style={styles.collegeNameAndStarBox}>
            <div style={styles.collegeNameStyling}>{item.college_name}</div>
            {getStars(item.rating)}
          </div>
          <div style={styles.originalPriceContainer}>
            <div style={styles.originalPriceSTyling}>
              ₹<del>{item.original_fees}</del>
            </div>
            <div style={styles.discountContainer}>
              <div style={styles.discountDotStyling}></div>
              <div style={styles.discountTextStyling}>{item.discount}</div>
            </div>
          </div>
        </div>

        {/*Nearest place and discounted price */}
        <div style={styles.addressContainer}>
          <div style={styles.darkGrey}>
            {item.nearest_place[0]}
            <span style={styles.fadedGrey}> | {item.nearest_place[1]}</span>
          </div>
          <div style={styles.discountedPrice}>₹ {item.discounted_fees}</div>
        </div>

        {/*Semester fees */}
        <div style={styles.semesterInfoStyling}>{item.fees_cycle}</div>

        {/*Match, Nearest place */}
        <div style={styles.matchInfoContainer}>
          <div style={styles.matchInfoContent}>
            93% Match :&nbsp;
            <span style={styles.darkGreyBold}>
              {item.famous_nearest_places.split(',')[0].split(' ')[0]}&nbsp;
            </span>
            <span style={styles.fadedGrey}>
              {item.famous_nearest_places.split(',')[0].split(' ')[1]}&nbsp;
              {item.famous_nearest_places.split(',')[0].split(' ')[2]}&nbsp;
              {item.famous_nearest_places.split(',')[0].split(' ')[3]}
            </span>
            ,&nbsp;
            <span style={styles.darkGreyBold}>
              {item.famous_nearest_places.split(',')[1].split(' ')[1]}&nbsp;
              {item.famous_nearest_places.split(',')[1].split(' ')[2]}&nbsp;
            </span>
            <span style={styles.fadedGrey}>
              {item.famous_nearest_places.split(',')[1].split(' ')[3]}&nbsp;
              {item.famous_nearest_places.split(',')[1].split(' ')[4]}
              &nbsp;{item.famous_nearest_places.split(',')[1].split(' ')[5]}
            </span>
          </div>
        </div>

        {/*Offer text and Amenties */}
        <div style={styles.discountStripContainer}>
          <div style={styles.discountStripRoundedStyle}>
            <span style={{ fontWeight: 'normal' }}>{offerText1}</span>
            &nbsp;{offerText2}&nbsp;
            <span style={{ color: '#4bb89e' }}>{offerText3}&nbsp;</span>
            <span>{offerText4}&nbsp;</span>
            <span style={{ color: '#4bb89e' }}>{offerText5}&nbsp;</span>
            {offerText6}&nbsp;
            <span style={{ color: '#1999d2' }}>{offerText7}</span>
          </div>
          <div style={styles.facilitiesContainer}>
            {item.amenties[0]}
            <div style={styles.facilitiesDotStyling}></div>
            &ensp; {item.amenties[1]}
          </div>
        </div>
      </div>
    );
  };

  //storing college data from .JSON file
  const collegeDataCollection = colleges.map((item) => getCollegeCard(item));

  return (
    <div style={styles.root}>
      <div style={styles.collegeIndiaText}>Colleges In North India</div>
      {collegeDataCollection}
    </div>
  );
};
export default Colleges;
