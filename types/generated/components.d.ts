import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFeatureBlock extends Schema.Component {
  collectionName: 'components_components_feature_blocks';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Enumeration<['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface LayoutFeatureSection extends Schema.Component {
  collectionName: 'components_layout_feature_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    features: Attribute.Component<'components.feature-block', true>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    text: Attribute.Text;
    socialLink: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    ctaButton: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    link: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.feature-block': ComponentsFeatureBlock;
      'components.link': ComponentsLink;
      'layout.feature-section': LayoutFeatureSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
