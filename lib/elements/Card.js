import styled from 'styled-components';
import { themeGet, space, maxWidth } from 'styled-system';
import Box from './Box';
import { HeadingFive as CardTitle, TextPrimitive } from './Text';

const DEFAULT_CARD_PADDING = 3;

const Card = styled(Box)`
    // todo: this is just for images
    overflow: hidden;
`;

const CardFooter = styled(Box)`
    border-top: 1px solid;
    border-top-color: ${({ borderColor }) => themeGet(`colors.${borderColor}`, borderColor)};
`;

const CardImage = styled.img`
    max-width: calc(100% + 2 * 24px);
    ${space};
    ${maxWidth};
`;

Card.defaultProps = {
    boxShadow: 100,
    bg: 'white',
    border: 1,
    borderRadius: 'medium',
    borderColor: 'lightGrey',
    p: DEFAULT_CARD_PADDING,
};

CardTitle.defaultProps = {
    mb: 2,
    fontWeight: 'bold',
    color: 'black',
};
const CardBodyText = styled(TextPrimitive)``;
CardBodyText.defaultProps = {
    color: 'grey',
    // Cabana's setup here is using a hardcoded line height for card text
    lineHeight: 1.5,
    fontSize: 'small',
};

/*
    Footer needs to have the same mx, mb, mt values as set by the p value (padding) for the parent card
    Basically, if the user wishes to define different padding on cards, they also need to set the margins
    for the footer
*/
CardFooter.defaultProps = {
    borderColor: 'lightGrey',
    mx: -DEFAULT_CARD_PADDING,
    mb: -DEFAULT_CARD_PADDING,
    mt: DEFAULT_CARD_PADDING,
    p: DEFAULT_CARD_PADDING,
};

/*
    @Todo: Aspect ratio stuff
*/
CardImage.defaultProps = {
    src:
        'https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    m: -DEFAULT_CARD_PADDING,
    mb: DEFAULT_CARD_PADDING,
};

export { Card, CardTitle, CardBodyText, CardFooter, CardImage };
