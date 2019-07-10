// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import normalize from 'react-native-elements/src/helpers/normalizeText'
import { fontStyle } from '../styles'
import Text from './Text'

/**
 * Receives a number and a unit to display
 * @param {Props} props
 * @param {Number} [props.number] Number to show
 * @param {String} [props.unit] Units for the number
 * @param {Object} [props.elementStyles] Inner elements styles
 * @param {Object} [props.style] Outer element style
 * @returns {React.Node}
 */
const BigNumber = (props: any) => (
  <View style={[styles.bigNumberWrapper, props.style]}>
    <Text style={[styles.bigNumber, props.elementStyles]}>{props.number}</Text>
    <Text style={[styles.bigNumberUnit, props.elementStyles]}>{props.unit}</Text>
  </View>
)

const styles = StyleSheet.create({
  bigNumberWrapper: {
    display: 'inline-block',
  },
  bigNumber: {
    ...fontStyle,
    fontSize: normalize(30),
    textAlign: 'right',
  },
  bigNumberUnit: {
    ...fontStyle,
    textAlign: 'right',
  },
})

export default BigNumber
