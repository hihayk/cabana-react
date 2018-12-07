import React from 'react';
import system from '@rebass/components';
import { defaultStyledSystemFunctions } from '../constants';

const textPrimitiveDefaultProps = {
    is: 'span',
    fontFamily: 'default',
    fontWeight: 'normal',
    mb: 0,
    mt: 0,
};
const TextPrimitive = system(textPrimitiveDefaultProps, ...defaultStyledSystemFunctions);

/*
    Component Definitions
    These are bisically 'pre-styled' fonts
*/
const getHeadingProps = ({ is, size, display }) => ({
    is,
    fontSize: size,
    lineHeight: size,
    display,
});

const UberText = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'uber' })} {...props} />;
const HeroText = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'hero' })} {...props} />;
const LeadText = props => <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'lead' })} {...props} />;
const BodyText = props => <TextPrimitive {...getHeadingProps({ is: 'p', size: 'body' })} {...props} />;
const CaptionText = props => <TextPrimitive {...getHeadingProps({ is: 'small', size: 'caption' })} {...props} />;
const SmallText = props => <TextPrimitive {...getHeadingProps({ is: 'small', size: 'small' })} {...props} />;
const TinyText = props => <TextPrimitive {...getHeadingProps({ is: 'small', size: 'tiny' })} {...props} />;

const HeadingOne = props => (
    <TextPrimitive {...getHeadingProps({ is: 'h1', size: 'h1', display: 'block' })} {...props} />
);
const HeadingTwo = props => (
    <TextPrimitive {...getHeadingProps({ is: 'h2', size: 'h2', display: 'block' })} {...props} />
);
const HeadingThree = props => (
    <TextPrimitive {...getHeadingProps({ is: 'h3', size: 'h3', display: 'block' })} {...props} />
);
const HeadingFour = props => (
    <TextPrimitive {...getHeadingProps({ is: 'h4', size: 'h4', display: 'block' })} {...props} />
);
const HeadingFive = props => (
    <TextPrimitive {...getHeadingProps({ is: 'h5', size: 'h5', display: 'block' })} {...props} />
);

export {
    BodyText,
    CaptionText,
    HeadingFive,
    HeadingFour,
    HeadingOne,
    HeadingThree,
    HeadingTwo,
    HeroText,
    LeadText,
    SmallText,
    TextPrimitive,
    TinyText,
    UberText,
};
