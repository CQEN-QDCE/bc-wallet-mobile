import React from "react";
import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

import CredentialList from "../assets/img/credential-list.svg";
import ScanShare from "../assets/img/scan-share.svg";
import SecureImage from "../assets/img/secure-image.svg";
import { Button, ButtonType, Theme, createStyles } from "aries-bifold";
import { GenericFn } from "aries-bifold";
import { testIdWithKey } from "aries-bifold";
import { ScrollView } from "react-native-gesture-handler";

const endPage = (onTutorialCompleted: GenericFn, theme: Theme['OnboardingTheme']) => {
  const defaultStyle = createStyles(theme);
  const imageDisplayOptions = {
    fill: theme.imageDisplayOptions.fill,
    height: 180,
    width: 180,
  };
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <SecureImage {...imageDisplayOptions} />
      </View>
      <ScrollView style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
        <Text style={[defaultStyle.headerText, { fontSize: 18 }]}>
        Prenez le contrôle de vos informations
        </Text>
        <Text style={[defaultStyle.bodyText, { marginTop: 20 }]}>
        Vous avez le contrôle sur ce que vous prouvez, quand et comment, à partir de vos
          justificatifs, et vous approuvez chaque utilisation.
          {"\n\n"}Le gouvernement du Québec n'est pas informé lorsque vous utilisez
          vos titres de compétences.
        </Text>
      </ScrollView>
      <View
        style={{
          marginTop: "auto",
          marginBottom: 45,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        {/* <View style={[defaultStyle.point, { marginTop: 60 }]}>
          <Icon name={'info'} size={30} color={Colors.text} style={{ marginRight: 5 }} />
          <TouchableOpacity
            accessibilityLabel={'Learn More'}
            accessible
            onPress={() => Linking.openURL('https://example.com/')}
          >
            <Text style={[defaultStyle.bodyText, { color: 'blue', textDecorationLine: 'underline' }]}>
              Learn more about the BC Wallet
            </Text>
          </TouchableOpacity>
          <Icon name={'open-in-new'} size={14} color={Colors.text} style={{ marginLeft: 5 }} />
        </View> */}
        <Button
          title={"Get Started"}
          accessibilityLabel={"Get Started"}
          testID={testIdWithKey("GetStarted")}
          onPress={onTutorialCompleted}
          buttonType={ButtonType.Primary}
        />
      </View>
    </>
  );
};

const startPages = (theme: Theme) => {
  const defaultStyle = createStyles(theme);
  return (
    <>
      <Text
        style={[defaultStyle.headerText, { marginLeft: 20, marginRight: 20 }]}
      >
        Bienvenue
      </Text>
      <Text
        style={[
          defaultStyle.bodyText,
          { marginLeft: 20, marginTop: 35, marginRight: 20 },
        ]}
      >
        Le portefeuille québécois est un moyen sûr, privé et facile de prouver votre identité
        en ligne et en personne.
      </Text>
      <Text
        style={[
          defaultStyle.bodyText,
          { marginLeft: 20, marginTop: 25, marginRight: 20 },
        ]}
      >
        Vous ajoutez vos cartes et documents numériques et les utilisez pour accéder aux
        services en ligne, et bénéficier d'un traitement plus rapide des services.
      </Text>
      <Text
        style={[
          defaultStyle.bodyText,
          { marginLeft: 20, marginTop: 25, marginRight: 20 },
        ]}
      >
        Avec le portefeuille québécois, vous êtes propriétaire de vos données. Vous gardez le contrôle total et ne partagez
        seulement ce qui est nécessaire.{" "}
      </Text>
    </>
  );
};

const guides: Array<{
  image: React.FC<SvgProps>;
  title: string;
  body: string;
}> = [
  {
    image: CredentialList,
    title: "Stocker et sécuriser les informations d'identification",
    body: "Les justificatifs numériques sont les versions numériques des cartes et documents que vous connaissez déjà, tels que les cartes de membre et les permis de conduire. Ils sont stockés en toute sécurité dans cette application de portefeuille numérique, uniquement sur cet appareil.",
  },
  {
    image: ScanShare,
    title: "Ne partagez que ce qui est nécessaire",
    body: "Pour utiliser - \"prouver des choses\" - vos informations d'identification, en ligne ou en personne, vous scannez un code QR pour commencer. Vous ne partagez que les parties d'une information d'identification nécessaires à une situation donnée, ce qui est préférable pour la confidentialité.",
  },
];

const createPageWith = (
  image: React.FC<SvgProps>,
  title: string,
  body: string,
  theme: Theme['OnboardingTheme']
) => {
  const defaultStyle = createStyles(theme);
  const imageDisplayOptions = {
    fill: theme.imageDisplayOptions.fill,
    height: 180,
    width: 180,
  };
  return (
    <>
      <View style={{ alignItems: "center" }}>{image(imageDisplayOptions)}</View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
        <Text style={[defaultStyle.headerText, { fontSize: 18 }]}>{title}</Text>
        <Text style={[defaultStyle.bodyText, { marginTop: 20 }]}>{body}</Text>
      </View>
    </>
  );
};

export const pages = (
  onTutorialCompleted: GenericFn,
  theme: Theme
): Array<Element> => {
  return [
    startPages(theme),
    ...guides.map((g) => createPageWith(g.image, g.title, g.body, theme)),
    endPage(onTutorialCompleted, theme),
  ];
};
