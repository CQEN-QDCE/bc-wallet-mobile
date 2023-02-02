import { useTheme } from 'aries-bifold'
import React from 'react'
import { StyleSheet } from 'react-native'

const { ColorPallet } = useTheme()
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '4%',
    borderRadius: 2,
    backgroundColor: ColorPallet.grayscale.lightGrey,
    marginBottom: '2%',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: '2%',
    paddingVertical: '3%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
