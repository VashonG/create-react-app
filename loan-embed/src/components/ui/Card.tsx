import React, { useState } from 'react';
import { ElevatedCard, Column, Row, Typography, HorizontalSpacer, Tag } from '@cred/neopop-web/lib/components';
import { mainColors, colorPalette, fontNameSpaces } from '@cred/neopop-web/lib/primitives';
import styled from 'styled-components';
import CustomButton from '../ui/ElevatedButton';
import Modal from '../LoanWidget/Modal';

const ContentWrapper = styled.div`
  padding: 10px;
`;

const Card = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ElevatedCard
        backgroundColor="#AE275F"
        edgeColors={{
          bottom: '#5C1532',
          right: '#851E49',
        }}
        style={{
          width: '150px',
        }}
      >
        <ContentWrapper>
          <Column>
            <Row className="v-justify">
              <div>
                <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                  ABCD Bank
                </Typography>
                <HorizontalSpacer n={2} />
                <Typography
                  {...fontNameSpaces.tb11m}
                  color={colorPalette.popWhite[100]}
                  as="span"
                >
                  Line of Credit
                </Typography>
              </div>
              <Row
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `1px solid ${mainColors.white}`,
                }}
                className="h-center v-center"
              >
                <div
                  style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: colorPalette.popWhite[300],
                  }}
                />
              </Row>
            </Row>
            <HorizontalSpacer n={6} />
            <div style={{ maxWidth: '50%' }}>
              <Tag
                colorConfig={{
                  background: mainColors.yellow,
                  color: colorPalette.popWhite[400],
                }}
              >
                Offer:
              </Tag>
            </div>
            <HorizontalSpacer n={2} />
            <Typography {...fontNameSpaces.th14b} color={mainColors.white}>
              $100,000.00
            </Typography>
            <HorizontalSpacer n={2} />
            <CustomButton
              fullWidth={true}
              variant="primary"
              onClick={handleButtonClick}
            >
              Accept
            </CustomButton>
          </Column>
        </ContentWrapper>
      </ElevatedCard>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Card;
