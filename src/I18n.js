import i18n from 'i18n-js';

import Json_en from "./locales/en.json";
import Json_cn from "./locales/cn.json";

const en = Json_en;
const cn = Json_cn;

i18n.fallbacks = true;
i18n.translations = { cn, en };
i18n.locale = 'en';

export default i18n;
