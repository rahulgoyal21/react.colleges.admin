export const useStyles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardRoot: {
    boxShadow: '0 10px 20px -6px #000000',
    margin: '1.5rem'
  },
  collegeIndiaText: {
    width: '100%',
    textAlign: 'left',
    margin: '1.5rem',
    paddingLeft: '2rem'
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
