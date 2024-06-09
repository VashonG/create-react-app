import React from 'react';
import { ElevatedCard, Column, Row, Typography, HorizontalSpacer, Tag } from '@cred/neopop-web/lib/components';
import { mainColors, colorPalette, fontNameSpaces } from '@cred/neopop-web/lib/primitives';
import styled from 'styled-components';
import CustomButton from '../Button/ElevatedButton';

const ContentWrapper = styled.div`
    padding: 20px;
`;

const Card = () => {
    return (
        <ElevatedCard
            backgroundColor="#AE275F"
            edgeColors={{
                bottom: '#5C1532',
                right: '#851E49',
            }}
            style={{
                width: '230px',
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
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: `1px solid ${mainColors.white}`,
                            }}
                            className="h-center v-center"
                        >
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: colorPalette.popWhite[300],
                                }}
                            />
                        </Row>
                    </Row>
                    <HorizontalSpacer n={8} />
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
                    <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
                        $100,000.00
                    </Typography>
                    <HorizontalSpacer n={4} />
                    <CustomButton children={'Sign Up'} variant={'primary'} kind={'elevated'} />

                </Column>
            </ContentWrapper>
        </ElevatedCard>
    );
};

const RowOfCards = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Card />
                <Card />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default RowOfCards;