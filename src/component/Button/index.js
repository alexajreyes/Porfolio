import React from 'react'
import { OutLineButton, LinkButton, FilledButton } from './style'

export default function Button({
  variant = '',
  children,
  width = '100%',
  mt,
  mb,
  ml,
  mr,
  size,
  color,
  textColor = '#fff',
  onClick = () => {},
  ...rest
}) {
  switch (variant.toLowerCase()) {
    case 'filled':
      return (
        <FilledButton
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          width={width}
          size={size}
          color={color}
          textColor={textColor}
          onClick={onClick}
          {...rest}
        >
          {children}
        </FilledButton>
      )
    case 'outline':
      return (
        <OutLineButton
          width={width}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          textColor={textColor}
          onClick={onClick}
          {...rest}
        >
          {children}
        </OutLineButton>
      )
    case 'link':
      return (
        <LinkButton
          width={width}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          textColor={textColor}
          onClick={onClick}
          {...rest}
        >
          {children}
        </LinkButton>
      )

    default:
      return (
        <FilledButton
          width={width}
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          textColor={textColor}
          onClick={onClick}
          {...rest}
        >
          {children}
        </FilledButton>
      )
  }
}
