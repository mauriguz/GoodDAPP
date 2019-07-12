import React from 'react'
import normalize from 'react-native-elements/src/helpers/normalizeText'
import { Text } from '../../common'
import { withStyles } from '../../../lib/styles'

const EventCounterParty = ({ feedItem, styles, style }) => {
  const direction = feedItem.type === 'send' ? 'To' : 'From'
  const withdrawStatusText =
    feedItem.type === 'send' && feedItem.data.endpoint.withdrawStatus
      ? ` by link - ${feedItem.data.endpoint.withdrawStatus}`
      : ''
  return (
    <Text style={[styles.rowDataText, style]} numberOfLines={1} ellipsizeMode="tail">
      <Text style={styles.direction}>{direction}:</Text>
      <Text style={styles.fullName}>{` ${feedItem.data.endpoint.fullName}${withdrawStatusText}`}</Text>
    </Text>
  )
}

const getStylesFromProps = ({ theme }) => ({
  rowDataText: {
    fontSize: normalize(16),
    textTransform: 'capitalize',
    color: theme.fontStyle.color,
  },
  direction: {
    fontSize: normalize(8),
  },
  fullName: {
    fontFamily: theme.fonts.medium,
    fontSize: normalize(16),
  },
})

export default withStyles(getStylesFromProps)(EventCounterParty)
