import { HeadingFive, TextPrimitive } from './Text';

import system from '@rebass/components';

const DEFAULT_CARD_PADDING = 3;

// @todo the checking for image to set overflow hidden is hacky
const shouldCardOverflow = props => {
    // @todo this is hacky
    if (!props.children[0]) {
        return false;
    }
    /* 
        This just checks to see if CardImage is present, which 
        is the main reason why we would hide the overflow.
        This should probably end up being done differently.
    */
    if (props.children[0].type.displayName === 'CardImage') {
        return true;
    }

    return false;
};

const Card = system(
    {
        boxShadow: 100,
        bg: 'white',
        border: 1,
        borderRadius: 'medium',
        borderColor: 'transparent',
        p: DEFAULT_CARD_PADDING,
        textAlign: 'left',
    },
    'boxShadow',
    'color',
    'border',
    'borderRadius',
    'borderColor',
    'space',
    'textAlign',
    props => ({
        overflow: shouldCardOverflow(props) ? 'hidden' : 'visible',
    })
);

const CardTitle = system({
    extend: HeadingFive,
    mb: 2,
    mt: 0,
    fontWeight: 'bold',
    color: 'black',
});

const CardBodyText = system({
    extend: TextPrimitive,
    color: 'grey',
    // Cabana's setup here is using a hardcoded line height for card text
    lineHeight: 'body',
    fontSize: 'small',
});

/*
    @Todo: Aspect ratio stuff
*/
const CardImage = system(
    {
        is: 'img',
        src:
            'https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        m: -DEFAULT_CARD_PADDING,
        mb: DEFAULT_CARD_PADDING,
    },
    'space',
    'maxWidth',
    'height',
    () => ({
        maxWidth: 'calc(100% + 2 * 24px)',
    })
);

CardImage.displayName = 'CardImage';

/*
    Footer needs to have the same mx, mb, mt values as set by the p value (padding) for the parent card
    Basically, if the user wishes to define different padding on cards, they also need to set the margins
    for the footer
*/
const CardFooter = system(
    {
        borderTop: 1,
        borderColor: 'lightGrey',
        fontFamily: 'default',
        mx: -DEFAULT_CARD_PADDING,
        mb: -DEFAULT_CARD_PADDING,
        mt: DEFAULT_CARD_PADDING,
        p: DEFAULT_CARD_PADDING,
    },
    'space',
    'fontFamily',
    'borderTop',
    'borderColor'
);

export { Card, CardTitle, CardBodyText, CardFooter, CardImage };
