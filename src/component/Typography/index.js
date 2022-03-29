import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  Title,
  Title2,
  Title3,
  Title4,
  Body,
  Body2,
  Body3,
  Caption,
} from './style'
import { ThemeContext } from 'styled-components'

export const Typography = ({
  value,
  color,
  variant,
  mt,
  mb,
  ml,
  mr,
  align,
}) => {
  const theme = useContext(ThemeContext)

  switch (variant.toLowerCase()) {
    case 'title':
      return (
        <Title
          align={align}
          mt={mt}
          ml={ml}
          mr={mr}
          mb={mb}
          theme={theme}
          color={color}
        >
          {value}
        </Title>
      )

    case 'title2':
      return (
        <Title2
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Title2>
      )

    case 'title3':
      return (
        <Title3
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Title3>
      )

    case 'title4':
      return (
        <Title4
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Title4>
      )

    case 'body':
      return (
        <Body
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Body>
      )

    case 'body2':
      return (
        <Body2
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Body2>
      )

    case 'body3':
      return (
        <Body3
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Body3>
      )

    case 'caption':
      return (
        <Caption
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Caption>
      )

    default:
      return (
        <Body
          align={align}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          theme={theme}
          color={color}
        >
          {value}
        </Body>
      )
  }
}

Typography.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
}
