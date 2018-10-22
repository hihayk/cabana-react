import React from 'react';
import system from '@rebass/components';

const textPrimitiveDefaultProps = {
    is: 'span',
    fontFamily: 'default',
    fontWeight: 'normal',
};
const TextPrimitive = system(
    textPrimitiveDefaultProps,
    'fontFamily',
    'textAlign',
    'fontWeight',
    'color',
    'fontSize',
    'lineHeight',
    'space',
    'display'
);

/*
    Component Definitions
    These are bisically 'pre-styled' fonts
*/
const getHeadingProps = ({ is, size }) => ({
    is,
    fontSize: size,
    lineHeight: size,
});

const UberText = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'uber' })} {...props} />;
const HeroText = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'uber' })} {...props} />;
const LeadText = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'lead' })} {...props} />;
const BodyText = props => <TextPrimitive {...getHeadingProps({ is: 'p', size: 'body' })} {...props} />;
const CaptionText = props => <TextPrimitive {...getHeadingProps({ is: 'small', size: 'caption' })} {...props} />;
const SmallText = props => <TextPrimitive {...getHeadingProps({ is: 'small', size: 'small' })} {...props} />;
const TinyText = props => <TextPrimitive {...getHeadingProps({ is: 'small', size: 'tiny' })} {...props} />;

const HeadingOne = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'h1' })} {...props} />;
const HeadingTwo = props => <TextPrimitive {...getHeadingProps({ is: 'h2', size: 'h2' })} {...props} />;
const HeadingThree = props => <TextPrimitive {...getHeadingProps({ is: 'h3', size: 'h3' })} {...props} />;
const HeadingFour = props => <TextPrimitive {...getHeadingProps({ is: 'h4', size: 'h4' })} {...props} />;
const HeadingFive = props => <TextPrimitive {...getHeadingProps({ is: 'h5', size: 'h5' })} {...props} />;

export {
    TextPrimitive,
    UberText,
    HeroText,
    LeadText,
    BodyText,
    SmallText,
    CaptionText,
    TinyText,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
};
