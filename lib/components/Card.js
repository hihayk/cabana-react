import { HeadingFive, TextPrimitive } from './Text';
import { maxWidth, space } from 'styled-system';

import styled from 'styled-components';
import system from 'system-components';

const DEFAULT_CARD_PADDING = 3;

const Card = system({
    boxShadow: 100,
    bg: 'white',
    border: 1,
    borderRadius: 'medium',
    borderColor: 'transparent',
    p: DEFAULT_CARD_PADDING,
    textAlign: 'left',
});

const CardTitle = system({
    is: HeadingFive,
    mb: 2,
    fontWeight: 'bold',
    color: 'black',
});

const CardBodyText = system({
    is: TextPrimitive,
    color: 'grey',
    // Cabana's setup here is using a hardcoded line height for card text
    lineHeight: 'body',
    fontSize: 'small',
});
const CardImage = styled.img`
    max-width: calc(100% + 2 * 24px);
    ${space};
    ${maxWidth};
`;

/*
    Footer needs to have the same mx, mb, mt values as set by the p value (padding) for the parent card
    Basically, if the user wishes to define different padding on cards, they also need to set the margins
    for the footer
*/
const CardFooter = system({
    borderTop: 1,
    borderColor: 'lightGrey',
    mx: -DEFAULT_CARD_PADDING,
    mb: -DEFAULT_CARD_PADDING,
    mt: DEFAULT_CARD_PADDING,
    p: DEFAULT_CARD_PADDING,
});

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
