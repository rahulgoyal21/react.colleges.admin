import React from 'react';
import { colleges } from '../collegeData';
import './colleges.css';

const useStyles = () => ({
  cardRoot: {
    // height: '230px',
    // width: '630px',
    boxShadow: '0 10px 20px -6px #000000'
    //backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))'
    // zIndex: '100'
  },
  collegeImgStyle: {
    // backgroundImage:
    //   'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(process.env.PUBLIC_URL + "/college.jpg")'
  },
  ratingContainer: {
    paddingLeft: 5
  },
  ratingIcon: {
    height: 13
  }
});

const Colleges = () => {
  const styles = useStyles();
  const getStars = (rating) => {
    let stars = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <img
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-sharp/24/000000/star.png'
        />
      );
    }
    rating = rating - Math.floor(rating);
    if (rating)
      stars.push(
        <img
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-sharp/24/000000/star-half-empty.png'
        />
      );
    while (stars.length < 5) {
      stars.push(
        <img
          style={styles.ratingIcon}
          src='https://img.icons8.com/material-outlined/24/000000/star.png'
        />
      );
    }
    return <div style={styles.ratingContainer}>{stars}</div>;
  };

  colleges.map((item) => console.log('Colleges', item));
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px'
      }}
    >
      <div style={styles.cardRoot}>
        <div>
          <div style={{ position: 'relative' }}>
            <img
              style={{
                background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)'
              }}
              src={process.env.PUBLIC_URL + '/college.jpg'}
            />

            <div
              style={{
                position: 'absolute',
                left: '25px',
                height: '34px',
                bottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'stretch',
                fontSize: '13.5px'
              }}
            >
              <div
                style={{
                  width: '135px',
                  backgroundColor: '#ffffff',
                  height: '17px',
                  borderTopRightRadius: '25px',
                  borderBottomRightRadius: '25px',
                  borderTopLeftRadius: '25px',
                  borderBottomLeftRadius: '25px',
                  padding: '11px 18px 10px 17px'
                }}
              >
                Best college 2018
              </div>
              <div
                style={{
                  width: '93px',
                  backgroundColor: '#ffffff',
                  height: '17px',
                  borderTopRightRadius: '25px',
                  borderBottomRightRadius: '25px',
                  borderTopLeftRadius: '25px',
                  borderBottomLeftRadius: '25px',
                  padding: '11px 18px 10px 17px',
                  marginLeft: '10px'
                }}
              >
                2kms away
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  marginLeft: '270px'
                }}
              >
                #7 in 260 colleges in north campus
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                right: '25px',
                top: '40px',
                fontSize: '13.5px',
                color: '#ffffff',
                fontWeight: 'bold'
              }}
            >
              <div
                style={{
                  height: '53px',
                  width: '75px',
                  backgroundColor: '#f5a626',
                  borderRadius: '3.8px',
                  padding: '9px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontWeight: '700', fontSize: '22px' }}>
                    3.9
                  </span>
                  /5<br></br>
                </span>{' '}
                Very Good
              </div>
            </div>
            <div
              style={{
                width: '130px',
                height: 'auto',
                backgroundColor: '#68a7ff',
                position: 'absolute',
                right: '0',
                top: '-23px',
                clipPath: 'polygon(15% 50%,0 0,100% 0,100% 100%,0 100%)',
                color: '#ffffff',
                textAlign: 'center',
                padding: '11px 31px 11px 48px',
                fontSize: '15px',
                fontWeight: '700'
              }}
            >
              PROMOTED
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 10px 0 10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                fontSize: '18.5px',
                color: '#444444',
                fontWeight: 'bold'
              }}
            >
              HansRaj College Delhi University
            </div>
            {getStars(4)}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                color: '#444444',
                size: '11px',
                textAlign: 'center',
                lineHeight: '18px'
              }}
            >
              ₹<del>6,8756</del>
            </div>
            <div
              style={{
                width: '29px',
                height: '18px',
                backgroundColor: '#dd1c26',
                clipPath: 'polygon(0 50%,20% 0,100% 0,100% 100%,20% 100%)',
                position: 'relative',
                marginLeft: '5px'
              }}
            >
              <div
                style={{
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  height: '5px',
                  width: '5px',
                  position: 'absolute',
                  top: '7px',
                  left: '6px'
                }}
              ></div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '11px',
                  position: 'absolute',
                  textAlign: 'center',
                  top: '4px',
                  left: '14px',
                  fontWeight: 'bold'
                }}
              >
                20
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: '10px 10px 0 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ fontSize: '13.5px', color: '#444444' }}>
            Near Vishwavidyalya Metro Station{' '}
            <span style={{ fontSize: '13.5px', color: '#adadad' }}>
              {' '}
              | 2 Kms away from bus stand
            </span>
          </div>
          <div
            style={{ color: '#dd1c26', fontSize: '28.5px', fontWeight: 'bold' }}
          >
            ₹ 5,768
          </div>
        </div>
        <div
          style={{
            fontSize: '11px',
            color: '#444444',
            textAlign: 'end',
            padding: '1px 10px 0 10px'
          }}
        >
          Per Semester (3months)
        </div>
        <div
          style={{
            textAlign: 'start',
            padding: '5px 10px 0 10px'
          }}
        >
          <div
            style={{ color: '#37b396', fontSize: '13.5px', fontWeight: 'bold' }}
          >
            93% Match :{' '}
            <span
              style={{
                color: '#444444',
                fontWeight: 'bold'
              }}
            >
              2.5kms
            </span>{' '}
            <span
              style={{
                color: '#adadad'
              }}
            >
              from GTB Nagar
            </span>
            ,{' '}
            <span
              style={{
                color: '#444444',
                fontWeight: 'bold'
              }}
            >
              7 Kms
            </span>{' '}
            <span
              style={{
                color: '#adadad'
              }}
            >
              from Rajiv Chowk
            </span>
          </div>
        </div>
        <div
          style={{
            padding: '10px 10px 15px 0',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <div
            style={{
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
            }}
          >
            <span style={{ fontWeight: 'normal' }}>Flat</span>&nbsp;Rs&nbsp;
            <span style={{ color: '#4bb89e' }}>2,000&nbsp;</span>{' '}
            <span>off + upto Rs&nbsp;</span>{' '}
            <span style={{ color: '#4bb89e' }}>500&nbsp;</span> wallet! to
            avail...&nbsp;
            <span style={{ color: '#1999d2' }}>LOGIN</span>
          </div>
          <div
            style={{
              color: '#37b396',
              fontWeight: 'bold',
              fontSize: '600',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            Free Cancellation&ensp;
            <div
              style={{
                height: '5px',
                width: '5px',
                borderRadius: '50%',
                backgroundColor: '#37b396',
                position: 'absolute',
                top: '13px',
                left: '175px'
              }}
            ></div>
            &ensp;Free Wi-Fi
          </div>
        </div>
      </div>
    </div>
  );
};
export default Colleges;
