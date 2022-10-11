import { CredentialExchangeRecord } from '@aries-framework/core'
import { GenericFn, testIdWithKey, useTheme, useStore, useConfiguration } from 'aries-bifold/App'
import { dateFormatOptions } from 'aries-bifold/App/constants'
import { getCredentialConnectionLabel, hashCode, hashToRGBA, parsedCredDefName } from 'aries-bifold/App/utils/helpers'
import { luminanceForHexColour } from 'aries-bifold/App/utils/luminance'
import { credentialSchema } from 'aries-bifold/App/utils/schema'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions, ImageBackground, LayoutRectangle, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface CredentialCardProps {
  credential: CredentialExchangeRecord
  onPress?: GenericFn
  style?: ViewStyle
}

const borderRadius = 8

const CredentialCard: React.FC<CredentialCardProps> = ({ credential, style = {}, onPress = undefined }) => {
  const { t } = useTranslation()
  const { ColorPallet, TextTheme } = useTheme()
  const { OCABundle: branding } = useConfiguration()

  const credentialLabel = parsedCredDefName(credential)
  const credentialBackgroundColor = hashToRGBA(hashCode(credentialLabel))
  const credentialConnectionLabel = getCredentialConnectionLabel(credential)

  const [state] = useStore()
  const [isRevoked, setIsRevoked] = useState<boolean>(false)

  const { revoked } = state.credential

  const schema = credentialSchema(credential) || ''
  const overlay = branding[schema]

  const styles = StyleSheet.create({
    container: {
      shadowColor: ColorPallet.grayscale.lightGrey,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
      width: '100%',
      overflow: 'hidden',
      borderRadius: borderRadius,
    },
    cardLeftSectionContainer: {
      width: 45,
      minHeight: 72,
      overflow: 'hidden',
      borderBottomLeftRadius: borderRadius,
    },
    cardLeftSectionImage: {
      resizeMode: 'cover',
    },
    logo: {
      height: 40,
      width: 40,
      position: 'absolute',
      backgroundColor: '#000',
      borderRadius: borderRadius / 5,
      overflow: 'hidden',
      top: 20,
      left: 16,
      zIndex: 5,
    },
    bodyContainer: {
      flexGrow: 1,
      backgroundColor: '#fff',
      borderBottomRightRadius: borderRadius,
    },
    attestationIssuerNameText: {
      color: '#647287',
      paddingTop: 16,
      paddingBottom: 4,
      fontSize: 16,
      textAlign: 'left',
    },
    attestationSchemaNameText: {
      color: '#27284a',
      fontWeight: '700',
      fontSize: 16,
      paddingTop: 4,
      paddingBottom: 16,
      textAlign: 'left',
    },
    footerContainer: {
      flexDirection: 'row',
      marginTop: -10,
      alignItems: 'center',
      backgroundColor: ColorPallet.notification.error,
      height: 50,
      zIndex: 1,
    },
    footerLeftSectionContainer: {
      height: '100%',
      width: 45,
      backgroundColor: '#e34a4a',
    },
    flexGrow: {
      flexGrow: 1,
    },
  })

  useEffect(() => {
    if (!credential) {
      return
    }
    const indyCredentialFormat = credential.credentials.find((c) => c.credentialRecordType === 'indy')
    if (!indyCredentialFormat) {
      return
    }
    const isRevoked = revoked.has(indyCredentialFormat.credentialRecordId)
    setIsRevoked(isRevoked)
  }, [credential])

  const renderCredentialCardFooter = () => {
    return (
      <View testID={testIdWithKey('CredentialCardFooter')} style={styles.footerContainer}>
        <View style={styles.footerLeftSectionContainer} />
        <Text
          style={[TextTheme.label, { color: ColorPallet.semantic.error, paddingTop: 10, paddingLeft: 16 }]}
          testID={testIdWithKey('CredentialRevoked')}
        >
          Révoqué
        </Text>
      </View>
    )
  }

  const renderCredentialCardLeftSection = () => {
    return (
      <View style={styles.cardLeftSectionContainer}>
        {overlay?.imageSource ? (
          <ImageBackground
            source={overlay?.imageSource}
            style={{ width: '100%', height: '100%' }}
            imageStyle={styles.cardLeftSectionImage}
          />
        ) : (
          <View
            style={{
              backgroundColor: overlay?.backgroundColor ?? credentialBackgroundColor,
              width: '100%',
              flex: 1,
            }}
          />
        )}
      </View>
    )
  }

  const renderCredentialCardLogo = () => {
    if (overlay?.header?.imageSource) {
      return (
        <View style={styles.logo}>
          <ImageBackground
            source={overlay?.header?.imageSource}
            style={{ width: '100%', height: '100%' }}
            imageStyle={styles.cardLeftSectionImage}
          />
        </View>
      )
    }
    return
  }

  const renderCredentialCardBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <View style={{ marginLeft: 16 }}>
          <Text
            numberOfLines={1}
            style={[styles.attestationIssuerNameText]}
            testID={testIdWithKey('CredentialIssuer')}
            maxFontSizeMultiplier={1}
          >
            {credentialConnectionLabel}
          </Text>

          <Text
            numberOfLines={2}
            style={[TextTheme.label, styles.attestationSchemaNameText]}
            testID={testIdWithKey('CredentialName')}
            maxFontSizeMultiplier={1}
          >
            {credentialLabel}
          </Text>
        </View>
      </View>
    )
  }

  const renderCredentialCard = (revoked = false) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            shadowOffset: { width: 0, height: 1 },
            shadowColor: ColorPallet.grayscale.darkGrey,
            shadowOpacity: 0.2,
            shadowRadius: 10,
            zIndex: 4,
          }}
        >
          {renderCredentialCardLeftSection()}
          {renderCredentialCardBody()}
        </View>
        {renderCredentialCardLogo()}
        {revoked ? renderCredentialCardFooter() : null}
      </>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        shadowOffset: { width: 1, height: 3 },
        shadowColor: ColorPallet.grayscale.darkGrey,
        shadowOpacity: 0.2,
        shadowRadius: 8,
      }}
    >
      <TouchableOpacity
        disabled={typeof onPress === 'undefined'}
        onPress={onPress}
        style={[styles.container, style]}
        testID={testIdWithKey('ShowCredentialDetails')}
      >
        {renderCredentialCard(true)}
      </TouchableOpacity>
    </View>
  )
}

export default CredentialCard
