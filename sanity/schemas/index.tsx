import { SchemaTypeDefinition } from "sanity";
import { pageBuilderType } from "./pageBuilder";
import { footerSettingsType } from "./footerSettings";
import { eventBlockType } from "./blocks/eventBlocks/eventBlock";
import { aboutBlockType } from "./blocks/homeBlocks/aboutBlock";
import { featuredContentType } from "./blocks/homeBlocks/featuredContent";
import { headerMediaType } from "./blocks/homeBlocks/headerMedia";
import { doubleLandscapeType } from "./blocks/photographyBlocks/doubleLandscape";
import { doublePortraitType } from "./blocks/photographyBlocks/doublePortrait";
import { largeImageLeftType } from "./blocks/photographyBlocks/largeImageLeft";
import { largeImageRightType } from "./blocks/photographyBlocks/largeImageRight";
import { singleLandscapeType } from "./blocks/photographyBlocks/singleLandscape";
import { singlePortraitType } from "./blocks/photographyBlocks/singlePortrait";
import { pressBlockType } from "./blocks/pressBlocks/pressBlock";
import { creditsAndAwardsType } from "./blocks/workBlocks/creditsAndAwards";
import { imageCarouselType } from "./blocks/workBlocks/imageCarousel";
import { workHeaderMediaType } from "./blocks/workBlocks/workHeaderMedia";
import { headerInformationBlockType } from "./blocks/workBlocks/headerInformationBlock";
import { workLandscapeMediaType } from "./blocks/workBlocks/workLandscapeMedia";
import { aboutType } from "./about";
import { filmType } from "./film";
import { paintingType } from "./painting";
import { homeType } from "./home";
import { performanceType } from "./performance";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    pageBuilderType,
    footerSettingsType,
    aboutType,
    filmType,
    paintingType,
    performanceType,
    siteSettings,

    eventBlockType,
    aboutBlockType,
    featuredContentType,
    headerMediaType,
    doubleLandscapeType,
    doublePortraitType,
    largeImageLeftType,
    largeImageRightType,
    singleLandscapeType,
    singlePortraitType,
    pressBlockType,
    creditsAndAwardsType,
    imageCarouselType,
    workHeaderMediaType,
    headerInformationBlockType,
    workLandscapeMediaType,
  ],
};
