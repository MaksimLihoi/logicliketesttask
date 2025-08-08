export type IconType = keyof typeof iconRegistry;

export const iconRegistry = {
  cross: require('./icons/cross.png'),
  pointer: require('./icons/down-poiner.png'),
};

type IconKey = keyof typeof iconRegistry;
type IconKeys = IconKey[];

const keys = Object.keys(iconRegistry) as IconKeys;
export const icons = keys.reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {} as Record<IconKey, IconType>);
