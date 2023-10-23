import { CanopyEnvironment } from "@customTypes/canopy";
import Container from "@components/Shared/Container";
import FACETS from "@.canopy/facets.json";
import Heading from "../components/Shared/Heading/Heading";
import Hero from "@components/Hero/Hero";
import { HeroWrapper } from "../components/Hero/Hero.styled";
import Layout from "@components/layout";
import { LocaleString } from "@hooks/useLocale";
import React from "react";
import Related from "../components/Related/Related";
import { canopyManifests } from "@lib/constants/canopy";
import { createCollection } from "../lib/iiif/constructors/collection";
import { getRelatedFacetValue } from "../lib/iiif/constructors/related";
import { useCanopyState } from "@context/canopy";

interface IndexProps {
  featuredItem: any;
  collections: string[];
}

const Index: React.FC<IndexProps> = ({ featuredItem, collections }) => {
  const { canopyState } = useCanopyState();
  const {
    config: { baseUrl },
  } = canopyState;

  const hero = {
    ...featuredItem,
    items: featuredItem.items.map((item: any) => {
      return {
        ...item,
        homepage: [
          {
            id: `${baseUrl}/works/`,
            type: "Text",
            label: item.label,
          },
        ],
      };
    }),
  };

  return (
    <Layout>
      <HeroWrapper>
        <Hero collection={hero} />
      </HeroWrapper>
      <Container>
        <Heading as="h2">Sobre a coleção</Heading>
        <div>
          <p>
          Nos anos 1960, quando governava o Estado da Guanabara, Carlos Lacerda (1914-1977) ganhou, 
          não se sabe de quem, uma mala cheia de negativos fotográficos de vidro, além de imagens impressas.
          Eram registros raros do Rio em sua belle époque –o período entre 1902 e 1930–, fase de grandes 
          transformações urbanas na então capital do país. Após anos esquecido e inacessível ao público, 
          esse material foi comprado no fim de 2016 pelo IMS (Instituto Moreira Salles) e agora está disponível 
          para consulta. A estrela do acervo é o morro do Castelo, berço da fundação do Rio, que ficava na região 
          central. Cerca de 40% das imagens retratam o cotidiano de seus habitantes e sua demolição, nos anos 1920.
          - Marco Aurélio Canônico,{" "}
          <a href="https://www1.folha.uol.com.br/ilustrada/2017/01/1854362-acervo-de-carlos-lacerda-com-fotos-da-belle-epoque-carioca-sera-digitalizado.shtml">
          Folha de São Paulo
          </a>.
          </p>
        </div>
        <Related
          collections={collections}
          title={LocaleString("homepageHighlightedWorks")}
        />
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const manifests = canopyManifests();

  // @ts-ignore
  const { featured, metadata, baseUrl } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;

  const randomFeaturedItem =
    manifests[Math.floor(Math.random() * manifests.length)];
  const featuredItem = await createCollection(
    featured ? featured : [randomFeaturedItem.id]
  );

  const collections = FACETS.map((facet) => {
    const value = getRelatedFacetValue(facet.label);
    return `${baseUrl}/api/facet/${facet.slug}/${value.slug}.json?sort=random`;
  });

  return {
    props: { metadata, featuredItem, collections },
    revalidate: 3600,
  };
}

export default Index;
