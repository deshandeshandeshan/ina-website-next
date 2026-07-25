import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0] {
    _id,
    _createdAt,
    title,
    heroImage { alt, asset->{ _id, url, metadata { dimensions { width, height } } } },
    seo { title, description },
    content[] {
      _key,
      _type,
      ...,

      _type == "doubleLandscape" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "doublePortrait" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeImageLeft" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeImageRight" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "singleLandscape" => {
        title,
        image { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "singlePortrait" => {
        title,
        image { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeText" => {
        title,
        text
      },

      _type == "fullBleedImage" => {
        title,
        image { alt, caption, asset->{ _id, url } },
        text
      },

      _type == "fullBleedImageRight" => {
        title,
        imageLeft { alt, caption, asset->{ _id, url } },
        imageRight { alt, caption, asset->{ _id, url } }
      },

      _type == "imageCarousel" => {
        title,
        carouselImages[] {
          title,
          image { alt, caption, asset->{ _id, url } }
        }
      }
    }
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"][0] {
    _id,
    _createdAt,
    title,
    description[],
    aboutImage {
      alt,
      caption,
      asset->{ _id, url }
    },
    email,
    aboutSocialLinks[] {
      platform,
      url
    },
    designAndDevelopment {
      name,
      url
    },
    seo { title, description },
    content[] {
      _key,
      _type,
      ...,

      _type == "doubleLandscape" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "doublePortrait" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeImageLeft" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeImageRight" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "singleLandscape" => {
        title,
        image { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "singlePortrait" => {
        title,
        image { alt, caption, asset->{ _id, url } },
        overlayImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeText" => {
        title,
        text
      },

      _type == "fullBleedImage" => {
        title,
        image { alt, caption, asset->{ _id, url } },
        text
      },

      _type == "fullBleedImageRight" => {
        title,
        imageLeft { alt, caption, asset->{ _id, url } },
        imageRight { alt, caption, asset->{ _id, url } }
      },

      _type == "imageCarousel" => {
        title,
        carouselImages[] {
          title,
          image { alt, caption, asset->{ _id, url } }
        }
      }
    }
  }
`);

export const FOOTER_SETTINGS = defineQuery(`
  *[_type == "footerSettings"][0] {
    _id,
    _createdAt,
    description,
    email,
    siteDesignAndDevelopment {
      name,
      url
    }
  }
`);

export const SITE_SETTINGS = defineQuery(`
  *[_type == "siteSettings"][0]{
    siteTitle,
    defaultDescription
  }
`);

const CATEGORY_CONTENT_PROJECTION = `
  _key,
  categoryName,
  content[] {
    _key,
    _type,
    ...,

    _type == "doubleLandscape" => {
      title,
      leftImage { alt, caption, asset->{ _id, url } },
      rightImage { alt, caption, asset->{ _id, url } },
      overlayImage { alt, caption, asset->{ _id, url } }
    },

    _type == "doublePortrait" => {
      title,
      leftImage { alt, caption, asset->{ _id, url } },
      rightImage { alt, caption, asset->{ _id, url } },
      overlayImage { alt, caption, asset->{ _id, url } }
    },

    _type == "largeImageLeft" => {
      title,
      leftImage { alt, caption, asset->{ _id, url } },
      rightImage { alt, caption, asset->{ _id, url } },
      overlayImage { alt, caption, asset->{ _id, url } }
    },

    _type == "largeImageRight" => {
      title,
      leftImage { alt, caption, asset->{ _id, url } },
      rightImage { alt, caption, asset->{ _id, url } },
      overlayImage { alt, caption, asset->{ _id, url } }
    },

    _type == "singleLandscape" => {
      title,
      image { alt, caption, asset->{ _id, url } },
      overlayImage { alt, caption, asset->{ _id, url } }
    },

    _type == "singlePortrait" => {
      title,
      image { alt, caption, asset->{ _id, url } },
      overlayImage { alt, caption, asset->{ _id, url } }
    },

    _type == "largeText" => {
      title,
      text
    },

    _type == "fullBleedImage" => {
      title,
      image { alt, caption, asset->{ _id, url } },
      text
    },

    _type == "fullBleedImageRight" => {
      title,
      imageLeft { alt, caption, asset->{ _id, url } },
      imageRight { alt, caption, asset->{ _id, url } }
    },

    _type == "imageCarousel" => {
      title,
      carouselImages[] {
        title,
        image { alt, caption, asset->{ _id, url } }
      }
    }
  }
`;

export const WORK_QUERY = defineQuery(`
  *[_type == "work"][0] {
    _id,
    _createdAt,
    title,
    categories[] { ${CATEGORY_CONTENT_PROJECTION} },
    seo { title, description }
  }
`);

export const ENQUIRE_QUERY = defineQuery(`
  *[_type == "enquire"][0] {
    _id,
    title,
    faqs[] {
      faqTitle,
      faqDescription[]
    },
    seo { title, description }
  }
`);
