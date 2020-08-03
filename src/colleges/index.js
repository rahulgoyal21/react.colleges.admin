import React from 'react';
import { colleges, item } from '../collegeData';

const useStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px'
  },
  cardRoot: {
    boxShadow: '0 10px 20px -6px #000000'
  },
  imgageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)'
  },
  imageOverlayContentBottom: {
    position: 'absolute',
    left: '25px',
    height: '34px',
    bottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'stretch',
    fontSize: '13.5px'
  },
  imageOverlayContentBottomLeft: {
    width: '135px',
    backgroundColor: '#ffffff',
    height: '17px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    padding: '11px 18px 10px 17px'
  },
  imageOverlayContentBottomRight: {
    width: '93px',
    backgroundColor: '#ffffff',
    height: '17px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    padding: '11px 18px 10px 17px',
    marginLeft: '10px'
  },
  imageOverlayTextWhite: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: '270px'
  },
  imageOverlayYellowContainer: {
    position: 'absolute',
    right: '25px',
    top: '40px',
    fontSize: '13.5px',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  imageOverlayBoxYellow: {
    height: '53px',
    width: '75px',
    backgroundColor: '#f5a626',
    borderRadius: '3.8px',
    padding: '9px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  collegeRatingStyling: { fontWeight: '700', fontSize: '22px' },
  imageOverlayBoxYellowContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageOverlayPromotedStrip: {
    width: '130px',
    height: 'auto',
    backgroundColor: '#68a7ff',
    position: 'absolute',
    right: '0',
    top: '-19px',
    clipPath: 'polygon(15% 50%,0 0,100% 0,100% 100%,0 100%)',
    color: '#ffffff',
    textAlign: 'center',
    padding: '11px 31px 11px 48px',
    fontSize: '15px',
    fontWeight: '700'
  },
  collegeNameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 10px 0 10px'
  },
  collegeNameAndStarBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  collegeNameStyling: {
    fontSize: '18.5px',
    color: '#444444',
    fontWeight: 'bold'
  },
  originalPriceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  originalPriceSTyling: {
    color: '#444444',
    size: '11px',
    textAlign: 'center',
    lineHeight: '18px'
  },
  discountContainer: {
    width: '29px',
    height: '18px',
    backgroundColor: '#dd1c26',
    clipPath: 'polygon(0 50%,20% 0,100% 0,100% 100%,20% 100%)',
    position: 'relative',
    marginLeft: '5px'
  },
  discountDotStyling: {
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    height: '5px',
    width: '5px',
    position: 'absolute',
    top: '7px',
    left: '6px'
  },
  discountTextStyling: {
    color: '#ffffff',
    fontSize: '11px',
    position: 'absolute',
    textAlign: 'center',
    top: '4px',
    left: '14px',
    fontWeight: 'bold'
  },
  ratingContainer: {
    paddingLeft: 5
  },
  ratingIcon: {
    height: 13
  },
  addressContainer: {
    padding: '10px 10px 0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13.5px'
  },
  discountedPrice: {
    color: '#dd1c26',
    fontSize: '28.5px',
    fontWeight: 'bold'
  },
  semesterInfoStyling: {
    fontSize: '11px',
    color: '#444444',
    textAlign: 'end',
    padding: '1px 10px 0 10px'
  },
  matchInfoContainer: {
    textAlign: 'start',
    padding: '5px 10px 0 10px'
  },
  matchInfoContent: {
    color: '#37b396',
    fontSize: '13.5px',
    fontWeight: 'bold'
  },
  fadedGrey: {
    color: '#adadad'
  },
  darkGrey: {
    color: '#444444'
  },
  darkGreyBold: {
    color: '#444444',
    fontWeight: 'bold'
  },
  discountStripContainer: {
    padding: '10px 10px 15px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex'
  },
  discountStripRoundedStyle: {
    width: '347px',
    height: '35px',
    backgroundColor: '#ccf5e7',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    fontSize: '13.5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#444444',
    fontWeight: 'bold',
    padding: '0 21px 0 17px'
  },
  facilitiesContainer: {
    color: '#37b396',
    fontWeight: 'bold',
    fontSize: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  facilitiesDotStyling: {
    height: '5px',
    width: '5px',
    borderRadius: '50%',
    backgroundColor: '#37b396',
    position: 'absolute',
    top: '13px',
    left: '162px'
  }
});

const Colleges = () => {
  const styles = useStyles();

  const offerText1 = item.offertext.split(' ')[0];
  const offerText2 = item.offertext.split(' ')[1].substring(0, 2);
  const offerText3 = item.offertext.split(' ')[1].substring(2, 7);
  const offerText4 = item.offertext.split(' ').slice(2, 6).join(' ');
  const offerText5 = item.offertext.split(' ')[6];
  const offerText6 = item.offertext.split(' ').slice(7, 10).join(' ');
  const offerText7 = item.offertext.split(' ')[10];

  const getStars = (rating) => {
    let stars = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <img
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-sharp/24/000000/star.png'
          alt='full star'
        />
      );
    }
    rating = rating - Math.floor(rating);
    if (rating)
      stars.push(
        <img
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-sharp/24/000000/star-half-empty.png'
          alt='half star'
        />
      );
    while (stars.length < 5) {
      stars.push(
        <img
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-outlined/24/000000/star.png'
          alt='empty star'
        />
      );
    }
    return <div style={styles.ratingContainer}>{stars}</div>;
  };

  colleges.map((item) => console.log('Colleges', item));
  return (
    <div style={styles.root}>
      <div style={styles.cardRoot}>
        <div style={{ position: 'relative' }}>
          <img src={process.env.PUBLIC_URL + '/college.jpg'} alt='college' />
          <div style={styles.imgageOverlay}></div>
          <div style={styles.imageOverlayContentBottom}>
            <div style={styles.imageOverlayContentBottomLeft}>
              {item.tags[0]}
            </div>
            <div style={styles.imageOverlayContentBottomRight}>
              {item.tags[1]}
            </div>
            <div style={styles.imageOverlayTextWhite}># {item.ranking}</div>
          </div>
          <div style={styles.imageOverlayYellowContainer}>
            <div style={styles.imageOverlayBoxYellow}>
              <span style={styles.imageOverlayBoxYellowContent}>
                <span style={styles.collegeRatingStyling}>{item.rating}</span>
                /5<br></br>
              </span>{' '}
              {item.rating_remarks}
            </div>
          </div>
          {item.promoted && (
            <div style={styles.imageOverlayPromotedStrip}>PROMOTED</div>
          )}
        </div>

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
        <div style={styles.addressContainer}>
          <div style={styles.darkGrey}>
            {item.nearest_place[0]}
            <span style={styles.fadedGrey}> | {item.nearest_place[1]}</span>
          </div>
          <div style={styles.discountedPrice}>₹ {item.discounted_fees}</div>
        </div>
        <div style={styles.semesterInfoStyling}>{item.fees_cycle}</div>
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
    </div>
  );
};
export default Colleges;
