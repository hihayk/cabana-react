// import styled from 'styled-components';
import { defaultStyledSystemFunctions } from '../constants';
import system from '@rebass/components';

const Box = system({ fontFamily: 'default' }, ...defaultStyledSystemFunctions);
Box.displayName = 'Box';

export default Box;
