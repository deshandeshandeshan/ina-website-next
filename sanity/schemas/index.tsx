import { SchemaTypeDefinition } from "sanity";
import { pageBuilderType } from "./pageBuilder";
import { footerSettingsType } from "./footerSettings";
import { doubleLandscapeType } from "./blocks/photographyBlocks/doubleLandscape";
import { doublePortraitType } from "./blocks/photographyBlocks/doublePortrait";
import { largeImageLeftType } from "./blocks/photographyBlocks/largeImageLeft";
import { largeImageRightType } from "./blocks/photographyBlocks/largeImageRight";
import { singleLandscapeType } from "./blocks/photographyBlocks/singleLandscape";
import { singlePortraitType } from "./blocks/photographyBlocks/singlePortrait";
import { aboutType } from "./about";
import { homeType } from "./home";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    pageBuilderType,
    footerSettingsType,
    aboutType,
    siteSettings,

    doubleLandscapeType,
    doublePortraitType,
    largeImageLeftType,
    largeImageRightType,
    singleLandscapeType,
    singlePortraitType,
  ],
};
