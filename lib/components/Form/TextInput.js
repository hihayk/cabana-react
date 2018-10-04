import { border, borderColor, borderRadius, color, fontSize, lineHeight, space, themeGet } from 'styled-system';

import { TextPrimitive } from '../Text';
import styled from 'styled-components';

const BaseInput = styled.input`
    ${color};
    ${border};
    ${borderColor};
    ${borderRadius};
    ${space};
    ${fontSize};
    ${lineHeight};

    &:focus {
        border-color: ${themeGet(`colors.inputFocus`, '#4688F1')};
        box-shadow: 0 0 0 1px ${themeGet(`colors.inputFocus`, '#4688F1')};
        outline: 0;
    }

    &::placeholder {
        color: ${({ placeholderColor }) => themeGet(`colors.${placeholderColor}`, placeholderColor)};
        opacity: 1;
    }

    &:hover:not(:disabled) {
        border-color: ${({ borderColorHover }) => themeGet(`colors.${borderColorHover}`, borderColorHover)};
        &::placeholder {
            color: ${({ placeholderHoverColor }) => themeGet(`colors.${placeholderHoverColor}`, placeholderHoverColor)};
            opacity: 1;
        }
    }

    &:active:not(:disabled) {
        border-color: ${({ borderColorActive }) => themeGet(`colors.${borderColorActive}`, borderColorActive)};
        &::placeholder {
            color: ${({ placeholderHoverColor }) => themeGet(`colors.${placeholderHoverColor}`, placeholderHoverColor)};
        }
    }

    &:disabled {
        &,
        &:hover {
            background-color: ${({ disabledBgColor }) => themeGet(`colors.${disabledBgColor}`, disabledBgColor)};
            border-color: ${({ disabledBorderColor }) =>
                themeGet(`colors.${disabledBorderColor}`, disabledBorderColor)};
            color: ${({ disabledBorderColor }) => themeGet(`colors.${disabledBorderColor}`, disabledBorderColor)};
        }
    }
`;

const TextInput = styled(BaseInput)``;
const FormLabel = styled(TextPrimitive)``;
const ValidationLabel = styled(TextPrimitive)``;

FormLabel.defaultProps = {
    as: 'label',
    color: 'grey',
    fontSize: 'small',
};

ValidationLabel.defaultProps = {
    as: 'div',
    color: 'error',
    fontSize: 'small',
};

TextInput.defaultProps = {
    color: 'black',
    bg: 'white',
    placeholder: 'Placeholder',
    borderRadius: 'small',
    p: 1,
    fontSize: 'body',
    lineHeight: 'body',
    border: '1px solid',
    borderColor: 'lightGrey',
    borderColorHover: 'grey',
    borderColorActive: 'primary',
    placeholderColor: 'lightGrey',
    placeholderHoverColor: 'grey',
    disabledBgColor: 'inputDisabledBg',
    disabledBorderColor: 'lightGrey',
};

export { FormLabel, TextInput, ValidationLabel };
