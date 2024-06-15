import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsCarouselMedia extends Schema.Component {
  collectionName: 'components_elements_carousel_medias';
  info: {
    displayName: 'Carousel media';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos', true>;
    url: Attribute.String;
  };
}

export interface ElementsClient extends Schema.Component {
  collectionName: 'components_elements_clients';
  info: {
    displayName: 'Client';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    isNewTab: Attribute.Boolean & Attribute.DefaultTo<true>;
    media: Attribute.Media<'images'>;
  };
}

export interface ElementsEmployee extends Schema.Component {
  collectionName: 'components_elements_employees';
  info: {
    displayName: 'Employee';
    description: '';
  };
  attributes: {
    position: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String;
  };
}

export interface ElementsFeedback extends Schema.Component {
  collectionName: 'components_elements_feedbacks';
  info: {
    displayName: 'feedback';
    description: '';
  };
  attributes: {
    feedback: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    position: Attribute.String;
    company: Attribute.String;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsHeroLarge extends Schema.Component {
  collectionName: 'components_elements_hero_larges';
  info: {
    displayName: 'Hero Large';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    img: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface ElementsLocales extends Schema.Component {
  collectionName: 'components_elements_locales';
  info: {
    displayName: 'locales';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    code: Attribute.String & Attribute.Required;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
    product_features: Attribute.Relation<
      'elements.plan',
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsPostPreviewItem extends Schema.Component {
  collectionName: 'components_elements_post_preview_items';
  info: {
    displayName: 'Post Preview Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    postUrl: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    isNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsService extends Schema.Component {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsSomeThing extends Schema.Component {
  collectionName: 'components_elements_some_things';
  info: {
    displayName: 'Statistic With Image';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    media: Attribute.Media<'images' | 'videos', true>;
    statisticOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsStatistic extends Schema.Component {
  collectionName: 'components_elements_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    statistic: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTest extends Schema.Component {
  collectionName: 'components_elements_tests';
  info: {
    displayName: 'post with image';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    pictureOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    media: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    picture: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTesting extends Schema.Component {
  collectionName: 'components_elements_testings';
  info: {
    displayName: 'testing';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    socialLinks: Attribute.Component<'links.social-link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    title: Attribute.String;
    copyright: Attribute.String;
    menuLinks: Attribute.Component<'links.link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
    locales: Attribute.Component<'elements.locales', true>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'callToAction']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'callToAction']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<
      [
        'YOUTUBE',
        'TWITTER',
        'DISCORD',
        'WEBSITE',
        'FACEBOOK',
        'INSTAGRAM',
        'LINKEDIN'
      ]
    >;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsClientSection extends Schema.Component {
  collectionName: 'components_sections_client_sections';
  info: {
    displayName: 'Client section';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.client', true>;
    title: Attribute.String;
  };
}

export interface SectionsContactUs extends Schema.Component {
  collectionName: 'components_sections_contact_uses';
  info: {
    displayName: 'Contact us';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.employee', true>;
    title: Attribute.String;
    description: Attribute.Text;
    isContactUsButton: Attribute.Boolean & Attribute.DefaultTo<true>;
    contactEmail: Attribute.String;
    buttonTitle: Attribute.String;
  };
}

export interface SectionsCustomerFeedback extends Schema.Component {
  collectionName: 'components_sections_customer_feedbacks';
  info: {
    displayName: 'Customer Feedback';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.feedback', true>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SectionsHeroLargeSection extends Schema.Component {
  collectionName: 'components_sections_hero_large_sections';
  info: {
    displayName: 'Hero Large Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    picture: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
  };
}

export interface SectionsImageCarousel extends Schema.Component {
  collectionName: 'components_sections_image_carousels';
  info: {
    displayName: 'Image carousel';
    description: '';
  };
  attributes: {
    imageCarousel: Attribute.Component<'elements.carousel-media', true>;
  };
}

export interface SectionsInfoBlockWithImage extends Schema.Component {
  collectionName: 'components_sections_info_block_with_images';
  info: {
    displayName: 'Info Block With Image';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    picture: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    pictureOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsInfoBlock extends Schema.Component {
  collectionName: 'components_sections_info_blocks';
  info: {
    displayName: 'Info Block';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    description_2: Attribute.Text;
    description_3: Attribute.Text;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images'>;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsLogosSection extends Schema.Component {
  collectionName: 'components_sections_logos_sections';
  info: {
    displayName: 'Logos section';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.testing', true>;
  };
}

export interface SectionsPageTitle extends Schema.Component {
  collectionName: 'components_sections_page_titles';
  info: {
    displayName: 'Page Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsPostSectionWithImage extends Schema.Component {
  collectionName: 'components_sections_post_section_with_images';
  info: {
    displayName: 'Post section with image';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.test'>;
  };
}

export interface SectionsPostSection extends Schema.Component {
  collectionName: 'components_sections_post_sections';
  info: {
    displayName: 'Post section';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.post-preview-item', true>;
  };
}

export interface SectionsPostStatisticWithImage extends Schema.Component {
  collectionName: 'components_sections_post_statistic_with_images';
  info: {
    displayName: 'Post statistic with image';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.some-thing'>;
    statistic: Attribute.Component<'elements.statistic', true>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsServicesHeadlineWithImage extends Schema.Component {
  collectionName: 'components_sections_services_headline_with_images';
  info: {
    displayName: 'Services Headline With Image';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    services: Attribute.Component<'elements.service', true>;
    pictureOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    media: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsWorkHeadlineWithImage extends Schema.Component {
  collectionName: 'components_sections_work_headline_with_images';
  info: {
    displayName: 'Post Headline With Image';
    description: '';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    picture: Attribute.Media<'images' | 'videos', true>;
    description: Attribute.Text;
  };
}

export interface SharedDescriptionMedia extends Schema.Component {
  collectionName: 'components_shared_description_medias';
  info: {
    displayName: 'Description Media';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.carousel-media': ElementsCarouselMedia;
      'elements.client': ElementsClient;
      'elements.employee': ElementsEmployee;
      'elements.feedback': ElementsFeedback;
      'elements.footer-section': ElementsFooterSection;
      'elements.hero-large': ElementsHeroLarge;
      'elements.locales': ElementsLocales;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.plan': ElementsPlan;
      'elements.post-preview-item': ElementsPostPreviewItem;
      'elements.service': ElementsService;
      'elements.some-thing': ElementsSomeThing;
      'elements.statistic': ElementsStatistic;
      'elements.test': ElementsTest;
      'elements.testimonial': ElementsTestimonial;
      'elements.testing': ElementsTesting;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.client-section': SectionsClientSection;
      'sections.contact-us': SectionsContactUs;
      'sections.customer-feedback': SectionsCustomerFeedback;
      'sections.heading': SectionsHeading;
      'sections.hero-large-section': SectionsHeroLargeSection;
      'sections.image-carousel': SectionsImageCarousel;
      'sections.info-block-with-image': SectionsInfoBlockWithImage;
      'sections.info-block': SectionsInfoBlock;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.logos-section': SectionsLogosSection;
      'sections.page-title': SectionsPageTitle;
      'sections.post-section-with-image': SectionsPostSectionWithImage;
      'sections.post-section': SectionsPostSection;
      'sections.post-statistic-with-image': SectionsPostStatisticWithImage;
      'sections.rich-text': SectionsRichText;
      'sections.services-headline-with-image': SectionsServicesHeadlineWithImage;
      'sections.services': SectionsServices;
      'sections.work-headline-with-image': SectionsWorkHeadlineWithImage;
      'shared.description-media': SharedDescriptionMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
