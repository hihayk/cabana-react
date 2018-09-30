import React from 'react';
import styled from 'styled-components';
import { lineHeight, color, space, fontFamily, fontWeight, textAlign, fontSize, flex } from 'styled-system';

const TextPrimitive = styled.span`
    ${color};
    ${space};
    ${textAlign};
    ${fontSize};
    ${fontFamily};
    ${fontWeight};
    ${lineHeight};
    ${flex};
`;

TextPrimitive.propTypes = {
    ...color.PropTypes,
    ...space.PropTypes,
    ...textAlign.PropTypes,
    ...fontSize.PropTypes,
    ...fontFamily.PropTypes,
    ...fontWeight.PropTypes,
    ...lineHeight.PropTypes,
};

TextPrimitive.defaultProps = {
    fontFamily: 'default',
    altFont: false,
    align: 'left',
    fontWeight: 'normal',
};

/*
    Component Definitions
    These are basically 'pre-styled' fonts
*/

const getHeadingProps = ({ as, size }) => ({
    as,
    fontSize: size,
    lineHeight: size,
});

const UberText = props => <TextPrimitive {...getHeadingProps({ as: 'h1', size: 'uber' })} {...props} />;
const HeroText = props => <TextPrimitive {...getHeadingProps({ as: 'h1', size: 'uber' })} {...props} />;
const LeadText = props => <TextPrimitive {...getHeadingProps({ as: 'h1', size: 'lead' })} {...props} />;
const BodyText = props => <TextPrimitive {...getHeadingProps({ as: 'p', size: 'body' })} {...props} />;
const CaptionText = props => <TextPrimitive {...getHeadingProps({ as: 'small', size: 'caption' })} {...props} />;
const SmallText = props => <TextPrimitive {...getHeadingProps({ as: 'small', size: 'small' })} {...props} />;
const TinyText = props => <TextPrimitive {...getHeadingProps({ as: 'small', size: 'tiny' })} {...props} />;

const HeadingOne = props => <TextPrimitive {...getHeadingProps({ as: 'h1', size: 'h1' })} {...props} />;
const HeadingTwo = props => <TextPrimitive {...getHeadingProps({ as: 'h2', size: 'h2' })} {...props} />;
const HeadingThree = props => <TextPrimitive {...getHeadingProps({ as: 'h3', size: 'h3' })} {...props} />;
const HeadingFour = props => <TextPrimitive {...getHeadingProps({ as: 'h4', size: 'h4' })} {...props} />;
const HeadingFive = props => <TextPrimitive {...getHeadingProps({ as: 'h5', size: 'h5' })} {...props} />;

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
